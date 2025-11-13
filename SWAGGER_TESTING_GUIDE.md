# Testing with Swagger UI - Complete Guide

## What is Swagger UI?

Swagger UI is an interactive documentation interface that lets you:
- See all API endpoints
- View request/response schemas
- Test endpoints directly
- See HTTP status codes
- Debug API issues

**Access at:** `http://localhost:8080/api-docs` (local) or `https://your-render-url.onrender.com/api-docs` (production)

---

## Testing Each Endpoint via Swagger

### 1. GET /contacts (Get All)

**Location in Swagger UI:**
- Find section: "Contacts"
- Find endpoint: "GET /contacts"
- Click the endpoint to expand

**To Test:**
1. Click "Try it out" button
2. Click "Execute" button
3. Scroll down to see response

**Expected Response (200):**
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

**Copy an ID** from this response for next tests.

---

### 2. POST /contacts (Create)

**To Test:**
1. Find "POST /contacts" endpoint
2. Click "Try it out"
3. In the **Request body** field, paste:
```json
{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "favoriteColor": "green",
  "birthday": "1992-08-22"
}
```
4. Click "Execute"

**Expected Response (201):**
```json
{
  "id": "674a1234567890abcdef0002",
  "message": "Contact created successfully"
}
```

**Save this ID** for the next tests (GET by ID, PUT, DELETE).

**If you get 400 error:**
- Check all fields present
- Check spelling (firstName, not firstname)
- Check JSON is valid

---

### 3. GET /contacts/:id (Get Single)

**To Test:**
1. Find "GET /contacts/{id}" endpoint
2. Click "Try it out"
3. In the **id** field, paste the ID from POST response
4. Click "Execute"

**Expected Response (200):**
```json
{
  "_id": "674a1234567890abcdef0002",
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "favoriteColor": "green",
  "birthday": "1992-08-22"
}
```

**If you get 404:**
- ID doesn't exist
- Use ID from recent POST request
- Verify ID format is valid

---

### 4. PUT /contacts/:id (Update)

**To Test:**
1. Find "PUT /contacts/{id}" endpoint
2. Click "Try it out"
3. In the **id** field, paste the contact ID
4. In the **Request body**, paste:
```json
{
  "firstName": "Jane",
  "lastName": "Smith-Updated",
  "email": "jane.updated@example.com"
}
```
5. Click "Execute"

**Expected Response (200):**
```json
{
  "message": "Contact updated successfully"
}
```

**Verify Update:**
1. Go back to "GET /contacts/{id}"
2. Use same ID
3. Click "Try it out" → "Execute"
4. Confirm fields changed

**Notes:**
- Can update some fields (partial update)
- Can also update all fields at once
- 400 error = no fields provided

---

### 5. DELETE /contacts/:id (Delete)

**To Test:**
1. Find "DELETE /contacts/{id}" endpoint
2. Click "Try it out"
3. In the **id** field, paste a contact ID
4. Click "Execute"

**Expected Response (200):**
```json
{
  "message": "Contact deleted successfully"
}
```

**Verify Deletion:**
1. Go to "GET /contacts/{id}"
2. Use same ID that was deleted
3. Click "Try it out" → "Execute"
4. Should get 404 "Contact not found"

---

## Testing Workflow (Full Scenario)

Follow this step-by-step to test everything:

### Step 1: View Existing Contacts
```
GET /contacts
→ See all current contacts
→ Note down some IDs
```

### Step 2: Create New Contact
```
POST /contacts
Body: {
  "firstName": "Test",
  "lastName": "Contact",
  "email": "test@example.com",
  "favoriteColor": "red",
  "birthday": "2000-01-01"
}
→ Get response: id "xyz123"
→ SAVE THIS ID
```

### Step 3: Retrieve the New Contact
```
GET /contacts/xyz123
→ Confirm it's the contact you created
→ Check all fields match
```

### Step 4: Update the Contact
```
PUT /contacts/xyz123
Body: {
  "favoriteColor": "blue",
  "email": "test.updated@example.com"
}
→ Get response: "Contact updated successfully"
```

### Step 5: Verify Update
```
GET /contacts/xyz123
→ Confirm favoriteColor changed to blue
→ Confirm email changed
```

