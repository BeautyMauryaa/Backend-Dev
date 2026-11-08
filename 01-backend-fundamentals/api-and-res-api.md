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


# Topic 5. What is REST API?

## 1. What is REST?

REST stands for Representational State Transfer.

REST is an architectural style used to design network-based APIs. It defines principles for communication between clients and servers.

An API that follows REST principles is called a RESTful API.

Simple example:

Imagine you're developing a Student Management System.

Your backend provides these endpoints:

| HTTP Method | Endpoint          | Purpose          |
| ----------- | ----------------- | ---------------- |
| GET         | `/api/students`   | Get all students |
| GET         | `/api/students/1` | Get one student  |
| POST        | `/api/students`   | Create student   |
| PUT         | `/api/students/1` | Replace student  |
| PATCH       | `/api/students/1` | Update student   |
| DELETE      | `/api/students/1` | Delete student   |

These endpoints operate on a resource called `students`.

## 2. Important REST Principles

There are six commonly described REST architectural constraints.

### 1. Client-Server Separation

Frontend and backend should have separate responsibilities.

- Client handles UI.
- Server handles business logic and data processing.

### 2. Statelessness

Every request should contain the information necessary for the server to process it.

The server should not depend on stored client session state between requests.

Example:

```
GET /api/profile
Authorization: Bearer your_token
```

The client sends its authentication credentials with the request.

### 3. Cacheability

Responses should indicate whether they can be cached.

For example, publicly available product information may be cached to reduce repeated database queries.

### 4. Uniform Interface

Resources should be accessed through a consistent interface.

Example:

```
GET    /api/users
POST   /api/users
GET    /api/users/10
DELETE /api/users/10
```

### 5. Layered System

A client doesn't need to know whether its request passes through a proxy, gateway, load balancer or other intermediate layer.

### 6. Code on Demand (Optional)

A server can optionally send executable code to a client, such as JavaScript.

This is the optional REST constraint.

[RESTful API | Engati](https://images.openai.com/static-rsc-4/-c1SRh6vG2PkipdqfqKGNleyNV8yJ6EfRfg_3A3JDDvSZop-H7VAUi_QtC3QwEQmSOlt0y8GU_nkT9t2WCjb-V6UeWedNfOiKQImXZj1LpkCaY0hshcp51gZ65IUI3I2TUUe8MGLcapB4M9zcUXSoIo8f7HR-Q3qYQfX2Gc93Fg?purpose=inline)

[engati.com](https://www.engati.com/glossary/restful-api?utm_source=chatgpt.com)

## 3. REST API vs Normal API

| API                                    | REST API                                     |
| -------------------------------------- | -------------------------------------------- |
| General communication interface        | API following REST architectural constraints |
| Can use different architectural styles | Uses REST principles                         |
| Can use different protocols            | Commonly uses HTTP                           |
| No single mandatory data format        | Commonly uses JSON                           |

Important interview point: Every REST API is an API, but every API is not a REST API.

## 4. Interview Questions

1. What is REST?
2. What is a RESTful API?
3. What are the six REST architectural constraints?
4. What does stateless mean?
5. Why are REST APIs commonly used?
6. What is the difference between REST and SOAP?
7. Is JSON mandatory in REST?
8. Can REST APIs maintain authentication?

