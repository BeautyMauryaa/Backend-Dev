# MVC Architecture

in real-world backend projects, just keeping routes in separate files is not enough.

We also need to organize **Routes, Controllers, Models, and Business Logic**.

This is what MVC architecture does.

## **1. What is MVC Architecture?**

**Interview definition:**

MVC (Model-View-Controller) is a software architectural pattern that separates an application into three main components: Model, View, and Controller. It improves code organization, maintainability, and separation of concerns.

| Component  | Responsibility                         |
| ---------- | -------------------------------------- |
| Model      | Database structure and data operations |
| View       | User interface / presentation          |
| Controller | Handles requests and application logic |

Backend APIs mein hum generally JSON responses return karte hain instead of rendering traditional views.

## **2. Understand with a real-world example**

Suppose a user sends:

```
POST /students
```

With this data:

```
{
  "name": "Alice",
  "email": "alice@example.com"
}
```

Request ka flow:

**Client / Postman**

POST /students

**Routes**

Identifies which controller should handle the request

**Controller**

Processes request and coordinates the operation

**Model**

Interacts with database

**JSON Response**

201 Created

Remember this responsibility:

- Routes decide _where the request goes_.
- Controllers decide _what should happen_.
- Models handle _data and database operations_.

## **3. Project folder structure**

Let's organize our Student Management System.

```
backend/
│
├── server.js
│
├── routes/
│   └── studentRoutes.js
│
├── controllers/
│   └── studentController.js
│
├── models/
│   └── studentModel.js
│
└── middleware/
    └── errorHandler.js
```

This is a common structure for a small Express application. Larger projects may also separate services, validators, configurations, and repositories.

## **4. Practical implementation**

```
practical folder
```

## **5. Test using Postman**

Start:

```
node server.js
```

Try these requests:

| Method | URL                          | Expected result |
| ------ | ---------------------------- | --------------- |
| GET    | `localhost:3000/students`    | All students    |
| POST   | `localhost:3000/students`    | Create student  |
| GET    | `localhost:3000/students/1`  | Student details |
| GET    | `localhost:3000/students/99` | 404 Not Found   |

POST request body:

```
{
    "name": "Alice",
    "email": "alice@example.com"
}
```

Important limitation

This example uses an in-memory array. Data will reset whenever the server restarts. In a real application, the Model would interact with MongoDB through Mongoose.

## **6. MVC vs Three-tier architecture**

Interviewers sometimes ask about this distinction.

| MVC                              | Three-tier architecture                   |
| -------------------------------- | ----------------------------------------- |
| Model, View, Controller          | Presentation, Business Logic, Data Access |
| Organizes application components | Separates application into logical layers |
| Common in web applications       | Common in larger enterprise systems       |

A production Express project can combine MVC with a service layer:

```
routes → controllers → services → models → database
```

For example, a `studentService.js` can contain business rules such as checking whether an email is already registered before creating a student.

You don't need to introduce a service layer into every small project. Add it when business logic becomes substantial or reused.

## **7. Interview questions**

Try answering these:

1. What is MVC architecture?
2. What is the responsibility of a Controller?
3. Why should database queries not be written directly inside route files?
4. What is the difference between Model and Controller?
5. What is the purpose of `module.exports`?
6. What is a service layer, and how does it differ from a Controller?
7. Can an Express backend use MVC without a traditional View?

## **8. Practical coding challenge**

Challenge 4 · MVC Implementation

**Scenario:** Extend your Student Management System using MVC.

Create these endpoints:

| Method | Endpoint        | Function          |
| ------ | --------------- | ----------------- |
| GET    | `/students`     | Get all students  |
| GET    | `/students/:id` | Get student by ID |
| POST   | `/students`     | Create student    |
| PUT    | `/students/:id` | Update student    |
| DELETE | `/students/:id` | Delete student    |

Requirements:

- Create separate Model, Controller, and Routes files.
- Use an in-memory array.
- Validate required fields.
- Return 404 if the student doesn't exist.
- Use appropriate HTTP status codes.
- Keep route files free from business logic.
