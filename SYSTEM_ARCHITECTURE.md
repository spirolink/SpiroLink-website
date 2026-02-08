# Real-Time Stripe Payment System - Architecture Diagram

## System Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                    YOUR SPIROLINK WEBSITE                           │
│                  https://spirolink-website.onrender.com             │
└─────────────────────────────────────────────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
          ┌─────────▼──────────┐   ┌──▼──────────────┐
          │  FRONTEND (React)   │   │  BACKEND (Node) │
          │  /payment page      │   │  /api/payment   │
          └──────────┬──────────┘   └──┬───────────────┘
                     │                  │
                     │ 1. Create       │ 2. Create Session
                     │    Payment      │    Database Record
                     └────────────────▶│
                                       │
                     ┌─────────────────▼──────────────┐
                     │      STRIPE (External)         │
                     │   stripe.com API               │
                     │   - Checkout Session           │
                     │   - Payment Processing         │
                     │   - Card Validation            │
                     └──────┬──────────────┬───────────┘
                            │              │
                    3. Redirect   4. User Payment
                    to Checkout   
                            │
                     ┌──────▼─────────┐
                     │ Stripe Checkout │
                     │   (Payment UI)  │
                     └──────┬──────────┘
                            │
                    ┌───────▼────────┐
                    │  User Completes│
                    │    Payment     │
                    └───────┬────────┘
                            │
                     5. Webhook Event
                            │
                    ┌──────▼──────────────┐
                    │  WEBHOOK LISTENER   │
                    │ /api/payment/webhook│
                    └──────┬───────────────┘
                           │
                    6. Update Status
                    7. Send Email
                    8. Log Transaction
                           │
                    ┌──────▼──────────┐
                    │ DATABASE        │
                    │ (PostgreSQL)    │
                    │ payments table  │
                    └─────────────────┘
                           │
                    9. Status Update
                    (polling)
                           │
                    ┌──────▼──────────┐
                    │  FRONTEND       │
                    │ Shows Success   │
                    │      ✅         │
                    └─────────────────┘
```

---

## Detailed Component Breakdown

### Frontend Flow

```
Payment.tsx (React Component)
    │
    ├─ User Input Form
    │  ├─ Name
    │  ├─ Email
    │  ├─ Service Type (dropdown)
    │  └─ Amount
    │
    ├─ Form Submission
    │  └─ POST /api/payment/stripe/create-intent
    │
    ├─ Get Response
    │  ├─ sessionId (from Stripe)
    │  └─ paymentId (from backend)
    │
    ├─ Redirect to Stripe
    │  └─ stripe.redirectToCheckout()
    │
    ├─ Status Polling (every 2 seconds)
    │  ├─ GET /api/payment/status/:paymentId
    │  ├─ Check: status (pending/processing/succeeded/failed)
    │  └─ Update UI accordingly
    │
    └─ Show Result
       ├─ Success: ✅ Payment successful
       ├─ Failed: ❌ Payment failed
       └─ Processing: ⏳ Processing...
