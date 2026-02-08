# Payment API Documentation

## Base URL
```
https://spirolink-website.onrender.com/api/payment
```

---

## 1. Create Payment Intent

**Endpoint:** `POST /stripe/create-intent`

**Purpose:** Create a Stripe checkout session and return session ID

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "serviceType": "PON & FTTH",
  "amount": 50,
  "userId": 1
}
```

**Query Parameters:**
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| name | string | ✅ | Customer name |
| email | string | ✅ | Customer email |
| serviceType | string | ✅ | One of: PON & FTTH, Microwave Network, Optical Long Haul, WiFi Network, Consulting & Design, Other |
| amount | number | ✅ | Amount in USD (minimum $1) |
| userId | number | ❌ | Optional - logged-in user ID |

**Response (Success - 200):**
```json
{
  "sessionId": "cs_test_abc123...",
  "paymentId": "spiro_1675123456_xyz789",
  "clientSecret": "pi_test_secret..."
}
```

**Response (Error - 400/500):**
```json
{
  "error": "Missing required fields: email, name, serviceType, amount"
}
```

**Frontend Usage:**
```javascript
const response = await fetch('/api/payment/stripe/create-intent', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    serviceType: 'PON & FTTH',
    amount: 50
  })
});

const data = await response.json();
// Use data.sessionId with Stripe.js to redirect
```

---

## 2. Check Payment Status

**Endpoint:** `GET /status/:paymentId`

**Purpose:** Get real-time payment status

**URL Parameters:**
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| paymentId | string | ✅ | Payment ID from create-intent response |

**Response (Success - 200):**
```json
{
  "payment_id": "spiro_1675123456_xyz789",
  "status": "succeeded",
  "amount": 50,
  "service_type": "PON & FTTH",
  "email": "john@example.com",
  "created_at": "2025-02-07T10:30:00Z",
  "updated_at": "2025-02-07T10:32:15Z",
  "transaction_id": "ch_1234567890abc"
}
```

**Response (Not Found - 404):**
```json
{
  "error": "Payment not found"
}
```

**Possible Status Values:**
| Status | Meaning | Action |
|--------|---------|--------|
| pending | Payment session created, waiting for Stripe redirect | Wait for user to complete payment |
| processing | Payment in progress | Continue polling |
| succeeded | ✅ Payment completed successfully | Stop polling, show success |
| failed | ❌ Payment declined | Show error, allow retry |

**Frontend Usage (Polling):**
```javascript
const paymentId = 'spiro_1675123456_xyz789';

const pollStatus = setInterval(async () => {
  const response = await fetch(`/api/payment/status/${paymentId}`);
  const payment = await response.json();
  
  if (payment.status === 'succeeded') {
    clearInterval(pollStatus);
    showSuccessMessage();
  } else if (payment.status === 'failed') {
    clearInterval(pollStatus);
    showErrorMessage();
  }
}, 2000); // Poll every 2 seconds
```

---

## 3. Stripe Webhook Listener

**Endpoint:** `POST /stripe/webhook`

**Purpose:** Listen to Stripe events and update payment status

**Headers:**
```
stripe-signature: t=1234567890,v1=abc123...
Content-Type: application/json
```

**Listened Events:**
- `checkout.session.completed` → Status → `succeeded`
- `charge.succeeded` → Status → `succeeded`
- `charge.failed` → Status → `failed`
- `payment_intent.succeeded` → Status → `processing` → `succeeded`
- `payment_intent.payment_failed` → Status → `failed`

**Automatic Actions on Webhook:**
1. ✅ Update payment status in database
2. ✅ Send confirmation email (on succeeded)
3. ✅ Log transaction ID
4. ✅ Update timestamps

**Response (Success - 200):**
```json
{
  "received": true
}
```

**Note:** Stripe retries failed webhooks automatically. This endpoint is called by Stripe servers, not the frontend.

---

## Database Schema

### payments Table
```sql
CREATE TABLE payments (
  id                   SERIAL PRIMARY KEY,
  payment_id           VARCHAR(255) UNIQUE NOT NULL,
  user_id              INTEGER REFERENCES users(id),
  email                VARCHAR(255) NOT NULL,
  name                 VARCHAR(255) NOT NULL,
  service_type         VARCHAR(100) NOT NULL,
  amount               DECIMAL(10, 2) NOT NULL,
  currency             VARCHAR(3) DEFAULT 'usd',
  status               VARCHAR(50) DEFAULT 'pending',
  stripe_session_id    VARCHAR(255),
  stripe_payment_intent VARCHAR(255),
  transaction_id       VARCHAR(255),
  created_at           TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at           TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  metadata             JSONB
);
```

---

## Payment Flow Diagram

```
┌──────────────────────────────────────────────────────────────┐
│                     PAYMENT FLOW                              │
└──────────────────────────────────────────────────────────────┘

