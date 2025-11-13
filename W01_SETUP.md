# W01 Contacts API Project

This is the first week of a two-week project to create a RESTful API for managing contacts stored in MongoDB.

## Project Overview

This project provides API endpoints for retrieving contact information. Each contact has the following fields:
- `firstName`
- `lastName`
- `email`
- `favoriteColor`
- `birthday`

## Week 01 Requirements

- ✅ Set up Node.js project with Express
- ✅ Connect to MongoDB
- ✅ Implement GET /contacts (retrieve all contacts)
- ✅ Implement GET /contacts/:id (retrieve single contact by ID)
- ⏳ Deploy to Render
- ⏳ Create REST Client test file

## Setup Instructions

### 1. Prerequisites
- Node.js installed
- MongoDB account (local or MongoDB Atlas)
- Git installed

### 2. Clone the Repository
```bash
git clone https://github.com/Gemini-Fowler/CSE341.git
cd CSE341
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the `backend` directory with your MongoDB connection string:

```env
MONGODB_URI=mongodb+srv://username:password@your-cluster.mongodb.net/databaseName
PORT=8080
```

**Note:** See `.env.example` for reference. Do not commit `.env` to Git (it's in `.gitignore`).

### 5. Set Up MongoDB

Create a MongoDB database with a `contacts` collection. Insert at least 3 documents with this structure:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "favoriteColor": "blue",
  "birthday": "1990-05-15"
}
```

### 6. Run the Server Locally

```bash
npm start
```

Or with auto-reload (requires nodemon):
```bash
npm run dev
```

The server will start on `http://localhost:8080`

### 7. Test the API

Use the REST Client extension in VS Code:

1. Install "REST Client" extension in VS Code
2. Open `backend/contacts.rest`
3. Click "Send Request" on either endpoint

Or test manually with curl:
```bash
# Get all contacts
curl http://localhost:8080/contacts

# Get a single contact (replace ID with actual MongoDB _id)
curl http://localhost:8080/contacts/674a1234567890abcdef0001
```

## API Endpoints

### GET /contacts
Returns all contacts in the database.

**Example Response:**
```json
[
  {
    "_id": "674a1234567890abcdef0001",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "favoriteColor": "blue",
    "birthday": "1990-05-15"
  }
]
```

### GET /contacts/:id
Returns a single contact by MongoDB ObjectId.

**Example Response:**
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

## Project Structure

```
backend/
├── app.js              # Express app configuration
├── db/
│   └── connect.js      # MongoDB connection setup
├── routes/
│   ├── professional.js # Professional data routes
│   └── contacts.js     # Contacts routes (W01)
├── controllers/
│   ├── professional.js # Professional data controller
│   └── contacts.js     # Contacts controller (W01)
├── contacts.rest       # REST Client test file
└── .env.example        # Environment variable template
```

## Deployment to Render

1. Push code to GitHub (`.env` is in `.gitignore`, so it won't be pushed)
2. Create a new Web Service on Render
3. Connect to your GitHub repository
4. Add environment variables in Render dashboard:
   - `MONGODB_URI`: Your MongoDB connection string
   - `PORT`: 8080
5. Deploy and test with your Render URL

## Week 02 (Coming Soon)

Week 02 will add:
- POST /contacts (create new contact)
- PUT /contacts/:id (update contact)
- DELETE /contacts/:id (delete contact)
- Swagger/OpenAPI documentation
- Final deployment and video submission

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Node.js Driver](https://www.mongodb.com/docs/drivers/node/)
- [REST Client VS Code Extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
- [Render Deployment Guide](https://render.com/docs/deploy-node-express-app)

## Author
Jonas
