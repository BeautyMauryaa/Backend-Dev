## **1. What is Error-Handling Middleware?**

**Interview definition:**

Error-handling middleware is a special Express middleware used to catch and handle errors occurring during request processing and send consistent error responses to clients.

Its signature has four parameters:

```
function errorHandler(err, req, res, next) {
    // Handle error
}
```



Interview important

&#x20;Express identifies error-handling middleware by its four parameters.



| Parameter | Purpose                             |
| --------- | ----------------------------------- |
| `err`     | Error object                        |
| `req`     | Incoming request                    |
| `res`     | Outgoing response                   |
| `next`    | Pass error to another error handler |

## **2. Why do we need centralized error handling?**

Without centralized handling:

```
app.get("/students", (req, res) => {
    try {
        // Some operation
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get("/teachers", (req, res) => {
    try {
        // Some operation
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
```

Problem:

- Repeated code.
- Inconsistent error responses.
- Difficult maintenance.

With centralized handling, routes pass errors to one common handler.

## **3. How does&#x20;**`next(err)`**&#x20;work?**

Normally:

```
next();
```

Moves execution to the next middleware.

But:

```
next(err);
```

Passes control to Express error-handling middleware, skipping normal middleware and route handlers.

Example:

```
app.get("/students", (req, res, next) => {
    const error = new Error("Something went wrong");

    next(error);
});
```

Central error handler:

```
function errorHandler(err, req, res, next) {
    res.status(500).json({
        success: false,
        message: err.message
    });
}
```

Register it after your routes:

```
app.use(errorHandler);
```

## **4. Complete runnable example**

```

const express = require("express");

const app = express();

app.use(express.json());

// Route 1
app.get("/students", (req, res, next) => {
    try {
        const students = null;

        if (!students) {
            throw new Error("Students data not found");
        }

        res.json(students);

    } catch (error) {
        next(error);
    }
});

// Route 2
app.get("/users", (req, res, next) => {
    try {
        throw new Error("Database connection failed");

    } catch (error) {
        next(error);
    }
});

// Centralized error handler
function errorHandler(err, req, res, next) {
    console.error(err.message);

    res.status(500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
}

// Always register after routes
app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

```

Test:

```
GET http://localhost:3000/students
```

Expected response:

```
{
  "success": false,
  "message": "Students data not found"
}
```

The route doesn't need to construct its own error response. It passes the error to the centralized handler.

## **5. Handling different HTTP errors**

Not every error should return `500`.

| Error                         | HTTP status |
| ----------------------------- | ----------- |
| Invalid request data          | 400         |
| Not authenticated             | 401         |
| Access forbidden              | 403         |
| Resource not found            | 404         |
| Duplicate resource / conflict | 409         |
| Unexpected server error       | 500         |

Example: A student doesn't exist.

```
app.get("/students/:id", (req, res, next) => {
    const student = null;

    if (!student) {
        const error = new Error("Student not found");
        error.statusCode = 404;

        return next(error);
    }

    res.json(student);
});
```

Update the error handler:

```
function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
}
```

Now the response is `404`, not `500`.

## **6. Important: Async error handling**

Backend developers frequently work with asynchronous operations such as database queries.

In Express 5, rejected promises returned by async route handlers are automatically forwarded to error-handling middleware.

In Express 4, you generally need to catch rejected promises and call `next(err)` yourself, or use an async wrapper.

Express 5 example:

```
app.get("/students", async (req, res) => {
    const students = await Student.find();

    res.json(students);
});
```

If the database operation rejects, Express 5 forwards the error automatically.

## **7. Interview questions**

Try these:

1. What is centralized error handling?
2. Why does error-handling middleware require four parameters?
3. Difference between `next()` and `next(err)`?
4. Why should error-handling middleware be registered after routes?
5. What is the difference between HTTP 400 and 500?
6. How does Express 5 handle rejected promises in async route handlers?
7. What happens if an error handler itself passes an error using `next(err)`?

## **8. Practical coding challenge**

Challenge 2 · Error Handling

**Scenario:** Build an API for a Student Management System.

Create these endpoints:

| Endpoint            | Requirement                                |
| ------------------- | ------------------------------------------ |
| `GET /students`     | Return a list of students                  |
| `GET /students/:id` | Return a student or a 404 error            |
| `POST /students`    | Reject requests with missing name or email |
| Any unknown route   | Return a 404 response                      |

**Additional requirements:**

- Create one centralized error-handling middleware.
- Use `next(err)` to pass errors.
- Use appropriate HTTP status codes.
- Keep error responses consistent.
- Do not write separate error-response logic in every route.

**Expected error response:**

```
{
    "success": false,
    "message": "Student not found"
}
```