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