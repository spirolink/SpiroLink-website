# PostgreSQL Setup & Integration Guide

## Status: ✅ Ready to Configure

Your PostgreSQL database is running and database `theepan` exists. Follow these steps to integrate it with your Node.js backend.

---

## Step 1: Install PostgreSQL Client Tools (Optional but recommended)

If you want to manage the database from terminal:

```bash
# Install PostgreSQL client tools via Homebrew
brew install postgresql@16

# Add to PATH (add to ~/.zshrc)
export PATH="/usr/local/opt/postgresql@16/bin:$PATH"

# Test connection
psql --version
```

---

## Step 2: Create Dedicated Database User

Using your PostgreSQL GUI (pgAdmin or PostgreSQL.app):

1. Open pgAdmin or your PostgreSQL tool
2. Right-click **Databases** → Select **theepan**
3. Open **Query Tool**
4. Paste this SQL and execute:

```sql
-- Create dedicated user for the application
CREATE USER spirolink_user WITH PASSWORD 'StrongPassword123!@#';

-- Grant permissions
GRANT ALL PRIVILEGES ON DATABASE theepan TO spirolink_user;

-- Grant schema permissions
GRANT ALL PRIVILEGES ON SCHEMA public TO spirolink_user;

-- Grant table creation
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO spirolink_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO spirolink_user;
```

**Or from terminal (if psql installed):**

```bash
psql -U postgres

# Inside psql prompt:
CREATE USER spirolink_user WITH PASSWORD 'StrongPassword123!@#';
GRANT ALL PRIVILEGES ON DATABASE theepan TO spirolink_user;
GRANT ALL PRIVILEGES ON SCHEMA public TO spirolink_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO spirolink_user;

# Exit
\q
```

---

## Step 3: Update Backend Environment Variables

### Update `.env` file in `chatbot-backend/`:

```bash
cd chatbot-backend

# Copy example to .env (if not exists)
cp .env.example .env

# Edit .env with your actual values:
nano .env  # or open in VS Code
```

**Add these lines to `.env`:**

```dotenv
# ============================================================================
# DATABASE CONFIGURATION
# ============================================================================
DATABASE_URL=postgresql://spirolink_user:StrongPassword123!@#@localhost:5432/theepan

# Server Port
PORT=5000
NODE_ENV=development

# OpenAI API Key
OPENAI_API_KEY=sk-proj-your-actual-key-here

# Email Configuration
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-16-char-app-password

# Frontend URL
FRONTEND_URL=http://localhost:5173
```

**⚠️ IMPORTANT:**
- Replace `StrongPassword123!@#` with your actual database password
- **Never commit `.env` to Git** (already in `.gitignore`)

---

## Step 4: Install Dependencies

```bash
# Inside chatbot-backend directory
npm install

# This installs the new `pg` package for PostgreSQL
```

Check that `pg` was added to `package.json`:

```bash
grep '"pg"' package.json
```

Expected output:
```json
"pg": "^8.11.3"
```

---

## Step 5: Verify Database Connection

### Test 1: Simple Connection Test

```bash
# From chatbot-backend directory
npm start
```

Watch for this message:
```
✅ PostgreSQL connected successfully
✅ Database initialization complete
```

If you see these messages → **Database is connected!** ✅

### Test 2: API Test Route

Once server is running, open in browser or curl:

```bash
curl http://localhost:5000/api/test-db
```

**Expected response:**
```json
{
  "now": "2026-02-07T14:35:42.123456Z"
}
```

If you get this → **Database query works!** ✅

### Test 3: Check Tables Created

In pgAdmin or terminal:

```bash
psql -U postgres -d theepan -c "\dt"
```

**Expected output:**
```
             List of relations
 Schema |     Name     | Type  | Owner
--------+--------------+-------+----------
 public | invoices     | table | postgres
 public | payment_logs | table | postgres
 public | payments     | table | postgres
```

---

## Step 6: Database Schema Details

### Payments Table
Stores all payment transactions:
```sql
CREATE TABLE payments (
  id UUID PRIMARY KEY,                    -- Unique payment ID
  user_email TEXT NOT NULL,               -- Customer email
  user_name TEXT,                         -- Customer name
  amount DECIMAL(10, 2) NOT NULL,        -- Payment amount
  currency TEXT NOT NULL,                 -- INR, USD, etc
  gateway TEXT NOT NULL,                  -- 'razorpay' or 'stripe'
  status TEXT DEFAULT 'pending',          -- pending, completed, failed
  transaction_id TEXT UNIQUE,             -- Razorpay/Stripe transaction ID
  invoice_number TEXT UNIQUE,             -- Invoice reference
  payment_method TEXT,                    -- 'card', 'upi', 'wallet', etc
  razorpay_order_id TEXT,                 -- Razorpay order reference
  razorpay_payment_id TEXT,               -- Razorpay payment reference
  stripe_payment_intent_id TEXT,          -- Stripe payment intent reference
  stripe_session_id TEXT,                 -- Stripe session reference
  description TEXT,                       -- Payment description
  metadata JSONB,                         -- Additional custom data
  created_at TIMESTAMP DEFAULT NOW(),     -- Creation timestamp
  updated_at TIMESTAMP DEFAULT NOW(),     -- Last update timestamp
  paid_at TIMESTAMP                       -- When payment completed
);
```

