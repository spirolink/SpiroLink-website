# PostgreSQL Setup Checklist ✅

## Phase 1: Database & User Setup (5 minutes)

### In PostgreSQL GUI (pgAdmin or PostgreSQL.app):

- [ ] **Open theepan database** - Database already exists ✅
- [ ] **Create database user** - Run this SQL:
  ```sql
  CREATE USER spirolink_user WITH PASSWORD 'StrongPassword123!@#';
  GRANT ALL PRIVILEGES ON DATABASE theepan TO spirolink_user;
  GRANT ALL PRIVILEGES ON SCHEMA public TO spirolink_user;
  ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO spirolink_user;
  ```

---

## Phase 2: Backend Configuration (5 minutes)

### In Terminal:

```bash
# Navigate to backend
cd /Users/theepan/Documents/vs\ code/project/chatbot-backend

# Copy environment template
cp .env.example .env

# Edit .env file
nano .env
```

### In `.env` file, add:

```dotenv
DATABASE_URL=postgresql://spirolink_user:StrongPassword123!@#@localhost:5432/theepan
PORT=5000
NODE_ENV=development
OPENAI_API_KEY=sk-proj-your-key-here
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-app-password
FRONTEND_URL=http://localhost:5173
```

- [ ] **Edit `.env` with your actual values**
- [ ] **Save the file**

### Install Dependencies:

```bash
npm install
```

- [ ] **Verify `pg` package installed:**
  ```bash
  npm list pg
  ```
  Should show: `pg@8.11.3`

---

## Phase 3: Test Connection (2 minutes)

### Start Server:

```bash
npm start
```

### Watch Terminal for:

- [ ] ✅ `PostgreSQL connected successfully`
- [ ] ✅ `Database initialization complete`
- [ ] ✅ `Server running on port 5000`

### Test API:

```bash
# In another terminal
curl http://localhost:5000/api/test-db
```

- [ ] ✅ Should return current timestamp (database working!)

---

## Phase 4: Verify Tables (1 minute)

### In PostgreSQL GUI:

1. Expand **theepan** database
2. Expand **Schemas** → **public** → **Tables**
3. Verify these tables exist:
   - [ ] `payments` ✅
   - [ ] `invoices` ✅
   - [ ] `payment_logs` ✅

### Or from Terminal:

```bash
psql -U postgres -d theepan -c "\dt"
```

- [ ] Should show 3 tables

---

## Phase 5: Integration Points (Implementation)

These are ready to use in your code:

### Create a Payment:
```javascript
import { createPayment } from './db/payments.js';

const payment = await createPayment({
  user_email: 'customer@example.com',
  user_name: 'John Doe',
  amount: 99.99,
  currency: 'USD',
  gateway: 'stripe',
  transaction_id: 'ch_1234567890'
});
```

- [ ] **Ready to implement in Razorpay webhook**
- [ ] **Ready to implement in Stripe webhook**

### Fetch Customer Payments:
```javascript
import { getPaymentsByEmail } from './db/payments.js';

const payments = await getPaymentsByEmail('customer@example.com');
```

- [ ] **Ready to implement in customer dashboard**

### Get Payment Statistics:
```javascript
import { getPaymentStats } from './db/payments.js';

const stats = await getPaymentStats();
// { total_payments, completed, pending, failed, total_amount, unique_customers }
```

- [ ] **Ready for admin dashboard**

---

## Phase 6: Next Implementation Tasks

- [ ] **Connect Razorpay webhook** to save payments in DB
- [ ] **Connect Stripe webhook** to save payments in DB
- [ ] **Create invoice endpoint** to generate & store invoices
- [ ] **Add customer payment history** page to frontend
- [ ] **Create admin dashboard** showing payment statistics
- [ ] **Set up automated email** invoices on payment completion
- [ ] **Implement payment status updates** from webhooks

---

## Files & Locations

| File | Purpose | Location |
|------|---------|----------|
| `db.js` | Database connection pool | `chatbot-backend/config/` |
| `initDb.js` | Schema initialization | `chatbot-backend/config/` |
| `payments.js` | Database functions | `chatbot-backend/db/` |
| `.env` | Configuration secrets | `chatbot-backend/.env` ⚠️ |
| `.env.example` | Template (commit to git) | `chatbot-backend/.env.example` ✅ |

---

## Quick Commands Reference

```bash
# Start server with database
npm start

# Development mode with auto-reload
npm run dev

# View database structure
psql -U postgres -d theepan -c "\dt"

# Create backup
pg_dump -U postgres -d theepan > backup.sql

# Restore backup
psql -U postgres -d theepan < backup.sql

# Connect via CLI
psql -U postgres -d theepan
```

---

## Troubleshooting Quick Links

- **Connection refused?** → PostgreSQL might not be running
- **Permission denied?** → Check user permissions (GRANT ALL)
- **Table not found?** → Restart server to trigger initialization
- **Password error?** → Verify password in DATABASE_URL

---

## Success Indicators ✅

- [ ] PostgreSQL running (pgAdmin shows "Running")
- [ ] User `spirolink_user` created with permissions
- [ ] `.env` file configured with `DATABASE_URL`
- [ ] `npm install` completes without errors
- [ ] Server starts with "✅ PostgreSQL connected successfully"
- [ ] `curl` test returns timestamp
- [ ] Three tables visible in pgAdmin
- [ ] Ready to implement webhooks!

---

**Status: Database infrastructure ready for integration! 🚀**

Next: Follow [POSTGRESQL_SETUP_GUIDE.md](./POSTGRESQL_SETUP_GUIDE.md) for detailed implementation steps.
