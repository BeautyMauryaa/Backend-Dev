require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

const studentRoutes = require("./routes/studentRoutes");

app.use("/students", studentRoutes);

const startServer = async () => {
    await connectDB();

    app.listen(process.env.PORT || 3000, () => {
        console.log("Server running");
    });
};

startServer();