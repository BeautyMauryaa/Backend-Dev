# **Topic: Complete CRUD API in Express.js**

 will build Student Management REST API using **Node.js + Express.js**.

CRUD means:

| Operation      | HTTP method | Purpose                        |
| -------------- | ----------- | ------------------------------ |
| Create         | POST        |to add the  New student          |
| Read           | GET         |to  retrieve the Students      |
| Update         | PUT         | to update the Complete resource  |
| Partial Update | PATCH       |to update the  Selected fields    |
| Delete         | DELETE      |  to remove     |

## **1. API endpoints**

| Method | Endpoint        | Expected status |
| ------ | --------------- | --------------- |
| GET    | `/students`     | 200             |
| GET    | `/students/:id` | 200 / 404       |
| POST   | `/students`     | 201 / 400       |
| PUT    | `/students/:id` | 200 / 404       |
| PATCH  | `/students/:id` | 200 / 404       |
| DELETE | `/students/:id` | 200 / 404       |

## **2. Practical scenario**

You're developing a School Management System. An admin should be able to:

- View all registered students.
- Search for a particular student by ID.
- Register a new student.
- Update student details.
- Change only the student's email or name.
- Delete a student record.

We'll initially use an in-memory array, then implement the same CRUD operations using MongoDB and Mongoose.

## **3. Important implementation concepts**

Before coding, understand these edge cases:

**POST**

- Name and email are required.
- Duplicate email should not be accepted.
- New resource should receive a unique ID.

**GET**

- Return an empty array if no students exist.
- Return 404 if a requested student doesn't exist.

**PUT**

- Validate the complete replacement data.
- Don't silently preserve omitted fields if implementing full replacement semantics.

**PATCH**

- Update only the fields supplied.
- Reject invalid or unsupported fields.

**DELETE**

- Return 404 for a nonexistent ID.
- Don't report successful deletion if nothing was deleted.

## **4. Your practical task**

Build this project using your existing MVC structure:

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
└── models/
    └── studentModel.js
```

Use this initial data:

```
const students = [
    { id: 1, name: "Alice", email: "alice@gmail.com", department: "CS" },
    { id: 2, name: "Bob", email: "bob@gmail.com", department: "IT" },
    { id: 3, name: "Charlie", email: "charlie@gmail.com", department: "CS" }
];
```

**Test cases**

1. Get all students.
2. Get student with ID `2`.
3. Get student with ID `99`.
4. Create a student with valid data.
5. Create a student without an email.
6. Update student `1` using PUT.
7. Update only the email of student `2` using PATCH.
8. Delete student `3`.
9. Delete student `99`.
10. Try registering an already-used email.



