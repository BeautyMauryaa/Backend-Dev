
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
