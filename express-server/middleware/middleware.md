
## **1. What is middleware?**

**Interview definition:**

Middleware is a function that has access to the request object (`req`), response object (`res`), and the `next()` function. It can execute code, modify the request or response, end the request-response cycle, or pass control to the next middleware.

It is used in authentication, authorization, logging, validation, error handling, and many other backend operations.

In simple words:

When a client sends a request, middleware can execute before the final route handler.

**Request lifecycle with middleware**

Client sends request

**Middleware 1** — Logging

**Middleware 2** — Authentication

**Middleware 3** — Validation

Route handler — Business logic

Response sent to client

This is an illustrative sequence. Actual middleware execution depends on how routes and middleware are registered.

## **2. Middleware function structure**

```
function myMiddleware(req, res, next) {
    console.log("Middleware executed");

    next();
}
```

Understand its three parameters:

| Parameter | Purpose                             |
| --------- | ----------------------------------- |
| `req`     | Access incoming request data        |
| `res`     | Send a response to the client       |
| `next`    | Pass control to the next middleware |

### **What does&#x20;**`next()`**&#x20;do?**

`next()` tells Express to continue to the next middleware or matching route handler.

Example:

```
const express = require("express");
const app = express();

function logger(req, res, next) {
    console.log("Request received");
    next();
}

app.use(logger);

app.get("/", (req, res) => {
    res.send("Home page");
});

app.listen(3000);
```

When you visit `/`, output:

```
Request received
```

Then the route handler sends:

```
Home page
```

**Important:** If middleware neither sends a response nor calls `next()` (or passes an error), the request can remain pending.

## **3. Types of middleware in Express.js**

Express middleware can be categorized into five important types.

| Type              | Purpose                                      |
| ----------------- | -------------------------------------------- |
| Application-level | Applies to the application or selected paths |
| Router-level      | Applies to a particular Express router       |
| Built-in          | Provided by Express                          |
| Third-party       | Installed from npm                           |
| Error-handling    | Handles errors during request processing     |

### **A. Application-level middleware**

Registered using `app.use()` or an HTTP method such as `app.get()`.

```
function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(logger);
```

This middleware runs for requests that reach it, regardless of their route, because no path restriction is specified.

### **B. Router-level middleware**

Middleware attached to an Express Router rather than the entire application.

```
const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
    console.log("Users router middleware");
    next();
});

router.get("/", (req, res) => {
    res.send("All users");
});

app.use("/users", router);
```

It runs for requests handled through this router, after the router is mounted and the middleware is reached.

### **C. Built-in middleware**

Express provides middleware for common tasks.

| Middleware             | Purpose                      |
| ---------------------- | ---------------------------- |
| `express.json()`       | Parses incoming JSON         |
| `express.urlencoded()` | Parses URL-encoded form data |
| `express.static()`     | Serves static files          |

Example:

```
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
```

### **D. Third-party middleware**

These are middleware packages installed from npm.

Examples:

- `cors` — controls cross-origin browser access.
- `morgan` — HTTP request logging.
- `helmet` — sets security-related HTTP headers.

Installation:

```
npm install cors morgan helmet
```

Usage:

```
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
```

### **E. Error-handling middleware**

This middleware handles errors passed through Express's error-handling flow.

It has four parameters: `err`, `req`, `res`, and `next`.

```
function errorHandler(err, req, res, next) {
    console.error(err);

    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
}

app.use(errorHandler);
```

We'll study centralized error handling separately.

## **4. Middleware execution order — Very important**

Express executes middleware in the order in which it is registered.

Consider this example:

```
app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
});

app.use((req, res, next) => {
    console.log("Middleware 2");
    next();
});

app.get("/", (req, res) => {
    console.log("Route handler");
    res.send("Hello");
});
```

Expected console output:

```
Middleware 1
Middleware 2
Route handler
```

Why?

1. Request enters Express.
2. Middleware 1 executes and calls `next()`.
3. Middleware 2 executes and calls `next()`.
4. Matching route handler executes.
5. Response is sent.

**Execution order**

1. Middleware 1
2. Middleware 2
3. Route handler
4. Response

### **What happens if we change the order?**

```
app.get("/", (req, res) => {
    res.send("Hello");
});

app.use((req, res, next) => {
    console.log("Middleware executed");
    next();
});
```

When `/` is requested, the middleware after the route does not execute because the route already sent the response.

**Interview point:** Middleware registration order matters because Express processes the request through matching middleware and routes in their registered order.

## **5. What happens if we don't call&#x20;**`next()`**?**

Consider:

```
app.use((req, res, next) => {
    console.log("Middleware executed");
});

app.get("/", (req, res) => {
    res.send("Home Page");
});
```

The browser may keep loading because the middleware neither sends a response nor passes control forward.

There are three common ways middleware can proceed:

**1. Call&#x20;**`next()`

```
next();
```

Pass control to the next matching middleware or route.

**2. Send a response**

```
res.status(403).send("Access denied");
```

Ends the request-response cycle.

**3. Pass an error**

```
next(new Error("Something went wrong"));
```

Passes control to error-handling middleware.

There is also `next("route")`, which skips the remaining callbacks for the current route and moves to the next matching route.

## **6. Real-world scenario: Authentication middleware**

Suppose an API allows only logged-in users to access their profile.

Instead of checking authentication separately in every route, we create middleware.

```
function authenticate(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized: Token required"
        });
    }

    // Token verification would happen here.

    next();
}

app.get("/profile", authenticate, (req, res) => {
    res.json({
        message: "Welcome to your profile"
    });
});
```

Execution:

- Client requests `/profile`.
- Authentication middleware checks the authorization header.
- If no token exists, it returns `401 Unauthorized`.
- Otherwise, after successful verification, it calls `next()`.
- The profile route executes.

Note: The example checks only whether a token exists. A real implementation must verify the token's signature and claims before granting access.

**This is why middleware is useful:** We can reuse authentication logic across multiple protected endpoints.

## **7. Interview questions**

Make sure you understand these:

1. What is middleware in Express.js?
2. What are the three parameters of middleware?
3. What does `next()` do?
4. What happens if `next()` is not called?
5. What is the difference between `app.use()` and route-specific middleware?
6. What is the difference between application-level and router-level middleware?
7. What is third-party middleware? Give examples.
8. Why does middleware execution order matter?
9. How is authentication implemented using middleware?
10. What is `next(err)` used for?


## **9. Practical coding challenge**
```
practical folder
```