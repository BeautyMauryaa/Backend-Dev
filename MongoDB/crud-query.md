## Part 2: MongoDB CRUD and query operators

*Must know for coding rounds*

### 16. What are CRUD operations?
* **Create:** Insert documents.
* **Read:** Retrieve documents.
* **Update:** Modify documents.
* **Delete:** Remove documents.
* 

### 17. How do you insert a single document?
```javascript
db.students.insertOne({
  name: "Rahul",
  semester: 5
});

```

### 18. How do you insert multiple documents?

```javascript
db.students.insertMany([
  { name: "Rahul", semester: 5 },
  { name: "Aman", semester: 6 }
]);

```

### 19. What is the difference between `find()` and `findOne()`?

* `find()` returns a cursor containing matching documents.
* `findOne()` returns the first matching document or `null`.

### 20. How do you find documents using a condition?

```javascript
db.students.find({
  semester: 5
});

```

### 21. What are comparison operators in MongoDB?

| Operator | Meaning |
| --- | --- |
| `$eq` | Equal |
| `$ne` | Not equal |
| `$gt` | Greater than |
| `$gte` | Greater than or equal |
| `$lt` | Less than |
| `$lte` | Less than or equal |
| `$in` | Matches values in an array |
| `$nin` | Does not match values in an array |

### 22. What are logical operators?

* `$and`: All conditions must match.
* `$or`: At least one condition must match.
* `$not`: Negates a condition.
* `$nor`: None of the conditions should match.

### 23. What is the difference between `$set` and `$unset`?

* `$set` adds or updates a field.
* `$unset` removes a field.

### 24. What is the difference between `$push` and `$addToSet`?

* `$push` adds an element to an array, including duplicates.
* `$addToSet` adds an element only if an equal element is not already present.

### 25. What are `sort()`, `limit()` and `skip()` used for?

* `sort()`: Sort results.
* `limit()`: Restrict the number of results.
* `skip()`: Skip a specified number of results.

Example:

```javascript
db.students.find()
  .sort({ name: 1 })
  .skip(10)
  .limit(10);

```

---
