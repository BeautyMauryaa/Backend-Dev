
## **1. What is MongoDB?**

**Interview definition:**

MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like BSON documents instead of traditional rows and columns.

Example student document:

```
{
  "_id": "673abc123",
  "name": "Alice",
  "email": "alice@gmail.com",
  "department": "Computer Science"
}
```

### **SQL vs MongoDB**

| SQL Database | MongoDB    |
| ------------ | ---------- |
| Database     | Database   |
| Table        | Collection |
| Row          | Document   |
| Column       | Field      |
| Primary Key  | `_id`      |

## **2. What is Mongoose?**

**Interview definition:**

Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides schemas, models, validation, and convenient methods for interacting with MongoDB.

Simple difference:

- MongoDB = Database.
- Mongoose = Library that helps Node.js communicate with MongoDB.

## **3. Install dependencies**

Inside your backend project:

```
npm install mongoose dotenv
```

We'll use:

- `mongoose` for database operations.
- `dotenv` for environment variables.

## **4. Project structure**

```
backend/
│
├── server.js
├── .env
│
├── config/
│   └── db.js
│
├── models/
│   └── Student.js
│
├── controllers/
│   └── studentController.js
│
└── routes/
    └── studentRoutes.js
```

## **5. Connect MongoDB with Express**

First, create a MongoDB database using MongoDB Atlas or a local MongoDB installation.

In `.env`:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Do not commit `.env` to GitHub.

Create `config/db.js`:

```
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected successfully");

    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
```

**Understand:** `mongoose.connect()` returns a Promise. We use `await` so the connection completes before the server starts accepting requests.

## **6. Create Student Schema and Model**

Create `models/Student.js`:

```
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    department: {
        type: String,
        required: true
    },

    semester: {
        type: Number,
        min: 1,
        max: 8
    }

}, {
    timestamps: true
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
```

### **Important concepts**

| Concept      | Meaning                                             |
| ------------ | --------------------------------------------------- |
| Schema       | Defines document structure and validation rules     |
| Model        | Provides an interface to interact with a collection |
| `required`   | Field must be present                               |
| `trim`       | Removes surrounding whitespace                      |
| `unique`     | Creates a unique index; not a Mongoose validator    |
| `timestamps` | Automatically adds `createdAt` and `updatedAt`      |

**Interview question:** Is `unique: true` a validator?

No. It is an index declaration. Duplicate values generally cause a MongoDB duplicate-key error (`E11000`), which your application should handle.

## **7. Connect everything in server.js**

```
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
```

Notice that the server starts only after the database connection succeeds.

## **8. MongoDB CRUD methods**

These are the methods you'll use frequently in backend development.

| Operation | Mongoose method               |
| --------- | ----------------------------- |
| Create    | `Student.create(data)`        |
| Read all  | `Student.find()`              |
| Read one  | `Student.findById(id)`        |
| Update    | `Student.findByIdAndUpdate()` |
| Delete    | `Student.findByIdAndDelete()` |

Example:

```
// Create
const student = await Student.create({
    name: "Alice",
    email: "alice@gmail.com",
    department: "CS"
});

// Read
const students = await Student.find();

// Find by ID
const studentById = await Student.findById(id);
```

For updates, use:

```
const updatedStudent = await Student.findByIdAndUpdate(
    id,
    { department: "IT" },
    { new: true, runValidators: true }
);
```

- `new: true` returns the updated document.
- `runValidators: true` enables schema validators during the update.

## **9. Practical coding challenge**

Challenge 5 · MongoDB Integration

**Scenario:** Convert your existing Student Management API from an in-memory array to MongoDB.

Your requirements:

1. Connect MongoDB using Mongoose.
2. Create a Student schema.
3. Implement all five CRUD operations.
4. Validate name, email, department, and semester.
5. Handle duplicate email errors.
6. Handle invalid MongoDB ObjectIds.
7. Return 404 when a student doesn't exist.
8. Ensure data remains available after restarting the server.

**Test these requests in Postman:**

| Method | Endpoint        | Test              |
| ------ | --------------- | ----------------- |
| POST   | `/students`     | Create student    |
| GET    | `/students`     | Get all students  |
| GET    | `/students/:id` | Get one student   |
| PATCH  | `/students/:id` | Update department |
| DELETE | `/students/:id` | Delete student    |

Example POST body:

```
{
    "name": "Nova",
    "email": "nova@example.com",
    "department": "Computer Science",
    "semester": 6
}
```

## **10. Interview questions**

1. What is MongoDB and why is it called NoSQL?
2. What is Mongoose ODM?
3. Difference between Schema and Model?
4. What is the purpose of `_id`?
5. Difference between `find()` and `findById()`?
6. Why do we use `async/await` with Mongoose?
7. What does `runValidators: true` do?
8. Is `unique: true` a validator?
9. What happens if MongoDB connection fails?
10. Difference between `findByIdAndUpdate()` and `findByIdAndDelete()`?

**Learning sequence after this:**

- MongoDB queries, filtering, sorting and pagination.
- Mongoose relationships and `populate()`.
- Authentication and authorization using JWT.
- Password hashing using bcrypt.

For now, focus on getting your first persistent MongoDB-backed CRUD API working.