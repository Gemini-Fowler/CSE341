# W01 Contacts API - Setup Complete! 

## ✅ What's Been Set Up

I've created a complete foundation for your W01 Contacts API project with the following components:

### Project Structure
```
backend/
├── app.js                    # Express server (UPDATED - added contacts route)
├── .env                      # Environment variables (CREATE WITH YOUR MONGODB URI)
├── .env.example              # Environment template
├── db/
│   └── connect.js            # MongoDB connection manager
├── routes/
│   ├── professional.js       # Existing professional routes
│   └── contacts.js           # NEW - Contacts API routes
├── controllers/
│   ├── professional.js       # Existing professional controller
│   └── contacts.js           # NEW - Contacts controller (getAll, getById)
└── contacts.rest             # NEW - REST Client test file
```

### Files Created/Modified

1. **backend/routes/contacts.js** - Defines routes:
   - `GET /contacts` - Get all contacts
   - `GET /contacts/:id` - Get single contact by MongoDB ObjectId

2. **backend/controllers/contacts.js** - Implements:
   - `getAll()` - Returns array of all contacts
   - `getById(id)` - Returns single contact by MongoDB _id

3. **backend/contacts.rest** - REST Client test file with example requests

4. **backend/app.js** - Updated to:
   - Load environment variables at startup
   - Register contacts routes at `/contacts`

5. **package.json** - Added scripts:
   - `npm start` - Run server (node backend/app.js)
   - `npm run dev` - Run with auto-reload (nodemon)

6. **W01_SETUP.md** - Comprehensive setup guide

---

## ⚙️ What You Need to Do Next

### 1. **Set Up MongoDB**

Choose one of these options:

**Option A: Local MongoDB (Recommended for Development)**
```bash
# If you have MongoDB installed locally, it runs on mongodb://localhost:27017
# You should already have this from your previous setup
```

**Option B: MongoDB Atlas (Cloud - Recommended for Deployment)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a cluster
4. Create a database called `contacts`
5. Create a collection called `contacts`
6. Get your connection string (it looks like):
   ```
   mongodb+srv://username:password@cluster0.abc123.mongodb.net/contacts?retryWrites=true&w=majority
   ```

### 2. **Update Your .env File**

The `.env` file is in the **project root** (`C:\Users\jonas\OneDrive\Desktop\frontend\CSE341\.env`)

Currently it has:
```env
MONGODB_URI=mongodb://localhost:27017/contacts
PORT=8080
```

**If using MongoDB Atlas**, replace the `MONGODB_URI` with your connection string:
```env
MONGODB_URI=mongodb+srv://username:password@cluster0.abc123.mongodb.net/contacts?retryWrites=true&w=majority
PORT=8080
```

### 3. **Insert Test Data**

Create at least 3 contacts in your MongoDB `contacts` collection with this structure:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "favoriteColor": "blue",
  "birthday": "1990-05-15"
}
```

You can do this via:
- MongoDB Compass (GUI)
- MongoDB Atlas web UI
- Or using mongosh/mongo shell

### 4. **Test Locally**

```bash
# Start the server
npm start

# In another terminal, test with REST Client:
# Open backend/contacts.rest
# Click "Send Request" on the GET /contacts request
```

Or manually test:
```bash
# Get all contacts
curl http://localhost:8080/contacts

# Get a single contact (replace ID with real MongoDB _id)
curl http://localhost:8080/contacts/674a1234567890abcdef0001
```

### 5. **Push to GitHub** 

```bash
git add .
git commit -m "W01: Contacts API - GET endpoints implemented"
git push origin main
```

**Important:** Your `.env` file is in `.gitignore`, so it won't be pushed. That's correct - never push credentials to GitHub!

### 6. **Deploy to Render**

Once local testing works:

1. Go to https://render.com
2. Create new "Web Service"
3. Connect to your GitHub repo
4. In "Environment" section, add config vars:
   - Key: `MONGODB_URI`
   - Value: Your MongoDB connection string
   - Key: `PORT`
   - Value: `8080`
5. Deploy!
6. Test with the Render URL:
   ```
   https://your-service-name.onrender.com/contacts
   ```

---

## 📋 Checklist for W01 Completion

- [ ] MongoDB database set up (local or Atlas)
- [ ] `.env` file created with MONGODB_URI
- [ ] At least 3 test contacts inserted in database
- [ ] `npm start` runs without errors
- [ ] `GET /contacts` returns all contacts
- [ ] `GET /contacts/:id` returns single contact
- [ ] REST Client file (contacts.rest) tests pass
- [ ] Code pushed to GitHub
- [ ] Deployed to Render
- [ ] Render deployment tested with live URL

---

## 🔍 API Response Examples

### GET /contacts - Success
**Status: 200**
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

### GET /contacts/:id - Success
**Status: 200**
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

### GET /contacts/:id - Not Found
**Status: 404**
```json
{
  "message": "Contact not found"
}
```

### Error Response
**Status: 500**
```json
{
  "message": "error details here"
}
```

---

## 🚀 Quick Commands

```bash
# Install dependencies (already done)
npm install

# Start the server
npm start

# Start with auto-reload
npm run dev

# Test an endpoint (after server starts)
curl http://localhost:8080/contacts
```

---

## 📚 Important Resources

- **Express.js**: https://expressjs.com/
- **MongoDB Node Driver**: https://www.mongodb.com/docs/drivers/node/
- **REST Client VS Code**: Search "REST Client" in VS Code extensions
- **Render Docs**: https://render.com/docs
- **MongoDB Atlas**: https://www.mongodb.com/cloud/atlas

---

## Next Steps (Week 02)

- Add POST /contacts (create)
- Add PUT /contacts/:id (update)
- Add DELETE /contacts/:id (delete)
- Add Swagger/OpenAPI documentation
- Create demo video
- Submit to Canvas

---

**Status**: Server code ✅ | Routes ✅ | Controllers ✅ | Testing file ✅ | **Waiting on**: MongoDB setup + test data
