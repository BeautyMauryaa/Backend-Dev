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



What is REST?
REST stands for Representational State Transfer.

It is an architectural style for designing network-based APIs.

A RESTful API allows clients to interact with resources using standard HTTP methods.

Examples of resources:
- Users
- Students
- Products
- Orders
- Payments
2. REST API example
Imagine you're developing a Student Management System.

Your backend provides these endpoints:
HTTP Method	Endpoint	Operation
GET	/api/students	Get all students
GET	/api/students/10	Get one student
POST	/api/students	Create student
PUT	/api/students/10	Replace student
PATCH	/api/students/10	Partially update student
DELETE	/api/students/10	Delete student









blog.bytebytego.com


3. Important REST principles
There are six commonly described REST architectural constraints.

1. Client-Server

Client and server have separate responsibilities.

2. Statelessness

Every request must contain the information necessary for the server to process it. The server does not rely on stored client session state between requests.

3. Cacheability

Responses should indicate whether they can be cached.

4. Uniform Interface

Resources are accessed through a consistent interface, generally using resource-oriented URLs and standard HTTP methods.

5. Layered System

The client does not need to know whether it communicates directly with the origin server or through intermediaries such as proxies or gateways.

6. Code on Demand (Optional)

A server may optionally send executable code to the client.

Interview tip: Statelessness is especially important. For example, a JWT-authenticated request typically sends its access token with each protected API request.
4. What makes an API RESTful?
Compare these examples:
Preferred
Resource-oriented endpoints

GET /api/users
POST /api/users
DELETE /api/users/5



Avoid
Action-oriented endpoint naming

GET /api/getUsers
POST /api/createUser
GET /api/deleteUser/5



REST APIs generally use nouns for resources and HTTP methods to express operations.
5. Important interview questions
1. What is REST API?
2. What is the difference between REST and RESTful API?
3. What are the six REST constraints?
4. What does stateless mean?
5. Why do we use HTTP methods in REST APIs?
6. What is the difference between PUT and PATCH?
7. Can GET requests have a request body?
8. Is REST an architectural style or a protocol?
9. What is resource-based URL design?
10. Can REST APIs use JSON?
6. Real-world scenario
Scenario: A user clicks the Delete button on a student record.

What should happen?
1. Frontend sends DELETE /api/students/10.
2. Backend authenticates the user.
3. Backend checks whether the user is authorized.
4. Backend checks whether the student exists.
5. Backend deletes the student.
6. Backend returns an appropriate HTTP response.
7. Frontend updates the student list.
One important distinction: REST does not require every API to use JSON, although JSON is commonly used.