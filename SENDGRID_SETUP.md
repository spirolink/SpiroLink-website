# 🚀 Email Configuration Guide - FIXED!

## ✅ What's New
The backend now supports **SendGrid** - an HTTP-based email API that **works perfectly with Render's free tier** (no SMTP timeout issues).

---

## 🎯 Solution: Use SendGrid (Recommended)

SendGrid is the **best option** because:
- ✅ Uses HTTP API (not SMTP) - **works on Render free tier**
- ✅ Free tier: 100 emails/day
- ✅ Emails go directly to real inboxes
- ✅ No connection timeouts
- ✅ Easy to set up

### Setup Steps:

1. **Sign up for SendGrid:**
   - Go to: https://sendgrid.com/
   - Click **Sign up free**
   - Create account with your email
   - Verify email

2. **Create API Key:**
   - Log in to SendGrid dashboard
   - Go to **Settings** → **API Keys**
   - Click **Create API Key**
   - Name it: `SPIROLINK_RENDER`
   - Select **Full Access**
   - Click **Create & Save**
   - **Copy the API key** (you'll only see it once!)

3. **Configure on Render:**
   - Go to: https://dashboard.render.com/
   - Click your backend service: **spirolink-web-backend-2**
   - Go to **Environment** tab
   - Add new variable:
     - **Name:** `SENDGRID_API_KEY`
     - **Value:** (paste your API key from SendGrid)
   - **Remove** old variables (optional):
     - Delete `EMAIL_USER` (if exists)
     - Delete `EMAIL_PASSWORD` (if exists)
   - Click **Save**
   - Wait for auto-redeploy (~2 minutes)

4. **Test:**
   - Go to your website
   - Fill out Contact form
   - Click Send
   - Check inbox for confirmation email

---

## 📧 Email Service Priority (Auto-Detection)

The backend automatically tries these in order:

1. **SendGrid** (if `SENDGRID_API_KEY` set) ← **START HERE**
2. **Resend** (if `RESEND_API_KEY` set)
3. **Gmail** (if `EMAIL_USER` & `EMAIL_PASSWORD` set)
4. **Ethereal** (test account - may timeout on Render)
5. **Disabled** (logging only)

---

## 🔄 Alternative: Resend (Also Works)

If you prefer Resend:

1. Go to: https://resend.com
2. Sign up for free
3. Copy API key from Dashboard
4. Add to Render environment:
   - **Name:** `RESEND_API_KEY`
   - **Value:** (your API key)

---

## ❌ Why Gmail Doesn't Work on Render Free Tier

- Gmail uses SMTP protocol
- Render's free tier blocks all outbound SMTP connections
- This is a network limitation, not a code issue
- Even with perfect credentials, it will always timeout on Render free tier

---

## ✨ Quick Checklist

- [ ] 1. Sign up for SendGrid (sendgrid.com)
- [ ] 2. Create API Key
- [ ] 3. Copy API key
- [ ] 4. Go to Render dashboard
- [ ] 5. Add `SENDGRID_API_KEY` environment variable
- [ ] 6. Save (auto-redeploys in ~2 min)
- [ ] 7. Test contact form on website
- [ ] 8. ✅ Done!

---

## 📞 Support

If SendGrid doesn't work:
- ✅ Check API key is copied correctly (no extra spaces)
- ✅ Check Render has redeployed (check logs)
- ✅ Try Resend as alternative
- ✅ Check /health endpoint returns `"emailService": "sendgrid"`

---

**Once you set up SendGrid and test the form, everything should work! 🎉**
