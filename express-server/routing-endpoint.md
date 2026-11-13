
## Topic 3: Routing, HTTP Methods & API Endpoints

This is one of the most important topics for a backend developer. You should understand not only the syntax but also how a real backend handles different client requests.

### 1. What is routing in Express.js?

Interview definition:

Routing is the process of determining how a server responds to a client's request based on the requested URL (path) and HTTP method.

In simple words, routing decides:

- Which URL was requested?
- Which HTTP method was used?
- What code should execute?
- What response should be returned?

Example:

```
const express = require("express");
const app = express();

app.get("/users", (req, res) => {
    res.send("Fetching all users");
});

app.post("/users", (req, res) => {
    res.send("Creating a new user");
});

app.listen(3000);
```

Both routes use `/users`, but they perform different operations because their HTTP methods are different.

### 2. HTTP methods in backend development

HTTP methods tell the server what action the client wants to perform on a resource.

| Method | Purpose                     | Example              |
| ------ | --------------------------- | -------------------- |
| GET    | Retrieve data               | Get all users        |
| POST   | Create a resource           | Create a user        |
| PUT    | Replace a resource          | Replace user details |
| PATCH  | Partially update a resource | Update user email    |
| DELETE | Delete a resource           | Delete a user        |

Let's understand these through a practical example.

Imagine we are developing a Student Management System.

Student API endpoints

GET

/students

Retrieve all students.

GET

/students/101

Retrieve student with ID 101.

POST

/students

Create a new student.

PUT

/students/101

Replace the student record.

PATCH

/students/101

Update selected student fields.

DELETE

/students/101

Delete student with ID 101.

### 3. PUT vs PATCH — Important interview question

Suppose a student record looks like this:

```
{
  "name": "Rahul",
  "email": "rahul@gmail.com",
  "age": 21
}
```

PUT request:

```
PUT /students/101
```

Request body:

```
{
  "name": "Rahul Sharma",
  "email": "rahul@gmail.com",
  "age": 22
}
```

PUT represents replacement of the resource's current representation. Fields omitted from the replacement may be removed or reset, depending on the API's implementation.

PATCH request:

```
PATCH /students/101
```

Request body:

```
{
  "age": 22
}
```

PATCH applies a partial modification. Only the age needs to change.

Interview answer:

PUT is generally used to replace a resource, whereas PATCH is used to partially update a resource.

### 4. Safe and Idempotent HTTP methods

These concepts are frequently tested in backend interviews.

Safe method: A method is safe when it is intended to retrieve information without changing the server's resource state.

- GET — Safe
- HEAD — Safe
- OPTIONS — Safe

Idempotent method: A method is idempotent if making the same request multiple times has the same intended effect on server state as making it once.

| Method | Safe? | Idempotent?     |
| ------ | ----- | --------------- |
| GET    | Yes   | Yes             |
| POST   | No    | No, generally   |
| PUT    | No    | Yes             |
| PATCH  | No    | Not necessarily |
| DELETE | No    | Yes             |

Example: Sending the same DELETE request repeatedly should leave the resource deleted. The first request may return `200` or `204`, while subsequent requests may return `404`; the intended final state remains the same.

Important: Idempotency concerns the intended server state, not necessarily identical response codes.

### 5. Practical Express implementation

Let's implement basic CRUD-style routes.
 ```
 crud-style-pract

 ```

This is a learning example: it demonstrates routing and request handling, but it does not actually store, replace, or delete students in a database.

### 6. What happens when a client calls an endpoint?

Suppose Postman sends:

```
POST http://localhost:3000/students
```

With this JSON body:

```
{
  "name": "Rahul",
  "age": 21
}
```

Execution:

1. Postman sends the HTTP request.
2. Express receives it.
3. `express.json()` parses the JSON body.
4. Express matches the POST `/students` route.
5. The route handler reads `req.body`.
6. The server sends a `201 Created` response.

### Practical scenario
Suppose you're developing an e-commerce backend.

You need to support:
- Fetch all products.
- Fetch one product using its ID.
- Fetch products by category.
- Search products by name.
One possible API design:
Requirement	Endpoint
All products	GET /products
One product	GET /products/:id
Filter by category	GET /products?category=electronics
Search by name	GET /products?search=phone

```
crud-ecommerce

```

Notice that filtering and searching can use query parameters.

Your practice
Answer these five interview questions.
1. What is routing in Express.js?
Explain using URL and HTTP method.

2. What is the difference between req.params and req.query?
• req.params example: Used to identify a specific resource, such as :id in GET /products/25.
• req.query example: Used for filtering, searching, or sorting, such as ?category=electronics in GET /products?category=electronics

3. For GET /products/25, how will you access 25?
- Assuming your route is defined as app.get('/products/:id', ...), you access 25 using the req.params property:
```
req.params.id // Returns '25'

```

4. For GET /products?page=3&limit=5, how will you access page and limit?
- access both values from the req.query object using destructuring or dot notation
```
app.get('/products', (req, res) => {
  const { page, limit } = req.query; // page is '3', limit is '5'
});

```

5. Can the same URL have both GET and POST routes? 
- Yes, the exact same URL can have both GET and POST routes because Express treats each combination of HTTP method and URL as a unique route.