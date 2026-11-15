
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
