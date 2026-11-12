
## Topic 1: What is Express.js?

Interview definition:

Express.js is a minimal and flexible web application framework built on top of Node.js. It simplifies server-side development by providing features such as routing, middleware handling, and request-response management.

### Why do we need Express.js?

Node.js already provides an HTTP module, so technically we can create a server without Express.

But with Node.js alone, we have to manually handle:

- URL and HTTP method checking.
- Routing.
- Request body parsing.
- Middleware-like logic.
- Error handling.

Express provides a simpler way to manage these tasks.

### Node.js HTTP vs Express.js

Without Express — Node.js

```
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.end("Home Page");
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
});

server.listen(3000);
```

With Express.js

```
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.listen(3000);
```

Notice how Express simplifies routing.

### Important Express features

| Feature           | Purpose                                      |
| ----------------- | -------------------------------------------- |
| Routing           | Handles different URLs and HTTP methods      |
| Middleware        | Executes functions during request processing |
| Request handling  | Accesses incoming request data               |
| Response handling | Sends responses to clients                   |
| Error handling    | Manages application errors                   |

## Topic 2: Create your first Express server

Step 1 — Initialize project

```
mkdir express-practice
cd express-practice
npm init -y
```

Step 2 — Install Express

```
npm install express
```

Step 3 — Create `server.js`

```
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Backend Development");
});

app.get("/about", (req, res) => {
    res.send("This is About Page");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

Step 4 — Run the server

```
node server.js
```

Open these URLs in your browser or Postman:

- `http://localhost:3000/`
- `http://localhost:3000/about`

Understand the execution

Client sends GET request

Express receives request

Matching route executes

Response sent to client

## Interview questions

1. What is Express.js?
2. Is Express.js a programming language or framework?
3. Can we create a server without Express.js?
4. What is the difference between Node.js and Express.js?
5. What does `app.listen()` do?
6. What happens when a requested route does not exist?

Practical task: Create an Express server with these three GET endpoints:

- `/` → `"Welcome"`
- `/users` → `"All Users"`
- `/products` → `"All Products"`

