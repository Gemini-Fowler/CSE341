# W01 Project - Ready for Submission Checklist

## ✅ Completed Components

### Backend Code
- [x] Express server configured (`backend/app.js`)
- [x] MongoDB connection manager (`backend/db/connect.js`)
- [x] Contacts routes file (`backend/routes/contacts.js`)
- [x] Contacts controller with:
  - [x] `getAll()` - Returns all contacts from MongoDB
  - [x] `getById(id)` - Returns single contact by ObjectId
- [x] Error handling with proper HTTP status codes
- [x] CORS enabled for cross-origin requests

### Configuration & Setup
- [x] `package.json` updated with:
  - [x] `npm start` script
  - [x] `npm run dev` script (with nodemon)
- [x] `.env` file created (in project root)
- [x] `.env.example` template created
- [x] All dependencies installed (express, cors, mongoose, dotenv, etc.)

### Testing & Documentation
- [x] `backend/contacts.rest` - REST Client test file
- [x] `W01_README.md` - Setup and testing guide
- [x] `W01_SETUP.md` - Detailed project overview
- [x] `W01_IMPLEMENTATION.md` - Complete implementation guide

---

## ⏳ What You Need to Do

### Before Testing Locally (REQUIRED)

#### 1. Set Up MongoDB
Choose **ONE** option:

**Option A: Local MongoDB**
- If you have MongoDB installed locally, ensure it's running
- Connection string: `mongodb://localhost:27017/contacts`

**Option B: MongoDB Atlas (Recommended)**
- Create account at https://www.mongodb.com/cloud/atlas
- Create a cluster and database called `contacts`
- Create connection string
- Update `.env` with your connection string

#### 2. Insert Test Data
In your MongoDB `contacts` collection, insert at least 3 documents:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "favoriteColor": "blue",
  "birthday": "1990-05-15"
}
```

(Add 2 more similar documents)

#### 3. Verify .env File
Location: `C:\Users\jonas\OneDrive\Desktop\frontend\CSE341\.env`

Content should have:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/contacts?retryWrites=true&w=majority
PORT=8080
```

### Test Locally

```bash
# Terminal 1: Start the server
cd C:\Users\jonas\OneDrive\Desktop\frontend\CSE341
npm start

# Terminal 2: Test the API (after server starts)
# Use REST Client in VS Code or curl:
curl http://localhost:8080/contacts
```

Expected response: Array of contacts from MongoDB

### Prepare for Deployment

```bash
# 1. Add all files to git (except .env - already in .gitignore)
cd C:\Users\jonas\OneDrive\Desktop\frontend\CSE341
git add .

# 2. Commit changes
git commit -m "W01: Contacts API - GET endpoints complete"

# 3. Push to GitHub
git push origin main
```

### Deploy to Render

1. Go to https://render.com
2. Create Web Service
3. Connect to CSE341 repository
4. Add Environment Variables:
   - `MONGODB_URI` = Your MongoDB connection string
   - `PORT` = 8080
5. Deploy
6. Test with Render URL once deployed

---

## 📋 W01 Requirements Checklist

- [x] Set up Node.js project
  - [x] package.json configured
  - [x] Dependencies installed
  - [x] Scripts defined

- [x] Connect to MongoDB
  - [x] MongoDB connection manager created
  - [ ] Database with contacts collection (YOU DO THIS)
  - [ ] Test data inserted (YOU DO THIS)

- [ ] Implement GET endpoints
  - [x] Code written and ready
  - [ ] Tested locally (YOU DO THIS)
  - [ ] Deployed to Render (YOU DO THIS)

- [ ] Push to GitHub
  - [ ] Commit changes (YOU DO THIS)
  - [ ] Push code (YOU DO THIS)

- [ ] Deploy to Render
  - [ ] Service created (YOU DO THIS)
  - [ ] Environment variables set (YOU DO THIS)
  - [ ] Deployment tested (YOU DO THIS)

---

## 🚀 Quick Start Commands

```bash
# Navigate to project
cd C:\Users\jonas\OneDrive\Desktop\frontend\CSE341

# Start server
npm start

# The server will output:
# [dotenv@17.2.3] injecting env (2) from .env
# Web Server is listening at port 8080
# Connected to DB and listening on 8080
```

## 🧪 Test URLs

After starting the server with `npm start`:

**Get All Contacts:**
```
http://localhost:8080/contacts
```

**Get Single Contact:**
```
http://localhost:8080/contacts/{MONGODB_OBJECT_ID}
```

Replace `{MONGODB_OBJECT_ID}` with an actual _id from the GET all response.

---

## 📁 Project Structure at Submission

```
CSE341/
├── backend/
│   ├── app.js                  ✅ Updated
│   ├── .env                    ✅ Created (not pushed to GitHub)
│   ├── .env.example            ✅ Created
│   ├── contacts.rest           ✅ Created
│   ├── db/
│   │   └── connect.js
│   ├── routes/
│   │   ├── professional.js
│   │   └── contacts.js         ✅ Created
│   └── controllers/
│       ├── professional.js
│       └── contacts.js         ✅ Created
├── frontend/                   (Unchanged)
├── package.json                ✅ Updated
├── W01_IMPLEMENTATION.md       ✅ Created (guide)
├── W01_README.md              ✅ Created (guide)
├── W01_SETUP.md               ✅ Created (guide)
└── README.md                  (Original)
```

---

## 📞 Support / Troubleshooting

### Error: "Cannot read properties of undefined"
- Ensure `.env` file exists in project root (not backend/)
- Ensure MONGODB_URI is in the .env file

### Error: "Connect ECONNREFUSED"
- MongoDB is not running or connection string is wrong
- Check your .env MONGODB_URI
- Verify MongoDB is running (local) or Atlas is accessible (cloud)

### 404 "Contact not found"
- Invalid ObjectId format
- Contact doesn't exist in database
- Copy _id exactly from GET /contacts response

### Port 8080 already in use
- Change PORT in .env
- Or kill process using port 8080

---

## 📚 Additional Resources

- **MongoDB Node.js Driver**: https://www.mongodb.com/docs/drivers/node/
- **Express.js Docs**: https://expressjs.com/
- **MongoDB Atlas Setup**: https://www.mongodb.com/docs/atlas/getting-started/
- **Render Deployment**: https://render.com/docs
- **VS Code REST Client**: https://marketplace.visualstudio.com/items?itemName=humao.rest-client

---

## Summary

**What's Ready:**
- ✅ All backend code written and configured
- ✅ Express server with contact routes
- ✅ MongoDB connection manager
- ✅ GET endpoints implemented
- ✅ Testing file created
- ✅ Documentation provided
- ✅ npm scripts configured

**What You Need to Do:**
1. Set up MongoDB (local or Atlas)
2. Insert test contacts
3. Update .env with your connection string
4. Test locally with `npm start`
5. Push to GitHub
6. Deploy to Render
7. Submit GitHub + Render links to Canvas

**Time Estimate:**
- MongoDB setup: 5-10 min
- Local testing: 5 min
- Deployment: 15-20 min
- **Total: ~30-40 minutes**

---

**Status: Ready for submission after you complete the MongoDB setup and testing! 🚀**
