# W02 Deployment & Testing Guide

## Quick Start for W02

After completing W01, you now have:
- ✅ GET /contacts (all)
- ✅ GET /contacts/:id (single)

**W02 adds:**
- ✅ POST /contacts (create)
- ✅ PUT /contacts/:id (update)
- ✅ DELETE /contacts/:id (delete)
- ✅ /api-docs (Swagger UI)

---

## Step 1: Verify Local Setup

### Prerequisites
- MongoDB running locally or MongoDB Atlas connected
- Server can start with `npm start`
- REST Client extension installed in VS Code

### Check Code is Ready
```bash
npm start
# Should see:
# Web Server is listening at port 8080
# Connected to DB and listening on 8080
```

---

## Step 2: Test Locally with REST Client

### File: `backend/contacts.rest`

This file now includes tests for all endpoints:

1. **GET all contacts** - View all
2. **Create a new contact** - POST with required fields
3. **Get single contact** - GET by ID (update with new ID)
4. **Update a contact** - PUT with new values
5. **Delete a contact** - DELETE to remove
6. **Access Swagger** - GET /api-docs

### To Test:
1. Open `backend/contacts.rest` in VS Code
2. For POST request, click "Send Request"
3. Copy the returned ID
4. Paste ID into GET, PUT, DELETE requests
5. Test each endpoint

### Expected Results

**POST Request:**
```
Status: 201 Created
Response: {"id": "new-id-here", "message": "..."}
```

**PUT Request:**
```
Status: 200 OK
Response: {"message": "Contact updated successfully"}
```

**DELETE Request:**
```
Status: 200 OK
Response: {"message": "Contact deleted successfully"}
```

---

## Step 3: Test Swagger Locally

1. Server running with `npm start`
2. Go to: `http://localhost:8080/api-docs`
3. You should see interactive Swagger documentation
4. Click "Try it out" on any endpoint
5. Fill in parameters
6. Click "Execute"
7. See response below

---

## Step 4: Push to GitHub

```bash
cd C:\Users\jonas\OneDrive\Desktop\frontend\CSE341

# See what changed
git status

# Add all files (except .env - already in .gitignore)
git add .

# Commit with descriptive message
git commit -m "W02: Complete Contacts API - POST, PUT, DELETE endpoints and Swagger documentation"

# Push to GitHub
git push origin main
```

### Verify on GitHub
- Go to https://github.com/Gemini-Fowler/CSE341
- Check that new files appear:
  - `backend/swagger.js`
  - Updated `backend/routes/contacts.js`
  - Updated `backend/controllers/contacts.js`
  - Updated `backend/app.js`
  - Updated `backend/contacts.rest`

---

## Step 5: Deploy to Render

### If First Time Deploying

1. Go to https://render.com
2. Click "Create Web Service"
3. Connect GitHub repo (CSE341)
4. Configure:
   - **Name:** `cse341-api` (or similar)
   - **Branch:** main
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. **Environment:** Add variables:
   - `MONGODB_URI` = Your MongoDB connection string
   - `PORT` = 8080
6. Click "Deploy"
7. Wait 10-15 minutes for first deployment

### If Already Deployed

1. Go to Render dashboard
2. Select your service
3. Click "Deploy latest commit"
4. Wait for deployment to complete
5. Check logs for any errors

---

## Step 6: Test on Render

### Via Swagger (Best for Testing)
1. Your Render URL (look in Render dashboard)
2. Append `/api-docs`
3. Example: `https://cse341-api.onrender.com/api-docs`
4. Click "Try it out" on endpoints
5. Test POST, PUT, DELETE

### Via Curl

**Get all contacts:**
```bash
curl https://your-render-url.onrender.com/contacts
```

**Create contact:**
```bash
curl -X POST https://your-render-url.onrender.com/contacts \
  -H "Content-Type: application/json" \
  -d '{"firstName":"John","lastName":"Doe","email":"john@example.com","favoriteColor":"blue","birthday":"1990-05-15"}'
```

**Update contact:**
```bash
curl -X PUT https://your-render-url.onrender.com/contacts/CONTACT_ID \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Jane"}'
```

**Delete contact:**
```bash
curl -X DELETE https://your-render-url.onrender.com/contacts/CONTACT_ID
```

---

## Troubleshooting

### "Contact created" returns error on Render
- Check MongoDB URI in Render environment variables
- Verify MongoDB Atlas IP whitelist includes Render IPs
- Check Render logs for database connection errors

### Swagger UI blank page
- Ensure app.js has swagger middleware configured
- Clear browser cache
- Try different browser

### POST returns 400 Bad Request
- Verify all required fields in request body
- Check Content-Type header is application/json
- Use REST Client template as example

### PUT/DELETE returns 404
- Verify contact ID exists (do GET first)
- Use exact ObjectId from database
- Check ID format is valid

---

## Files for Submission

Prepare these links for Canvas submission:

1. **GitHub Repository:**
   - https://github.com/Gemini-Fowler/CSE341

2. **Render Deployment:**
   - https://your-render-url.onrender.com/api-docs

3. **YouTube Video:**
   - Record 5-8 minute demo showing:
     - GET all contacts
     - POST create contact
     - PUT update contact
     - DELETE contact
     - Swagger documentation working
     - Uploaded to YouTube (unlisted or public)

---

## Demo Video Script (5-8 minutes)

**Intro (1 min):**
"This is the Contacts API built with Node.js, Express, and MongoDB."

**Show Code (1 min):**
"The API includes 5 main endpoints for managing contacts."

**Demonstrate Endpoints (4 min):**
1. Open Render URL with `/api-docs`
2. Show Swagger UI
3. Click GET all contacts → Execute
4. Show response with contacts
5. Click POST → Fill fields → Execute
6. Show created contact with ID
7. Click PUT → Update fields → Execute
8. Show update success
9. Click DELETE → Execute
10. Show delete success
11. Verify contact is deleted (GET returns 404)

**Conclusion (1 min):**
"All endpoints working. API ready for production use."

---

## Verification Checklist Before Submission

- [ ] Code pushed to GitHub
- [ ] All endpoints working locally
- [ ] All endpoints working on Render
- [ ] Swagger UI accessible at `/api-docs` on Render
- [ ] POST returns 201 with new ID
- [ ] PUT returns 200 with success message
- [ ] DELETE returns 200 with success message
- [ ] 400 error for missing fields
- [ ] 404 error for non-existent contacts
- [ ] Demo video recorded (5-8 min)
- [ ] Video uploaded to YouTube
- [ ] Three links ready for Canvas

---

## What Gets Graded (From Rubric)

✅ **API Routes:**
- GET (all and by ID) - Already done in W01
- POST (create with all fields required)
- PUT (update contact)
- DELETE (remove contact)
- All fully functional

✅ **HTTP Status Codes:**
- 201 for POST (created)
- 200 for GET, PUT, DELETE
- 400 for bad request (missing fields)
- 404 for not found
- 500 for server error

✅ **Swagger Documentation:**
- `/api-docs` route accessible
- All endpoints documented
- Parameters and schemas shown
- Example requests/responses

✅ **Deployment:**
- Published to Render
- Callable from external sources
- All tests pass on Render

✅ **Video Submission:**
- 5-8 minutes long
- Shows all functionality
- Uploaded to YouTube
- Link provided

---

## Quick Checklist

1. ✅ Code implemented
2. ⏳ Test locally
3. ⏳ Push to GitHub
4. ⏳ Deploy to Render
5. ⏳ Test on Render
6. ⏳ Record demo video
7. ⏳ Upload to YouTube
8. ⏳ Submit links to Canvas

**You're ready for W02 submission!** 🚀
