# **Custom Middleware in Express.js**

the purpose of Custom middleware is to make the  common backend logic reusable.

For example:

- Logging middleware —record  request details
- Validation middleware — validate incoming data 
- Authentication middleware — check user authenticated 

## **1. What is Custom Middleware?**

**Interview definition:**

Custom middleware is a user-defined function in Express.js that has access to the request object (`req`), response object (`res`), and `next()` function. It can process requests, modify request/response objects, terminate the request-response cycle, or pass control to the next middleware.

Basic structure:

```
function myMiddleware(req, res, next) {
    // Perform some operation

    next();
}
```

Remember:

| Component | Purpose                             |
| --------- | ----------------------------------- |
| `req`     | Access incoming request data        |
| `res`     | Send a response                     |
| `next()`  | Pass control to the next middleware |

## **2. Logging Middleware**

**Real-world scenario:** Whenever a user accesses your API, you want to record which endpoint they requested and when.

```
function logger(req, res, next) {
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Time:", new Date().toISOString());

    next();
}
```

Register it:

```
app.use(logger);
```

Now every incoming request passes through this middleware.

Example console output:

```
Method: GET
URL: /students
Time: 2026-11-16T12:30:00.000Z
```

**Interview point:** Why should logging middleware generally be registered before routes?

Because Express executes middleware in registration order. Registering it before routes allows it to log requests before route handlers execute.

## **3. Request Validation Middleware**

**Real-world scenario:** A user wants to register a student. Your API requires a name and email.

Instead of validating the same fields inside every route, create reusable validation middleware.

```
function validateStudent(req, res, next) {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            success: false,
            message: "Name and email are required"
        });
    }

    next();
}
```

Use it in a route:

```
app.post("/students", validateStudent, (req, res) => {
    res.status(201).json({
        success: true,
        message: "Student registered successfully"
    });
});
```

Request:

```
{
    "name": "Alice",
    "email": "alice@example.com"
}
```

If either field is missing, Express returns `400 Bad Request`.

**Important:** This is basic validation. Production validation should also check data types, email format, length, and other business rules. Libraries like Zod can help with this.

## **4. Authentication Middleware**

**Real-world scenario:** Only authenticated users can access the admin dashboard.

For now, we'll check whether an authorization header exists. This is only a learning example, not actual token verification.

```
function authenticate(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized: Token missing"
        });
    }

    next();
}
```

Use it:

```
app.get("/admin", authenticate, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Admin Dashboard"
    });
});
```

In a real application, authentication middleware must verify the token's signature, expiry, and relevant claims before granting access.

## **5. Middleware Execution Order**

This is particularly important in backend interviews.

Consider:

```
app.use(logger);

app.post("/students", validateStudent, (req, res) => {
    res.json({ message: "Student created" });
});

app.get("/admin", authenticate, (req, res) => {
    res.json({ message: "Admin dashboard" });
});
```

**POST /students**

1. Logger middleware
2. Student validation middleware
3. Student route handler
4. Response sent

**GET /admin**

1. Logger middleware
2. Authentication middleware
3. Admin route handler (only if authenticated)
4. Response sent

If middleware sends a response without calling `next()`, execution stops for that request.

If middleware neither sends a response nor calls `next()` or passes an error, the request can hang.

## **6. Complete runnable example**

```

const express = require("express");

const app = express();

app.use(express.json());

// 1. Logging middleware
function logger(req, res, next) {
    console.log(req.method, req.url);
    next();
}

// 2. Validation middleware
function validateStudent(req, res, next) {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            success: false,
            message: "Name and email are required"
        });
    }

    next();
}

// 3. Authentication middleware
function authenticate(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Token missing"
        });
    }

    next();
}

// Register global middleware
app.use(logger);

// Routes
app.post("/students", validateStudent, (req, res) => {
    res.status(201).json({
        success: true,
        message: "Student created",
        student: req.body
    });
});

app.get("/admin", authenticate, (req, res) => {
    res.json({
        success: true,
        message: "Welcome Admin"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

```

## **7. Interview questions**

Try answering these without looking back at the explanations.

1. What is custom middleware in Express.js?
2. What happens if you forget to call `next()`?
3. What is the difference between application-level and route-level middleware?
4. Why should authentication middleware execute before a protected route handler?
5. Can middleware modify `req` before passing it to the next middleware?
6. What happens if a middleware sends a response and then calls `next()`?

## **8. Practical coding challenge**
```
practical
```