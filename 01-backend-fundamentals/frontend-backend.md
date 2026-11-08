Module 1 – Backend Fundamentals (Part 2)
Topic 3. How Frontend Communicates with Backend
1. Basic understanding
Frontend and backend communicate through HTTP (Hypertext Transfer Protocol) or HTTPS.
- Frontend sends an HTTP request.
- Backend receives and processes it.
- Backend sends an HTTP response.
- Frontend uses that response to update the UI.








medium.com


2. How does communication happen?
Suppose you're building a student management application.

The frontend needs to display all students.

Step 1: Frontend sends a request
fetch("http://localhost:5000/api/students")


Step 2: Backend receives the request

Your Express server has a matching route:
app.get("/api/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});


Step 3: Backend fetches data

The backend communicates with MongoDB and retrieves student records.

Step 4: Backend sends a response
[
  {
    "id": 1,
    "name": "Rahul"
  },
  {
    "id": 2,
    "name": "Priya"
  }
]


Step 5: Frontend displays the data

The frontend receives the JSON response and renders the student list.
3. Important communication concepts
Concept	Meaning
HTTP	Protocol for communication
HTTPS	HTTP secured using TLS
JSON	Common data exchange format
Fetch API	Browser API for making HTTP requests
Axios	HTTP client library
API Endpoint	URL where an API can be accessed
Headers	Additional request/response metadata
Request Body	Data sent with a request
Response Body	Data returned by the server

4. Fetch vs Axios
Fetch	Axios
Built into modern browsers	External library
Requires manual HTTP error-status handling	Rejects promises for non-2xx responses by default
Uses response.json() to parse JSON	Automatically transforms JSON responses
Supports HTTP requests	Supports HTTP requests

Example using Fetch:
const response = await fetch("/api/students");

if (!response.ok) {
  throw new Error("Request failed");
}

const data = await response.json();


Example using Axios:
const response = await axios.get("/api/students");

console.log(response.data);


5. Practical scenarios
Scenario 1: Frontend sends incorrect data.

What should happen?

Backend should validate the incoming data and return an appropriate error response, such as HTTP 400 Bad Request.

Scenario 2: Backend is unavailable.

What happens?

The frontend may receive a network error or timeout. It should display an appropriate error message.

Scenario 3: Frontend sends a request without authentication.

Backend authentication middleware should reject the request if the endpoint requires authentication.