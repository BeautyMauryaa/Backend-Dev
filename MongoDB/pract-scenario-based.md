## Part 5: Practical backend and scenario-based questions

*High priority for backend interviews*

These questions test whether you can use MongoDB in actual Express APIs.

### 49. How would you implement search functionality?

Use query parameters and Mongoose filters. For text search, you can use regex or MongoDB text indexes depending on the requirement.

### 50. How would you implement pagination in an API?

Use `page` and `limit` query parameters, calculate the number of documents to skip, and apply `skip()` and `limit()`.

### 51. How would you handle duplicate email registration?

Create a unique index on `email` and handle MongoDB duplicate-key errors (`E11000`) in the controller.

### 52. How would you handle an invalid MongoDB ObjectId?

Validate the ID before querying, for example using `mongoose.isValidObjectId(id)`, and return an appropriate client error.

### 53. What happens if `findById()` cannot find a document?

It returns `null`. The API should normally respond with HTTP `404`.

### 54. How would you update only the provided fields?

Use `$set` or a Mongoose update method with a properly constructed update object. Validate allowed fields rather than accepting arbitrary request-body fields.

### 55. How would you prevent users from accessing another user's data?

Use authentication and authorization, and include the authenticated user's ID in the database filter.

### 56. How would you avoid returning passwords in API responses?

Use schema-level selection settings or explicitly exclude sensitive fields with `.select("-password")`. Hash passwords before storing them.

### 57. What is the difference between validation and authentication?

* **Validation** checks whether input data is acceptable.
* **Authentication** verifies the identity of the user.

### 58. How would you count matching documents?

Use:

```javascript
Student.countDocuments({ semester: 5 });

```

### 59. How would you perform a transaction in MongoDB?

Use a session and transaction to group multiple database operations so they commit or abort together. Transactions require a supported MongoDB deployment, such as a replica set or sharded cluster.

### 60. What is the difference between replication and sharding?

* **Replication** maintains copies of data across multiple servers for availability.
* **Sharding** distributes data across multiple servers for horizontal scaling.

---

## Part 6: Practical MongoDB coding questions

These are the questions I recommend actually coding, not just reading.

### Coding practice tracker

`0/15 completed`

1. **Insert a student:** Create a document with `name`, `email`, `department` and `semester`.
2. **Find students by department:** Return all students belonging to the Computer Science department.
3. **Find by ID:** Retrieve one student using a MongoDB ObjectId.
4. **Update student details:** Update only the `email` and `semester` of a student.
5. **Delete a student:** Delete a student using their ID.
6. **Find using comparison operators:** Find students whose `semester` is greater than or equal to 5.
7. **Search students:** Search student names using a keyword supplied through a query parameter.
8. **Sort results:** Return students sorted by `name` ascending and creation date descending.
9. **Pagination:** Build an API that returns 10 students per page.
10. **Select fields:** Return only `name`, `email` and `semester`.
11. **Prevent duplicate emails:** Handle duplicate registration and return HTTP `409`.
12. **Populate references:** Fetch orders along with their associated product information.
13. **Count documents:** Return the total number of students in a department.
14. **Aggregation:** Group students by department and count the students in each department.
15. **Protect user data:** Return only records belonging to the authenticated user.

---

## Part 7: What you should prioritise

Don't spend equal time on every question. Use this order:

| Priority | Topics |
| --- | --- |
| **P1** | Documents, collections, BSON, CRUD, Schema, Model |
| **P1** | `find`, `findOne`, `findById`, updates, deletes |
| **P1** | Query operators, sorting, pagination, projection |
| **P1** | Validation, duplicate errors, ObjectId, HTTP status codes |
| **P2** | `populate`, embedding vs referencing, indexes |
| **P2** | Aggregation pipeline and transactions |
| **P3** | Replication, sharding and deeper database internals |

## How we'll prepare

I recommend this sequence:

1. **Conceptual MCQs:** Check your understanding of MongoDB and Mongoose.
2. **Interview questions:** Answer verbally or in writing without looking at notes.
3. **MongoDB query practice:** Write actual database queries.
4. **Mongoose coding:** Implement CRUD, filtering, pagination and relationships.
5. **Backend scenarios:** Solve real Express + MongoDB problems.

> One important correction to keep in mind from your previous quiz: `findByIdAndUpdate()` returns the original document by default; `{ new: true }` makes it return the updated document.
