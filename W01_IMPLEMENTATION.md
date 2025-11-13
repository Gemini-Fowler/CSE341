# W01 Project Implementation Summary

## Overview
I've successfully created the foundation for your W01 Contacts API project. The API is ready to connect to MongoDB and serve contact data via RESTful endpoints.

## What's Implemented ✅

### 1. **Express Server** (`backend/app.js`)
- Loads environment variables with dotenv
- Configures CORS headers
- Registers routes for `/professional` (existing) and `/contacts` (new)
- Initializes MongoDB connection on startup
- Runs on port 8080 (or custom PORT from .env)

### 2. **MongoDB Connection** (`backend/db/connect.js`)
- Singleton pattern for MongoDB connection
- Connects using `process.env.MONGODB_URI`
- `initDb()` - Initializes connection on app start
- `getDb()` - Returns active connection for use in controllers

### 3. **Contacts API Routes** (`backend/routes/contacts.js`)
```
GET  /contacts      → Get all contacts
GET  /contacts/:id  → Get single contact by MongoDB ObjectId
```

### 4. **Contacts Controller** (`backend/controllers/contacts.js`)
- `getAll()` - Queries MongoDB contacts collection, returns array
- `getById(id)` - Queries MongoDB by ObjectId, returns single document or 404
- Error handling with try/catch
- Proper HTTP status codes (200, 404, 500)

### 5. **Testing File** (`backend/contacts.rest`)
- REST Client format for VS Code extension
- Example requests ready to use
- Update the `:id` with real MongoDB ObjectIds

### 6. **Package Configuration** (`package.json`)
- Scripts added:
  - `npm start` - Run server
  - `npm run dev` - Run with nodemon (auto-reload)
- Dependencies already installed:
  - express, cors, body-parser
  - mongoose, dotenv
  - nodemon (dev)

### 7. **Environment Setup**
- `.env` created in project root with template values
- `.env.example` created for documentation
- `.gitignore` already includes `.env` (won't be pushed to GitHub)

---

## How to Test Locally

### Prerequisites
- Node.js running (already installed)
- MongoDB running (start local MongoDB or use MongoDB Atlas cloud)
- VS Code with REST Client extension installed

### Step 1: Set Up MongoDB

**Local MongoDB (if installed):**
```bash
# On Windows with MongoDB installed:
# MongoDB should auto-start or you can start it:
mongo  # This starts the MongoDB shell
```

**MongoDB Atlas Cloud (Recommended):**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account → Create cluster → Create database named `contacts`
3. Copy connection string

### Step 2: Update .env File

Edit `C:\Users\jonas\OneDrive\Desktop\frontend\CSE341\.env`:

**For Local MongoDB:**
```env
MONGODB_URI=mongodb://localhost:27017/contacts
PORT=8080
```

**For MongoDB Atlas:**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/contacts?retryWrites=true&w=majority
PORT=8080
```

### Step 3: Insert Test Data

Use MongoDB Compass or Mongo Shell:
```javascript
db.contacts.insertMany([
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    favoriteColor: "blue",
    birthday: "1990-05-15"
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane@example.com",
    favoriteColor: "green",
    birthday: "1992-08-22"
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob@example.com",
    favoriteColor: "red",
    birthday: "1988-03-10"
  }
])
```

### Step 4: Start the Server

```bash
cd c:\Users\jonas\OneDrive\Desktop\frontend\CSE341
npm start
```

You should see:
```
[dotenv@17.2.3] injecting env (2) from .env
Web Server is listening at port 8080
Connected to DB and listening on 8080
```

### Step 5: Test the Endpoints

**Option A: REST Client in VS Code**
1. Open `backend/contacts.rest`
2. Click "Send Request" on the first request (GET all)
3. Response appears in side panel
4. Update the ObjectId and test GET single contact

**Option B: PowerShell/curl**
```powershell
# Get all contacts
C:\Windows\System32\curl.exe http://localhost:8080/contacts

