# Real-Time Stripe Payment - Quick Start ⚡

## What's Ready Now

✅ **Backend Infrastructure**
- Payment routes created (`/api/payment/stripe/*`)
- Webhook listener configured
- Database schema (payments table)
- Email service integration
- Real-time status polling (2-second intervals)

✅ **Frontend Implementation**
- Payment form updated with real-time status
- Service types match your website offerings
- Visual feedback (pending, processing, succeeded, failed)
- SPIROLINK branding applied

## What You Need to Do (3 Steps)

### Step 1️⃣: Get Stripe API Keys (5 min)
Go to: https://dashboard.stripe.com/apikeys

Copy these 3 values:
```
Secret Key:       sk_test_xxx...
Publishable Key:  pk_test_xxx...
```

### Step 2️⃣: Create Webhook in Stripe (3 min)
Go to: https://dashboard.stripe.com/webhooks

Click "Add endpoint" and enter:
```
URL: https://spirolink-website.onrender.com/api/payment/stripe/webhook
Events: checkout.session.completed, charge.succeeded, charge.failed, payment_intent.succeeded
```

Copy the Webhook Secret:
```
whsec_xxx...
```

### Step 3️⃣: Add Keys to Backend (2 min)

**In Render Dashboard:**
1. Go to your "spirolink-website" service
2. Click "Environment"
3. Add these 3 variables:

```
STRIPE_SECRET_KEY = sk_test_xxx...
STRIPE_PUBLISHABLE_KEY = pk_test_xxx...
STRIPE_WEBHOOK_SECRET = whsec_xxx...
```

Save and Render will auto-redeploy! ✨

**Also locally** (for testing):
Edit `chatbot-backend/.env`:
```
STRIPE_SECRET_KEY=sk_test_xxx...
STRIPE_PUBLISHABLE_KEY=pk_test_xxx...
STRIPE_WEBHOOK_SECRET=whsec_xxx...
```

---

## Test Payment (30 seconds)

1. Go to: https://spirolink-website.onrender.com/payment
2. Fill form:
   - Name: Test User
   - Email: your-email@gmail.com
   - Service: PON & FTTH
   - Amount: 1
3. Click "Proceed to Payment"
4. Use test card: **4242 4242 4242 4242**
   - Expiry: Any future date (e.g., 12/25)
   - CVC: Any 3 numbers (e.g., 123)
5. Click "Pay"
6. Should see "Payment successful" ✅

---

## How It Works (Real-Time)

```
User Pays ($)
    ↓
Session Created (Stripe)
    ↓
Frontend Polls Status (every 2 sec)
    ↓
Webhook: Payment Confirmed
    ↓
Status: succeeded
    ↓
Email Sent 📧
    ↓
Show Success Message ✅
```

---

## View Payment Records

**In pgAdmin** (https://pgadmin.onrender.com):
```sql
SELECT * FROM payments ORDER BY created_at DESC;
```

You should see:
- payment_id: spiro_1234567890_abc...
- email: (customer email)
- amount: 1.00
- status: succeeded
- transaction_id: (Stripe transaction ID)

---

## Database Created

Migration automatically created:
- ✅ `payments` table
- ✅ Indexes for fast queries
- ✅ Fields for status tracking

---

## Files Updated

```
Backend:
✅ routes/payment.js          (New - payment endpoints & webhook)
✅ db/payments.js             (Updated - database operations)
✅ lib/emailService.js        (Updated - email confirmations)
✅ server.js                  (Updated - imports payment routes)
✅ .env                       (Updated - Stripe keys added)
✅ migrations/001_...         (New - database table)

Frontend:
✅ src/pages/Payment.tsx      (Updated - real-time status polling)

Documentation:
✅ STRIPE_REALTIME_SETUP.md   (Complete setup guide)
```

---

## Troubleshooting

### "Failed to create payment intent"
→ Check STRIPE_SECRET_KEY is set in Render environment

### Payment status not updating
→ Frontend polls every 2 seconds. Wait for update.

### No confirmation email
→ Check RESEND_API_KEY is set in Render environment

### Webhook not working
→ Verify webhook URL is exactly: `https://spirolink-website.onrender.com/api/payment/stripe/webhook`

---

## What's Next?

Once keys are added and working:
1. Test with multiple payments
2. Check database for records
3. Verify emails are received
4. Test failed payment flow (use `4000000000000002`)
5. Deploy to production (change to `sk_live_` and `pk_live_` keys)

---

## Production Switch

When ready to go live:
1. Get production keys from Stripe (not test keys)
2. Update Render environment with live keys
3. Update Stripe webhook for production webhook secret
4. Test one real payment
5. Monitor payment dashboard

---

**That's it! Your payment system is ready to go.** 🎉

Need help? Check `STRIPE_REALTIME_SETUP.md` for detailed docs.
