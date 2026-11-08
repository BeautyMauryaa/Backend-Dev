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