Q1. What is Client-Server Architecture?

It is a model in which a client sends requests to a server, and the server processes those requests and returns responses.

---

Q2. Can a client communicate directly with a database?

Generally, no. In a typical web application, the client communicates with the backend server, which handles database operations. This protects database credentials and enforces business logic and security.

---

Q3. What happens if the server is down?

The client cannot receive a normal response from that server. It may show a connection error, timeout, or service-unavailable message.

---

Q4. Can multiple clients communicate with one server?

Yes. A server can handle requests from multiple clients, subject to its resources and architecture.

---

Q5. What happens after an HTTP request reaches the server?

The server receives the request, parses the headers and body, runs security checks and middleware, matches the URL to a route, executes the controller and business logic, queries the database if needed, and sends back an HTTP response.

---

Q6. How does the server know which function should handle a request?

It uses a router. The router matches the incoming HTTP method (`GET`, `POST`) and URL path (`/users`) against its route table to find and execute the correct function.

---

Q7. What is the role of middleware?

Middleware acts as an interceptor between the request and your route handler. It handles tasks like checking if a user is logged in (authentication), parsing JSON data, logging requests, and catching errors.

---

Q8. What is the difference between a Controller and a Service?

* **Controller:** Handles the HTTP side of things—reads the request (`req`), talks to the client, and sends the response (`res`).
* **Service:** Contains the core business logic and database queries, keeping it separate from HTTP rules so it can be reused.

---

Q9. What happens if the database query fails?

The query throws an error. If it's part of a transaction, it rolls back any changes to keep data safe. The error bubbles up to the server's error handler, which logs the issue and returns an error response (like a `500` status code) to the client.

How does frontend communicate with backend?



What is HTTP?



What is the difference between HTTP and HTTPS?



Why is JSON commonly used for API communication?



What is the difference between Fetch and Axios?



What happens when the frontend sends an incorrect request?



Can frontend communicate with backend without an API?



What is the purpose of request headers?



What is the difference between request body and response body?



What happens if the backend server does not respond?