# Get single contact (replace ID)
C:\Windows\System32\curl.exe http://localhost:8080/contacts/YOUR_CONTACT_ID_HERE
```

---

## File Structure

```
CSE341/
├── backend/
│   ├── app.js                 # Main Express server ✅ UPDATED
│   ├── .env                   # Environment vars (local only) ✅ CREATED
│   ├── .env.example           # Template for reference ✅ CREATED
│   ├── .gitnore               # Already excludes .env
│   ├── contacts.rest          # REST Client tests ✅ CREATED
│   ├── db/
│   │   └── connect.js         # MongoDB connection
│   ├── routes/
│   │   ├── professional.js    # Existing route
│   │   └── contacts.js        # NEW ✅ CREATED
│   └── controllers/
│       ├── professional.js    # Existing controller
│       └── contacts.js        # NEW ✅ CREATED
├── frontend/                  # (Existing - not modified)
├── node_modules/              # (Already installed)
├── package.json               # ✅ UPDATED with start/dev scripts
├── W01_README.md             # Setup guide ✅ CREATED
├── W01_SETUP.md              # Detailed setup ✅ CREATED
└── README.md                 # (Existing)
```

---

## API Responses

### GET /contacts
**Request:**
```
GET http://localhost:8080/contacts
```

**Response (200):**
```json
[
  {
    "_id": "674a1234567890abcdef0001",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "favoriteColor": "blue",
    "birthday": "1990-05-15"
  },
  {
    "_id": "674a1234567890abcdef0002",
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "jane@example.com",
    "favoriteColor": "green",
    "birthday": "1992-08-22"
  }
]
```

### GET /contacts/:id
**Request:**
```
GET http://localhost:8080/contacts/674a1234567890abcdef0001
```

**Response (200):**
```json
{
  "_id": "674a1234567890abcdef0001",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "favoriteColor": "blue",
  "birthday": "1990-05-15"
}
```

**Response (404):**
```json
{
  "message": "Contact not found"
}
```

---

## Deployment to Render (W01 Requirement)

### Step 1: Push to GitHub
```bash
cd C:\Users\jonas\OneDrive\Desktop\frontend\CSE341
git add .
git commit -m "W01: Contacts API implementation - GET endpoints"
git push origin main
```

### Step 2: Create Render Service
1. Go to https://render.com
2. Click "Create" → "Web Service"
3. Connect GitHub repo (CSE341)
4. Name: `cse341-contacts-api` (or your choice)
5. Environment: `Node`
6. Build Command: `npm install`
7. Start Command: `npm start`

### Step 3: Add Environment Variables
In Render dashboard, go to Environment section and add:
```
MONGODB_URI = <your-connection-string>
PORT = 8080
NODE_ENV = production
```

### Step 4: Deploy & Test
1. Click "Deploy" and wait 10-15 minutes
2. Once deployed, get your URL (e.g., `https://cse341-api.onrender.com`)
3. Test with:
```bash
curl https://cse341-api.onrender.com/contacts
```

---

## Troubleshooting

### Error: "Cannot read properties of undefined (reading 'startsWith')"
- **Cause**: MONGODB_URI is not set
- **Fix**: Check that `.env` file exists in project root with MONGODB_URI value

### Error: "connect ECONNREFUSED"
- **Cause**: MongoDB is not running or connection string is wrong
- **Fix**: Start MongoDB or verify MongoDB Atlas connection string

### "Contact not found" (404)
- **Cause**: Invalid ObjectId format or contact doesn't exist
- **Fix**: Copy a valid _id from GET /contacts response

### Port already in use
- **Cause**: Another app using port 8080
- **Fix**: Change PORT in .env or kill process using port 8080

---

## What Comes in Week 02

- POST /contacts - Create new contact
- PUT /contacts/:id - Update contact
- DELETE /contacts/:id - Delete contact
- Swagger/OpenAPI documentation
- Demo video (5-8 minutes)
- Submit GitHub + Render + YouTube links to Canvas

---

## Quick Reference

```bash
# Start server
npm start

# Start with auto-reload
npm run dev

# Install deps (if needed)
npm install

# Test endpoint
curl http://localhost:8080/contacts
```

---

**Ready to proceed!** Once you've:
1. Set up MongoDB with test data
2. Updated .env with your connection string
3. Run `npm start` successfully

...you're ready to push to GitHub and deploy to Render for W01 submission.
