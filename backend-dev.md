
# Module 1 – Backend Fundamentals

## Topic 1. What is Backend Development?

### 1. What is Backend Development?

Backend development is the process of building and maintaining the server-side part of an application.

It handles:

- Business logic
- Database operations
- Authentication and authorization
- API development
- Data processing
- Security
- Communication between frontend and database

Simple example:

Imagine you're using an online shopping application.

[eCommerce Architecture: All You Need to Know in 2025](https://images.openai.com/static-rsc-4/VbGGoyAf-oPHmswrqvTP062GuquE6XCTu2Eys86WetCjLpPwtmnZvZ0dLj6Gi1aPLOpkucbfWvrGd7cY_kDbKPwekoVJjHAq3-yeLDpTyaap73qItw-0n_3rJF9dDUG8mT1eeWEvsMFv2HYPPmAMz4akLQRwFMpQDCP69SYo6E4?purpose=inline)

[virtocommerce.com](https://virtocommerce.com/blog/ecommerce-architecture?utm_source=chatgpt.com)

When you:

- Open a website → Frontend displays the interface.
- Login → Backend verifies your credentials.
- Search for a product → Backend fetches product data.
- Place an order → Backend processes the order and stores it in the database.

The user sees the frontend, but most of the application logic happens in the backend.


## Topic 2. Client-Server Architecture

This is one of the most important concepts in backend development.

### 1. What is Client?

A client is an application or device that sends requests to a server to access data or services.

Examples:

- Web browser
- Mobile application
- Desktop application

### 2. What is a Server?

A server is a system that receives client requests, processes them and sends back responses.

A server may:

- Execute business logic.
- Validate incoming data.
- Communicate with databases.
- Authenticate users.
- Return responses.

### 3. How does Client-Server Architecture work?

[Understanding Client–Server Architecture | by Sudha Rani Maddala | Mar, 2026 | Medium](https://images.openai.com/static-rsc-4/EzkuO412FIltyAm3M4X_ZIPNTQISmw9CCBiwzzWRibxrD1oAZzp1LhOsSwu4qbNKsQ7OIUh0AsEbFtL7Ysc78G4hyjWVSCN7AkORoaXX2rvCjCtCAfe0s2iG3EhhoiN4YqUVugD5udSCBIxtnuu0w0mvmNSaW7WqhlFrGgTOL-A?purpose=inline)

[sudhamsr.medium.com](https://sudhamsr.medium.com/understanding-client-server-architecture-6b205932f470?utm_source=chatgpt.com)

The basic flow:

1. Client sends a request.
2. Server receives the request.
3. Server processes the request.
4. Server communicates with the database if needed.
5. Database returns the requested data.
6. Server sends a response.
7. Client displays the result.

### Practical example

You open a website and click the Login button.

The browser sends:

```
POST /api/login
Content-Type: application/json
```

Request body:

```
{
  "email": "user@gmail.com",
  "password": "123456"
}
```

The backend:

1. Receives the login request.
2. Validates the email and password.
3. Checks whether the user exists.
4. Verifies the password.
5. Generates an authentication token if credentials are valid.
6. Returns a response.

Example response:

```
{
  "message": "Login successful",
  "token": "your-auth-token"
}
```

The frontend receives the response and updates the UI.

### 4. Important Interview Questions

Q1. What is Client-Server Architecture?

It is a model in which a client sends requests to a server, and the server processes those requests and returns responses.

Q2. Can a client communicate directly with a database?

Generally, no. In a typical web application, the client communicates with the backend server, which handles database operations. This protects database credentials and enforces business logic and security.

Q3. What happens if the server is down?

The client cannot receive a normal response from that server. It may show a connection error, timeout or service-unavailable message.

Q4. Can multiple clients communicate with one server?

Yes. A server can handle requests from multiple clients, subject to its resources and architecture.

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

## Topic 4. What is an API?

API stands for Application Programming Interface.

An API allows two software applications to communicate with each other through a defined interface.

Example:

Your frontend wants to display a user's profile. Instead of accessing the database directly, it calls a backend API.

```
GET /api/users/101
```

The backend processes the request and returns user information.

### Important API terminology

| Term        | Meaning                                 |
| ----------- | --------------------------------------- |
| Endpoint    | Specific API URL                        |
| HTTP Method | Type of operation                       |
| Request     | Data sent to the server                 |
| Response    | Data returned by server                 |
| Headers     | Additional request/response information |
| Status Code | Indicates the result of a request       |
| Payload     | Data carried in the request or response |

### Practical API examples

| Method | Endpoint         | Purpose                |
| ------ | ---------------- | ---------------------- |
| POST   | `/api/users`     | Create user            |
| GET    | `/api/users`     | Get all users          |
| GET    | `/api/users/101` | Get one user           |
| PUT    | `/api/users/101` | Replace user data      |
| PATCH  | `/api/users/101` | Update selected fields |
| DELETE | `/api/users/101` | Delete user            |

We'll study HTTP methods and REST APIs in detail in Module 4.
