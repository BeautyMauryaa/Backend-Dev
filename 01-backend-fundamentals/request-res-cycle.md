## Topic 3. Request-Response Lifecycle

This is particularly important for backend interviews.

What happens behind the scenes when a client sends an HTTP request?

[System Design Interview: The Complete 2026 Playbook  | PracHub Knowledge Hub](https://images.openai.com/static-rsc-4/ahq1_bZ-OrqQfDyDcmkfLCEEQKgBeXyeEPwGXWg6vfW1XsyrR0Ii-DwyqmsNW_sx1tEOv59ABGgukVNMzsD5fh06SH4-k6dqVLyPoeuGbLjBd0uY2hMw2zOkfkefNXIx_U9Xw3T6ciKxQZCPJqsKI2I045RaaFXq0seexNJhm6c?purpose=inline)

[prachub.com](https://prachub.com/resources/system-design-interview-the-complete-2026-playbook?utm_source=chatgpt.com)

Let's understand the flow:

1. Client: Sends an HTTP request.
2. Server: Receives the incoming request.
3. Middleware: Processes tasks such as logging, authentication and validation.
4. Router: Determines which endpoint should handle the request.
5. Controller: Handles the request and coordinates the operation.
6. Service layer: Executes business logic, if the application uses one.
7. Database: Performs the required data operation.
8. Response: Backend sends the result with an HTTP status code.
9. Client: Receives and displays the response.

### Practical example: Fetch user profile

Client requests:

```
GET /api/users/101
```

Backend processing:

```
Request received
      ↓
Authentication middleware
      ↓
User route
      ↓
User controller
      ↓
User service
      ↓
Database query
      ↓
User data returned
      ↓
HTTP response
```

Example response:

```
{
  "id": 101,
  "name": "Rahul",
  "email": "rahul@gmail.com"
}
```

Important: This is a common layered architecture. Not every backend application needs separate controller, service and repository layers.

### Interview questions

1. Explain the complete request-response lifecycle.
2. What happens after an HTTP request reaches the server?
3. What is the role of middleware?
4. What is the difference between a controller and a service?
5. What happens if the database query fails?
6. How does the server know which function should handle a request?
