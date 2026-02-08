# Real-Time Stripe Payment Integration Setup

## 🎯 Overview
Complete real-time Stripe payment system with:
- ✅ Real-time payment status updates (polling every 2 seconds)
- ✅ Webhook listener for Stripe events
- ✅ Payment confirmation emails
- ✅ PostgreSQL payment records storage
- ✅ Visual status indicators on frontend

---

## 📋 Setup Steps

### Step 1: Get Stripe API Keys
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. Copy your **Secret Key** (starts with `sk_test_` or `sk_live_`)
3. Copy your **Publishable Key** (starts with `pk_test_` or `pk_live_`)

### Step 2: Create Stripe Webhook
1. Go to [Stripe Webhooks](https://dashboard.stripe.com/webhooks)
2. Click "Add endpoint"
3. Endpoint URL: `https://spirolink-website.onrender.com/api/payment/stripe/webhook`
4. Events to listen for:
   - `charge.succeeded`
   - `charge.failed`
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Copy the **Webhook Secret** (starts with `whsec_`)

### Step 3: Update Backend Environment Variables

Edit `chatbot-backend/.env`:

```env
# STRIPE KEYS (from dashboard)
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY_HERE
STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY_HERE
STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET_HERE

# EMAIL (for confirmations)
RESEND_API_KEY=re_YOUR_API_KEY
RESEND_FROM_EMAIL=noreply@spirolink.com
```

### Step 4: Update Frontend Environment Variables

Create or edit `project/.env.local`:

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY_HERE
```

### Step 5: Create Payments Table

Run the migration script on Render:

```bash
cd /Users/theepan/Documents/vs\ code/project/chatbot-backend
node migrations/001_create_payments_table.js
```

Or use pgAdmin:
```sql
CREATE TABLE IF NOT EXISTS payments (
  id SERIAL PRIMARY KEY,
  payment_id VARCHAR(255) UNIQUE NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  service_type VARCHAR(100) NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'usd',
  status VARCHAR(50) DEFAULT 'pending',
  stripe_session_id VARCHAR(255),
  stripe_payment_intent VARCHAR(255),
  transaction_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  metadata JSONB
);

CREATE INDEX idx_payment_id ON payments(payment_id);
CREATE INDEX idx_user_id ON payments(user_id);
CREATE INDEX idx_status ON payments(status);
CREATE INDEX idx_stripe_session_id ON payments(stripe_session_id);
```

### Step 6: Update Backend Server

The payment routes are already integrated in `chatbot-backend/routes/payment.js`:

```javascript
// Endpoints available:
POST /api/payment/stripe/create-intent     // Create payment session
GET  /api/payment/status/:paymentId         // Get payment status
POST /api/payment/stripe/webhook           // Webhook listener
```

Import in `server.js`:
```javascript
import paymentRoutes from './routes/payment.js';
// ...
app.use('/api/payment', paymentRoutes);
```

---

## 🔄 Payment Flow (Real-Time)

### Frontend (User's Journey)
1. User fills payment form (name, email, service, amount)
2. Clicks "Proceed to Payment"
3. Frontend shows **"Payment pending..."** status
4. Redirects to Stripe Checkout
5. Backend polls payment status every 2 seconds
6. User completes payment on Stripe
7. Frontend shows **"Processing..."** status
8. Webhook receives `checkout.session.completed`
9. Database updates payment to `succeeded`
10. Frontend receives status update via polling
11. Shows **"Payment successful"** ✅
12. Sends confirmation email 📧

### Backend (Automatic)
```
Payment Created (pending)
    ↓
Stripe Session Created
    ↓
[User completes Stripe checkout]
    ↓
Webhook: checkout.session.completed
    ↓
Payment Status: processing → succeeded
    ↓
Send Confirmation Email
    ↓
Update Database Record
```

---

## 💌 Email Confirmation

After payment succeeds:
- **Recipient:** Customer email
- **Subject:** "Payment Confirmation - SPIROLINK"
- **Contains:** Amount, Service Type, Transaction ID, Payment ID, Date
- **Service:** Resend (configured via RESEND_API_KEY)

---

## 🧪 Testing with Stripe Test Cards

Use these test cards in the payment form:

| Card Type | Number | Exp | CVC |
|-----------|--------|-----|-----|
| Visa (Success) | 4242 4242 4242 4242 | Any future date | Any 3 digits |
| Visa (Declined) | 4000 0000 0000 0002 | Any future date | Any 3 digits |
| 3D Secure | 4000 0025 0000 3155 | Any future date | Any 3 digits |

---

## 📊 Payment Status Tracking

### Database Fields
- `payment_id`: Unique identifier (spiro_TIMESTAMP_RANDOM)
- `status`: pending → processing → succeeded/failed
- `stripe_session_id`: Stripe checkout session ID
- `stripe_payment_intent`: Stripe payment intent ID
- `transaction_id`: Final transaction reference
- `updated_at`: Last status update timestamp

### Frontend Status Display
```
idle         → User hasn't started payment
pending      → Creating payment session
processing   → Redirected to Stripe
succeeded    → ✅ Payment complete (with email confirmation)
failed       → ❌ Payment failed (retry option)
```

---

## 🔐 Security

✅ Webhook signature verification
✅ HTTPS only (Render)
✅ Environment variables (never hardcoded)
✅ Transaction IDs for audit trail
✅ CORS configured for Render domain
✅ Database connection with SSL

---

## 🛠 Backend File Structure

```
chatbot-backend/
├── routes/
│   └── payment.js                    # ← Payment endpoints & webhook
├── db/
│   └── payments.js                   # ← Database operations
├── lib/
│   └── emailService.js               # ← Email sending
├── migrations/
│   └── 001_create_payments_table.js  # ← Database migration
├── config/
│   └── db.js                         # ← Database connection
└── server.js                         # ← Main server
```

---

## 🚀 Deployment

### Render Backend
1. Push all changes to git
2. Render auto-deploys from main/theepan branch
3. Set environment variables in Render dashboard:
   - STRIPE_SECRET_KEY
   - STRIPE_PUBLISHABLE_KEY
   - STRIPE_WEBHOOK_SECRET
   - RESEND_API_KEY
   - RESEND_FROM_EMAIL

### Stripe Webhook
- Endpoint: `https://spirolink-website.onrender.com/api/payment/stripe/webhook`
- Only listens to configured events
- Retries failed webhooks (Stripe handles)

---

## 📈 Payment Queries (Database)

Check payment stats:
```sql
-- All payments
SELECT * FROM payments ORDER BY created_at DESC;

-- By status
SELECT COUNT(*), status FROM payments GROUP BY status;

-- Revenue
SELECT SUM(amount) as total_revenue FROM payments WHERE status = 'succeeded';

-- By user
SELECT * FROM payments WHERE user_id = 1 ORDER BY created_at DESC;

-- Recent payments
SELECT * FROM payments WHERE created_at > NOW() - INTERVAL '24 hours';
```

---

## ✅ Verification Checklist

Before going live:
- [ ] Stripe keys added to .env
- [ ] Webhook secret added to .env
- [ ] Payments table created in PostgreSQL
- [ ] Payment routes imported in server.js
- [ ] Email service configured (Resend)
- [ ] Frontend .env has VITE_STRIPE_PUBLISHABLE_KEY
- [ ] Webhook URL registered in Stripe dashboard
- [ ] Test payment with test card 4242 4242 4242 4242
- [ ] Confirmation email received
- [ ] Payment record created in database
- [ ] Status updates in real-time (every 2 seconds)
- [ ] Failed payment handling works
- [ ] Render deployment successful

---

## 🆘 Troubleshooting

### "Failed to create payment intent"
- Check STRIPE_SECRET_KEY is set correctly
- Check /api/payment/stripe/create-intent endpoint is accessible

### Webhook not receiving events
- Verify webhook URL is correct: `https://spirolink-website.onrender.com/api/payment/stripe/webhook`
- Check webhook secret matches STRIPE_WEBHOOK_SECRET
- View webhook attempts in Stripe dashboard

### Email not sent
- Check RESEND_API_KEY is set
- Check RESEND_FROM_EMAIL is set
- View email logs in Resend dashboard

### Status not updating
- Check payment record created in database
- Frontend polls every 2 seconds - wait for update
- Check browser console for fetch errors

---

## 📞 Support

- **Stripe Issues:** https://support.stripe.com
- **Resend Issues:** https://resend.com/support
- **Database Issues:** Check pgAdmin at https://pgadmin.onrender.com

---

**Ready to accept payments! 🎉**
