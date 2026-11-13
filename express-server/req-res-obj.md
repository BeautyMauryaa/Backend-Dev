# **Topic 4: Request (**`req`**) and Response (**`res`**) Objects**

## **1. What are&#x20;**`req`**&#x20;and&#x20;**`res`**?**

**Interview definition:**

- `req` (Request): An object containing information about the incoming HTTP request sent by the client.
- `res` (Response): An object used by the server to send an HTTP response back to the client.

In simple words:

- `req` = What the client sends to the server.
- `res` = What the server sends back to the client.

Example:

```
app.get("/users", (req, res) => {
    console.log(req.method);
    console.log(req.url);

    res.send("Users fetched successfully");
});
```

Here:

- `req.method` tells us the HTTP method (`GET`).
- `req.url` tells us the requested URL (`/users`).
- `res.send()` sends the response to the client.

## **2. Important properties of&#x20;**`req`

Express provides several useful properties to access incoming request data.

| Property      | Purpose           | Example                  |
| ------------- | ----------------- | ------------------------ |
| `req.params`  | Route parameters  | `/users/101`             |
| `req.query`   | Query parameters  | `/users?role=admin`      |
| `req.body`    | Request body data | JSON submitted by client |
| `req.headers` | Request headers   | Authorization token      |
| `req.method`  | HTTP method       | GET, POST                |
| `req.url`     | Requested URL     | `/users/101`             |
| `req.path`    | URL path          | `/users/101`             |
| `req.ip`      | Client IP address | Client IP                |

Let's understand the three most important properties.

### **A.&#x20;**`req.params`**&#x20;— Route parameters**

Used to access dynamic values in the URL path.

Request:

```
GET /users/101
```

Express route:

```
app.get("/users/:id", (req, res) => {
    console.log(req.params.id);
});
```

Output:

```
101
```

Here, `:id` is a dynamic route parameter.

### **B.&#x20;**`req.query`**&#x20;— Query parameters**

Used to access optional parameters passed after `?` in the URL.

Request:

```
GET /users?role=admin&age=22
```

Express route:

```
app.get("/users", (req, res) => {
    console.log(req.query.role);
    console.log(req.query.age);
});
```

Output:

```
admin
22
```

Common use cases:

- Searching
- Filtering
- Sorting
- Pagination

### **C.&#x20;**`req.body`**&#x20;— Request body**

Used to access data sent in the request body, commonly with POST, PUT and PATCH.

Request:

```
POST /users
```

JSON body:

```
{
  "name": "Nova",
  "email": "nova@gmail.com",
  "age": 22
}
```

Express code:

```
app.use(express.json());

app.post("/users", (req, res) => {
    console.log(req.body.name);
    console.log(req.body.email);
});
```

Output:

```
Nova
nova@gmail.com
```



Important

&#x20;Without `express.json()`, Express will not automatically parse incoming JSON request bodies into `req.body`.



## **3. Important methods of&#x20;**`res`

The `res` object provides methods to send responses to clients.

| Method             | Purpose                                 |
| ------------------ | --------------------------------------- |
| `res.send()`       | Sends a response                        |
| `res.json()`       | Sends a JSON response                   |
| `res.status()`     | Sets HTTP status code                   |
| `res.sendStatus()` | Sets status and sends its standard text |
| `res.redirect()`   | Redirects the client                    |
| `res.set()`        | Sets response headers                   |
| `res.end()`        | Ends the response                       |

### **A.&#x20;**`res.send()`

```
app.get("/", (req, res) => {
    res.send("Welcome to our application");
});
```

### **B.&#x20;**`res.json()`

```
app.get("/users", (req, res) => {
    res.json({
        success: true,
        users: ["Rahul", "Priya"]
    });
});
```

### **C.&#x20;**`res.status()`

```
app.get("/users", (req, res) => {
    res.status(200).json({
        message: "Users fetched successfully"
    });
});
```

You can chain `status()` and `json()`.

### **D.&#x20;**`res.sendStatus()`

```
res.sendStatus(404);
```

This sends an HTTP 404 response with its standard status text.

### **E.&#x20;**`res.redirect()`

```
app.get("/old-page", (req, res) => {
    res.redirect("/new-page");
});
```

Redirects the client to another URL.

## **4. Practical example: Using req and res together**

Imagine a login API.

```
app.use(express.json());

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required"
        });
    }

    return res.status(200).json({
        success: true,
        message: "Login request received"
    });
});
```

Understand the execution:

1. Client sends email and password.
2. Express parses the JSON body.
3. `req.body` provides the submitted credentials.
4. Backend validates whether required fields exist.
5. `res.status(400)` sends a bad-request response if data is missing.
6. Otherwise, `res.status(200).json()` sends a success response.

This is only input validation, not complete authentication. A real login must verify the user and password securely.

## **5. Important distinction:&#x20;**`res.send()`**&#x20;vs&#x20;**`res.json()`

| `res.send()`                               | `res.json()`                   |
| ------------------------------------------ | ------------------------------ |
| Sends strings, objects, buffers, etc.      | Sends JSON-formatted responses |
| Can send different response types          | Intended for JSON APIs         |
| Automatically handles common content types | Sets JSON content type         |

For backend REST APIs, `res.json()` is commonly used when returning structured data.

## **6. Interview questions**

Make sure you can answer these without looking at notes.

1. What are `req` and `res` in Express.js?
2. What is the difference between `req.params`, `req.query`, and `req.body`?
3. Why do we use `express.json()`?
4. What happens if we access `req.body` without JSON parsing middleware?
5. What is the difference between `res.send()` and `res.json()`?
6. What does `res.status(201).json()` do?
7. Can we send multiple responses using the same `res` object?
8. What happens if we forget to send a response or end the response?
9. What is the difference between request headers and request body?
10. Why should we not send sensitive information such as passwords in API responses?

## **7. Practical test**

**Request & Response quiz**

0/5

**Q1. A client requests \`/products/45\`. Which property gives you \`45\`?**

req.body

req.query

req.params

req.headers



**Q2. A client requests \`/products?category=mobile\`. How do you access \`mobile\`?**

req.params.category

req.query.category

req.body.category

res.category



**Q3. A client sends JSON containing name and email through POST. Which property accesses it?**

req.url

req.headers

req.body

res.body



**Q4. Which middleware parses incoming JSON request bodies?**

express.static()

express.json()

express.router()

express.send()



**Q5. What does \`res.status(201).json(data)\` do?**

Reads request data

Sends data with HTTP 201 status

Redirects the client

Deletes a resource



Check answers

**Practical coding task:** Build a `GET /users/:id` endpoint that also accepts a `role` query parameter. Return the ID and role in a JSON response.

Example request:

```
GET /users/101?role=admin
```

Expected response:

```
{
  "userId": "101",
  "role": "admin"
}
```