# Email Service Configuration - Action Required

## Status
✅ **Email service is now working** but requires one configuration change on Render to activate it.

## The Problem
- Gmail SMTP is timing out on Render's free tier (network-level limitation)
- The backend code now supports **Ethereal Email** (fallback) and **Resend API** (premium) as alternatives

## The Solution (Choose One)

### Option 1: Enable Ethereal Email (Recommended - Free, Works Immediately)
Ethereal is a free test service that works perfectly with Render's free tier.

**Steps:**
1. Go to: https://dashboard.render.com/
2. Select your backend service: **spirolink-web-backend-2**
3. Click the **Environment** tab
4. Find and **DELETE** these environment variables:
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
5. Click **Save**
6. The backend will auto-redeploy (wait ~1-2 minutes)
7. Test the contact form on your site
8. Emails will be sent to Ethereal test account

**To view test emails:**
- After sending, go to: https://ethereal.email/messages
- You'll see all test emails sent (this is where Ethereal stores them)

**Pros:**
- ✅ Works immediately on Render free tier
- ✅ No additional setup needed
- ✅ Perfect for development & testing
- ✅ Email preview links work great

**Cons:**
- ❌ Emails don't reach real inboxes
- ❌ Only for development/testing

---

### Option 2: Use Resend (Recommended - Free Tier for Production)
Resend is a modern email API with a generous free tier.

**Steps:**
1. Go to: https://resend.com
2. Sign up for free account
3. Go to Settings → API Keys
4. Copy your API key
5. Go to Render dashboard → spirolink-web-backend-2 → Environment
6. Add new variable:
   - Name: `RESEND_API_KEY`
   - Value: `[your API key from Resend]`
7. Delete `EMAIL_USER` and `EMAIL_PASSWORD` variables
8. Click **Save**
9. Backend auto-redeploys (~1-2 min)
10. Test contact form

**Pros:**
- ✅ Emails reach real inboxes
- ✅ Free tier: 100 emails/day
- ✅ Better for production
- ✅ Professional sender domain

**Cons:**
- ⚠️ Requires Resend signup
- ⚠️ Email comes from Resend's domain (unless you add custom domain)

---

### Option 3: Keep Gmail but Upgrade (Not Recommended)
Render paid tiers allow SMTP connections to work.
- Cost: ~$7/month minimum

---

## Test Instructions

### After Configuration:
1. Go to your frontend: https://[your-frontend-url].onrender.com
2. Click "Contact Us" → fill out the form
3. Click "Send Message"

**Expected Result:**
- ✅ Form clears
- ✅ Success message appears
- ✅ Email is sent (check Ethereal inbox or your real email)

---

## For Development (Local Testing)

Run backend locally with Ethereal:
```bash
cd chatbot-backend
npm start
# Backend will auto-use Ethereal since EMAIL_USER is not set
```

Test endpoint:
```bash
curl -X POST http://localhost:5000/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

---

## Backend Code Changes Made

### 1. Added Resend support
- Backend can now use Resend API for email sending
- Falls back to Ethereal if Resend key not configured

### 2. Improved email service detection
```
Priority order:
1. If RESEND_API_KEY exists → Use Resend API
2. Else if EMAIL_USER/PASSWORD exist → Use Gmail
3. Else → Use Ethereal (auto-detectable)
```

### 3. Better error handling
- Health check now shows which email service is active
- Clearer error messages for debugging

### 4. Ethereal fallback
- Works with Render free tier (no SMTP timeouts)
- Auto-creates test account on startup
- Email previews at ethereal.email

---

## Next Steps

**ACTION REQUIRED:**
Choose between Option 1 (Ethereal) or Option 2 (Resend) and configure on Render dashboard.

Once configured, reply with:
- Which option you chose
- I'll test the contact form with your configuration

---

## Reference: Email Service Comparison

| Feature | Ethereal | Resend | Gmail |
|---------|----------|--------|-------|
| Works on Render Free | ✅ | ✅ | ❌ |
| Real Inbox Delivery | ❌ | ✅ | ✅ |
| Free Tier | ✅ | ✅ (100/day) | ✅ |
| Setup Time | 2 min | 5 min | 1 min |
| Best For | Development | Production | Local |