### Step 6: Delete the Contact
```
DELETE /contacts/xyz123
→ Get response: "Contact deleted successfully"
```

### Step 7: Verify Deletion
```
GET /contacts/xyz123
→ Get 404 error "Contact not found"
→ Confirms deletion was successful
```

---

## Understanding Response Codes

| Code | Meaning | Example |
|------|---------|---------|
| 200 | Success | GET, PUT, DELETE successful |
| 201 | Created | POST successful, new resource created |
| 400 | Bad Request | Missing required fields in POST/PUT |
| 404 | Not Found | Contact ID doesn't exist |
| 500 | Server Error | Database connection problem |

---

## Swagger Schema Documentation

In Swagger UI, you'll see schema definitions for:

### Contact Object
```json
{
  "_id": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "favoriteColor": "string",
  "birthday": "string"
}
```

### CreateContactRequest
```json
{
  "firstName": "string (required)",
  "lastName": "string (required)",
  "email": "string (required)",
  "favoriteColor": "string (required)",
  "birthday": "string (required)"
}
```

All fields shown are required for POST requests.

---

## Swagger vs REST Client

### When to Use Swagger UI
- ✅ Testing on production (Render)
- ✅ Quick testing without leaving browser
- ✅ Visualizing API structure
- ✅ Demo/presentation
- ✅ Team members testing API

### When to Use REST Client
- ✅ Testing locally
- ✅ Batch testing multiple requests
- ✅ Complex test scenarios
- ✅ Automation/scripting
- ✅ Development/debugging

**For W02:** Use Swagger UI to test on Render, REST Client for local testing.

---

## Exporting/Sharing Swagger Spec

The Swagger spec is available at:
```
http://localhost:8080/api-docs
https://your-render-url.onrender.com/api-docs
```

Also available as JSON:
```
/api-docs (HTML UI)
/api-docs/swagger.json (Raw JSON spec)
```

You can share the URL with team members or import into other tools.

---

## Troubleshooting Swagger Issues

### "Cannot GET /api-docs"
- Server not running
- Wrong URL
- Swagger middleware not configured in app.js

### "Swagger UI showing, but endpoints not working"
- MongoDB not connected
- Check Render logs for connection errors
- Verify MONGODB_URI in environment variables

### "Endpoint visible but can't execute"
- CORS issue (uncommon with Swagger)
- Server error (check response code)
- Network issue

### "500 error when executing endpoint"
- Check Render logs
- Usually MongoDB connection issue
- Verify database has test data

---

## Tips for Best Results

1. **Start with GET endpoints first**
   - Verify data retrieval works
   - Ensures MongoDB connection is good

2. **Test POST to create test data**
   - Before testing PUT/DELETE
   - Save the returned IDs

3. **Test with different data**
   - Try various first names, emails
   - Test special characters
   - Ensure validation works

4. **Check response codes**
   - 201 for create (not 200)
   - 404 for missing contacts
   - 400 for bad requests

5. **Test error scenarios**
   - Missing fields in POST
   - Invalid ID format
   - Non-existent contact ID

---

## Example Test Session

```
1. GET /contacts → See existing (status 200)
2. POST /contacts → Create new (status 201, get ID "abc123")
3. GET /contacts/abc123 → Verify created (status 200)
4. PUT /contacts/abc123 → Update (status 200)
5. GET /contacts/abc123 → Verify update (status 200)
6. DELETE /contacts/abc123 → Delete (status 200)
7. GET /contacts/abc123 → Verify gone (status 404)
```

All seven tests pass = ✅ API fully functional!

---

## Recording Demo Video with Swagger

For your YouTube video, Swagger is perfect for demonstrating:

1. **Open Swagger UI**
   - Point browser to `/api-docs`
   - Show interactive documentation

2. **Execute GET all**
   - Show button click
   - Show response with contacts

3. **Execute POST**
   - Fill request body
   - Click Execute
   - Show 201 response

4. **Execute GET by ID**
   - Use ID from POST
   - Show the created contact

5. **Execute PUT**
   - Update some fields
   - Show success message

6. **Execute DELETE**
   - Delete the contact
   - Show 200 response

7. **Verify deletion**
   - GET same ID
   - Show 404 response

Entire demo takes ~3-5 minutes, perfect for video submission!

---

**Swagger UI makes testing easy and professional!** 🎉