[Frontend]                    [Backend]                [Stripe]
    │                            │                        │
    ├─ Create Payment ──────────>│                        │
    │  (POST /create-intent)     │                        │
    │                            ├─ Create Session ──────>│
    │<────── sessionId ──────────┤                        │
    │       + paymentId          │<─ session.id ─────────┤
    │                            │                        │
    │ Redirect to Stripe ────────────────────────────────>│
    │ (Stripe Checkout)          │                        │
    │                            │                        │
    ├─ Poll Status ─────────────>│ (every 2 seconds)     │
    │ (GET /status)              │                        │
    │                            │                        │
    │  [User completes payment on Stripe]                │
    │                            │                        │
    │                      <─── Webhook ────────────────┤
    │                    (charge.succeeded)               │
    │                            │                        │
    │<─── Status: succeeded ─────┤                        │
    │                            ├─ Send Email ──────────>│
    │                            │  (confirmation)       │
    │                            │                        │
    └─ Show Success ────────────┘                        │
       message                   │                        │
                                 └────────────────────────┘
```

---

## Error Codes

| Status Code | Error | Solution |
|-------------|-------|----------|
| 400 | Missing required fields | Add all required parameters |
| 400 | Amount must be at least $1 | Use amount >= 1 |
| 404 | Payment not found | Check payment ID is correct |
| 500 | Failed to create payment intent | Check STRIPE_SECRET_KEY is set |
| 500 | Webhook signature verification failed | Check webhook secret matches |

---

## Test Scenarios

### Successful Payment
1. Use card: `4242 4242 4242 4242`
2. Expiry: Any future date
3. CVC: Any 3 digits
4. Result: `status: succeeded`

### Failed Payment
1. Use card: `4000 0000 0000 0002`
2. Expiry: Any future date
3. CVC: Any 3 digits
4. Result: `status: failed`

### 3D Secure Payment
1. Use card: `4000 0025 0000 3155`
2. Will prompt for additional verification
3. Result: `status: processing` → `succeeded`

---

## Security Considerations

✅ **Implemented:**
- Webhook signature verification (HMAC)
- HTTPS only communication
- Environment variable storage (no hardcoding)
- Database transaction IDs for audit trail
- SSL database connection
- CORS configured

✅ **Recommendations:**
- Use production Stripe keys for live payments
- Enable 3D Secure for fraud prevention
- Monitor payment logs regularly
- Set up fraud detection rules in Stripe
- Keep webhook secret confidential
- Rotate API keys periodically

---

## Monitoring & Logs

### View All Payments
```sql
SELECT * FROM payments ORDER BY created_at DESC LIMIT 10;
```

### View Failed Payments
```sql
SELECT * FROM payments WHERE status = 'failed';
```

### View Payment Stats
```sql
SELECT 
  COUNT(*) as total_payments,
  COUNT(CASE WHEN status = 'succeeded' THEN 1 END) as successful,
  COUNT(CASE WHEN status = 'failed' THEN 1 END) as failed,
  SUM(CASE WHEN status = 'succeeded' THEN amount ELSE 0 END) as total_revenue
FROM payments;
```

### View Real-time Status
```sql
SELECT payment_id, status, amount, created_at, updated_at 
FROM payments 
ORDER BY updated_at DESC 
LIMIT 5;
```

---

## CORS Configuration

Configured origins:
- `http://localhost:5173` (local frontend)
- `https://spirolink-website.onrender.com` (production)
- `http://localhost:3000` (alternative local)

---

## Rate Limiting

⚠️ **Not implemented** - Consider adding for production:
- 100 requests per minute per IP
- 10 payments per hour per email
- Monitor for abuse patterns

---

## Support & Debugging

### Enable Debug Logs
In server.js:
```javascript
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});
```

### Check Stripe Dashboard
- View all payments: https://dashboard.stripe.com/payments
- View webhooks: https://dashboard.stripe.com/webhooks
- View events: https://dashboard.stripe.com/events

### Common Issues

**"sessionId is undefined"**
→ Check create-intent endpoint is accessible
→ Check STRIPE_SECRET_KEY is set

**"Payment status not updating"**
→ Wait 2-3 seconds (polling interval)
→ Check webhook is receiving events
→ Verify payment_id is correct

**"Webhook not triggering"**
→ Check webhook URL in Stripe dashboard
→ Verify webhook secret matches STRIPE_WEBHOOK_SECRET
→ Check for errors in Stripe webhook attempts

---

**API Documentation Complete** ✅