```

### Backend Flow

```
server.js (Main Server)
    │
    ├─ Import Routes
    │  ├─ paymentRoutes (/api/payment/*)
    │  └─ emailService (sendPaymentConfirmation)
    │
    └─ Three Main Endpoints
       │
       ├─ POST /stripe/create-intent
       │  ├─ Validate input (amount, email, etc)
       │  ├─ Create Stripe session
       │  ├─ Create database record (status: pending)
       │  └─ Return sessionId + paymentId
       │
       ├─ GET /status/:paymentId
       │  ├─ Query database by paymentId
       │  ├─ Return current status + metadata
       │  └─ Frontend uses for polling
       │
       └─ POST /stripe/webhook
          ├─ Verify Stripe signature (security)
          ├─ Handle events:
          │  ├─ checkout.session.completed → succeeded
          │  ├─ charge.succeeded → succeeded
          │  ├─ charge.failed → failed
          │  └─ payment_intent.* → succeeded/failed
          │
          ├─ Update database status
          ├─ Send confirmation email (if succeeded)
          └─ Return 200 OK
```

### Database Flow

```
PostgreSQL (payments Table)
    │
    ├─ INSERT (new payment)
    │  └─ CREATE endpoint creates with status: pending
    │
    ├─ SELECT (check status)
    │  └─ GET /status endpoint queries by paymentId
    │
    ├─ UPDATE (webhook updates)
    │  ├─ Webhook: pending → processing
    │  ├─ Webhook: processing → succeeded
    │  ├─ Webhook: any → failed
    │  └─ Stores transaction_id from Stripe
    │
    └─ Indexes (for performance)
       ├─ payment_id (primary lookup)
       ├─ user_id (user history)
       ├─ status (filtering)
       ├─ stripe_session_id (webhook lookup)
       └─ stripe_payment_intent (webhook lookup)
```

### Email Flow

```
emailService.js (Resend Integration)
    │
    ├─ Triggered by: Webhook (charge.succeeded)
    │
    ├─ Compose Email
    │  ├─ Template: Payment Confirmation
    │  ├─ Data:
    │  │  ├─ Customer name
    │  │  ├─ Amount
    │  │  ├─ Service type
    │  │  ├─ Transaction ID
    │  │  └─ Payment ID
    │  └─ Styling: Professional HTML
    │
    ├─ Send via Resend
    │  ├─ From: noreply@spirolink.com
    │  ├─ To: customer email
    │  └─ Subject: Payment Confirmation - SPIROLINK
    │
    └─ Log Result (console/database)
       ├─ Success: ✅ Email sent
       └─ Failed: ⚠️ Log error (don't fail payment)
```

---

## Real-Time Status Flow

```
Timeline: Payment Created to Completed

0:00 ─────────────────────────────────────────────────
     User clicks "Proceed to Payment"
     → status: PENDING
     
     Backend creates Stripe session
     → Database records created
     
     Frontend starts polling (GET /status/)
     → Polls every 2 seconds

2:00 ─────────────────────────────────────────────────
     Frontend polls: Still pending
     → Shows "Processing..."

4:00 ─────────────────────────────────────────────────
     Frontend polls: Still pending
     → Shows "Processing..."

6:00 ─────────────────────────────────────────────────
     USER COMPLETES PAYMENT ON STRIPE ✓
     
     Stripe sends webhook event
     → status: PROCESSING
     
     Backend receives webhook
     → Verifies signature
     → Updates database
     → Sends confirmation email

8:00 ─────────────────────────────────────────────────
     Frontend polls: Status is SUCCEEDED ✓
     → Shows "Payment Successful" ✅
     → Stops polling
     → Clears form
     
     User receives confirmation email 📧
     → Contains transaction ID
     → Contains payment details

═════════════════════════════════════════════════════
```

---

## Data Flow Between Systems

```
┌──────────────┐         POST /create-intent        ┌──────────────┐
│              │ ────────────────────────────────────▶ │              │
│  FRONTEND    │  { name, email, serviceType,amt }   │   BACKEND    │
│              │                                     │              │
│   React      │ ◀────────────────────────────────── │   Express    │
│              │ { sessionId, paymentId }            │              │
└──────────────┘                                     └──────┬───────┘
       ▲                                                    │
       │                                                    │ Creates
       │ Polling GET /status/:paymentId                   │ Session
       │ every 2 seconds                            ┌──────▼───────┐
       │                                            │   STRIPE     │
       │                                            │   API        │
       │                                            └──────┬───────┘
       │                                                    │
       │ Frontend receives status updates                 │
       │ ← Shows processing/success                       │
       │                                                   │
       └──────────────────────────────────────────────────┘
                                                           │
                                            [User Payment Completes]
                                                           │
                                                    Webhook Event
                                                           │
                                                           ▼
                                                    POST /webhook
                                                           │
                                            ┌──────────────▼──────────┐
                                            │   Backend Processes     │
                                            │   ├─ Verify signature   │
                                            │   ├─ Update status      │
                                            │   ├─ Send email         │
                                            │   └─ Log transaction    │
                                            └──────────────┬──────────┘
                                                          │
                                                   ┌──────▼──────┐
                                                   │  Database   │
                                                   │  Updated    │
                                                   └─────────────┘
```

---

## Payment Status State Machine

```
                    ┌──────────────────┐
                    │  IDLE (No Payment)│
                    └─────────┬────────┘
                              │
                    User clicks "Pay"
                              │
                    ┌─────────▼──────────┐
                    │     PENDING        │
                    │ (Session created)  │
                    └─────────┬──────────┘
                              │
                   User redirected to Stripe
                              │
                    ┌─────────▼──────────┐
                    │   PROCESSING       │
                    │ (In Stripe Checkout)
                    └─────────┬──────────┘
                              │
                   ┌──────────┴──────────┐
                   │                     │
        Payment Succeeds        Payment Fails
                   │                     │
        ┌──────────▼──────────┐   ┌──────▼──────────┐
        │    SUCCEEDED ✅     │   │     FAILED ❌    │
        │ (Email sent)        │   │ (Error shown)    │
        └─────────────────────┘   └──────────────────┘
```

---

## Security Layers

```
┌─────────────────────────────────────────────────┐
│   User Client (Secure HTTPS)                    │
│   ├─ Frontend in browser                        │
│   ├─ CORS restricted                           │
│   └─ Never sees Secret Keys                    │
└────────────┬────────────────────────────────────┘
             │ HTTPS
┌────────────▼────────────────────────────────────┐
│   Stripe Publishable Key (Public)               │
│   ├─ Safe to expose in frontend                 │
│   ├─ Only creates sessions                      │
│   └─ Cannot charge without Secret Key           │
└────────────┬────────────────────────────────────┘
             │ HTTPS
┌────────────▼────────────────────────────────────┐
│   Render Backend (Private)                      │
│   ├─ STRIPE_SECRET_KEY (Private)                │
│   ├─ STRIPE_WEBHOOK_SECRET (Private)            │
│   ├─ Environment variables only                 │
│   ├─ Webhook signature verification             │
│   └─ SSL database connection                    │
└────────────┬────────────────────────────────────┘
             │ SSL/TLS
┌────────────▼────────────────────────────────────┐
│   PostgreSQL Database                           │
│   ├─ Encrypted at rest                          │
│   ├─ Accessible only from backend               │
│   ├─ No raw card data stored                    │
│   └─ PCI compliance (Stripe handles cards)      │
└─────────────────────────────────────────────────┘
```

---

## Deployment Architecture

```
┌────────────────────────────────────────────────────┐
│           RENDER.COM (Single Service)              │
│                                                    │
│  ┌──────────────────────────────────────────┐    │
│  │  Frontend (React + Vite)                 │    │
│  │  ├─ /payment page                        │    │
│  │  ├─ Real-time status polling             │    │
│  │  └─ SPIROLINK branding                   │    │
│  └──────────────────────────────────────────┘    │
│                                                    │
│  ┌──────────────────────────────────────────┐    │
│  │  Backend (Node.js + Express)             │    │
│  │  ├─ /api/payment routes                  │    │
│  │  ├─ Webhook listener                     │    │
│  │  ├─ Email service                        │    │
│  │  └─ Database connection                  │    │
│  └──────────────────────────────────────────┘    │
│                                                    │
│  ┌──────────────────────────────────────────┐    │
│  │  Environment Variables (Secrets)         │    │
│  │  ├─ STRIPE_SECRET_KEY                    │    │
│  │  ├─ STRIPE_PUBLISHABLE_KEY               │    │
│  │  ├─ STRIPE_WEBHOOK_SECRET                │    │
│  │  └─ RESEND_API_KEY                       │    │
│  └──────────────────────────────────────────┘    │
└────────────────────────────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
        ▼               ▼               ▼
    ┌────────┐    ┌────────┐    ┌──────────┐
    │ Stripe │    │Resend  │    │PostgreSQL│
    │ API    │    │Email   │    │(Render)  │
    │        │    │        │    │          │
    │Payment │    │Config  │    │payments  │
    │Handler │    │Service │    │table     │
    └────────┘    └────────┘    └──────────┘
```

---

## File Architecture

```
project/
├── src/
│   └── pages/
│       └── Payment.tsx ─────────┐
│           ├─ Payment form      │ Frontend
│           ├─ Real-time polling │
│           └─ Status display    │
│                                │
chatbot-backend/                │
├── server.js ◀──────────────────┘
│   └─ Imports payment routes
│
├── routes/
│   └── payment.js ◀────────────────────┐
│       ├─ POST /stripe/create-intent   │
│       ├─ GET /status/:paymentId       │
│       └─ POST /stripe/webhook         │ Backend
│                                       │
├── db/                                 │
│   └── payments.js ◀─────────────────────┤
│       ├─ createPayment()               │
│       ├─ getPayment()                  │
│       ├─ updatePaymentStatus()         │
│       └─ getUserPayments()             │
│                                        │
├── lib/                                │
│   └── emailService.js ◀──────────────────┤
│       ├─ initializeEmailService()     │
│       ├─ sendPaymentConfirmation()    │
│       └─ sendPaymentFailedEmail()     │
│                                       │
└── migrations/
    └── 001_create_payments_table.js
        └─ Creates database schema
```

---

## Performance Optimization

```
Polling Strategy:
    ┌─ Every 2 seconds (balance: accurate + low load)
    ├─ Max 30 checks (60 seconds timeout)
    ├─ Stop on success/failure
    └─ Clean up interval on unmount

Database Indexing:
    ├─ payment_id (most common query)
    ├─ status (filtering/reporting)
    ├─ stripe_session_id (webhook lookup)
    ├─ user_id (user history)
    └─ created_at (sorting)

Email Optimization:
    ├─ Async sending (non-blocking)
    ├─ Retry logic (Resend handles)
    └─ Template caching (Resend)

API Response Caching:
    ├─ Frontend caches status
    ├─ Prevents duplicate requests
    └─ Updates on new polls
```

---

**Architecture is modular, scalable, and production-ready! ✅**