### Invoices Table
Stores generated invoices:
```sql
CREATE TABLE invoices (
  id UUID PRIMARY KEY,
  payment_id UUID REFERENCES payments,    -- Links to payments table
  invoice_number TEXT UNIQUE,
  user_email TEXT,
  user_name TEXT,
  amount DECIMAL,
  currency TEXT,
  status TEXT,                            -- draft, sent, paid
  pdf_url TEXT,                           -- S3 or storage URL
  sent_at TIMESTAMP,
  due_date DATE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Payment Logs Table
Audit trail of payment events:
```sql
CREATE TABLE payment_logs (
  id UUID PRIMARY KEY,
  payment_id UUID REFERENCES payments,
  event_type TEXT,                        -- 'razorpay_webhook', 'stripe_webhook', etc
  status TEXT,
  message TEXT,
  response_data JSONB,                    -- Full webhook/API response
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## Step 7: Using Database Functions in Code

### Example: Store a payment

```javascript
import { createPayment, addPaymentLog } from './db/payments.js';

const paymentData = {
  user_email: 'customer@example.com',
  user_name: 'John Doe',
  amount: 99.99,
  currency: 'USD',
  gateway: 'stripe',
  transaction_id: 'ch_1234567890',
  invoice_number: 'INV-2025-001',
  payment_method: 'card',
  description: 'SpiroLink Professional Plan',
  metadata: { plan: 'professional', seats: 5 }
};

try {
  const payment = await createPayment(paymentData);
  console.log('Payment created:', payment.id);
  
  // Add log entry
  await addPaymentLog(
    payment.id, 
    'stripe_payment_success', 
    'completed', 
    'Payment processed successfully',
    { amount: 99.99 }
  );
} catch (error) {
  console.error('Payment error:', error);
}
```

### Example: Retrieve customer payments

```javascript
import { getPaymentsByEmail, getPaymentStats } from './db/payments.js';

// Get all payments for a customer
const payments = await getPaymentsByEmail('customer@example.com');
console.log(`Customer has ${payments.length} payments`);

// Get overall statistics
const stats = await getPaymentStats();
console.log(`Total revenue: $${stats.total_amount}`);
console.log(`Completed payments: ${stats.completed}`);
```

---

## Step 8: Integration with Razorpay & Stripe Webhooks

### Razorpay Webhook Handler Example

```javascript
import { createPayment, addPaymentLog } from './db/payments.js';

app.post('/api/webhooks/razorpay', async (req, res) => {
  try {
    const { event, payload } = req.body;
    
    if (event === 'payment.authorized') {
      const { payment } = payload;
      
      const dbPayment = await createPayment({
        user_email: payment.notes.email,
        user_name: payment.notes.name,
        amount: payment.amount / 100,
        currency: 'INR',
        gateway: 'razorpay',
        transaction_id: payment.id,
        razorpay_payment_id: payment.id,
        status: 'completed'
      });
      
      await addPaymentLog(
        dbPayment.id,
        'razorpay_webhook',
        'completed',
        'Razorpay payment authorized',
        payment
      );
    }
    
    res.json({ status: 'success' });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: error.message });
  }
});
```

### Stripe Webhook Handler Example

```javascript
app.post('/api/webhooks/stripe', async (req, res) => {
  const sig = req.headers['stripe-signature'];
  
  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    
    if (event.type === 'charge.succeeded') {
      const charge = event.data.object;
      
      const dbPayment = await createPayment({
        user_email: charge.billing_details.email,
        amount: charge.amount / 100,
        currency: charge.currency.toUpperCase(),
        gateway: 'stripe',
        transaction_id: charge.id,
        stripe_payment_intent_id: charge.payment_intent,
        status: 'completed'
      });
      
      await addPaymentLog(
        dbPayment.id,
        'stripe_webhook',
        'completed',
        'Stripe payment succeeded',
        charge
      );
    }
    
    res.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(400).send('Webhook error');
  }
});
```

---

## Step 9: Troubleshooting

### Issue: "ECONNREFUSED - Connection refused"

**Solution:**
1. Verify PostgreSQL is running (check your PostgreSQL.app or pgAdmin)
2. Check DATABASE_URL in `.env` is correct
3. Verify username/password
4. Try connecting manually: `psql -U postgres -d theepan`

### Issue: "permission denied" for user

**Solution:**
```sql
-- Run in pgAdmin Query Tool as postgres user:
GRANT ALL PRIVILEGES ON DATABASE theepan TO spirolink_user;
GRANT USAGE ON SCHEMA public TO spirolink_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO spirolink_user;
```

### Issue: Table doesn't exist

**Solution:**
Server initialization should create tables. Force restart:
```bash
# Kill server
Ctrl+C

# Restart
npm start
```

---

## Step 10: Backup Your Database

### Regular Backups

```bash
# Backup the database
pg_dump -U postgres -d theepan > backup_theepan.sql

# Restore from backup
psql -U postgres -d theepan < backup_theepan.sql

# Backup with compression
pg_dump -U postgres -d theepan | gzip > backup_theepan.sql.gz
```

---

## Next Steps

1. ✅ Set up PostgreSQL user and environment variables
2. ✅ Install dependencies (`npm install`)
3. ✅ Start server and verify connection (`npm start`)
4. ✅ Test API routes (`curl http://localhost:5000/api/test-db`)
5. 🔄 Integrate with Razorpay & Stripe webhooks
6. 🔄 Connect to frontend (Payment.tsx component)
7. 🔄 Implement invoice generation & email

---

## Files Created

```
chatbot-backend/
├── config/
│   ├── db.js              ← PostgreSQL connection pool
│   └── initDb.js          ← Database schema initialization
├── db/
│   └── payments.js        ← Payment database operations
└── .env.example           ← Updated with DB_URL template
```

---

## Quick Reference

| Task | Command |
|------|---------|
| Start server | `npm start` |
| Development mode | `npm run dev` |
| Test DB connection | `curl http://localhost:5000/api/test-db` |
| View tables | `psql -U postgres -d theepan -c "\dt"` |
| Backup database | `pg_dump -U postgres -d theepan > backup.sql` |

---

**Ready to integrate payments with your database! 🚀**
