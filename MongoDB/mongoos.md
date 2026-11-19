

## Part 3: Mongoose interview questions

*Very important for MERN/backend roles*

### 26. What is Mongoose?

Mongoose is an ODM (Object Data Modeling) library that allows Node.js applications to interact with MongoDB using schemas and models.

### 27. What is a Mongoose Schema?

A schema defines the structure, field types, validation rules and other configuration for documents.

```javascript
const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  semester: Number
});

```

### 28. What is a Mongoose Model?

A model is a compiled schema that provides an interface to perform database operations.

```javascript
const Student = mongoose.model("Student", studentSchema);

```

### 29. What is the difference between Schema and Model?

* **Schema** defines document structure and rules.
* **Model** performs database operations using that schema.

### 30. How do you connect MongoDB using Mongoose?

```javascript
await mongoose.connect(process.env.MONGO_URI);

```

### 31. What is `required: true`?

It makes a field mandatory during document validation.

### 32. What is `unique: true`?

It declares a unique index on a field so duplicate indexed values cannot be stored. It is not a Mongoose validator.

### 33. What is `default` in Mongoose?

It defines the default value when a field is not provided.

```javascript
status: {
  type: String,
  default: "active"
}

```

### 34. What is `timestamps: true`?

It automatically adds:

* `createdAt`
* `updatedAt`

### 35. What is the difference between `create()` and `save()`?

* `create()` creates and saves a document in one operation.
* `save()` persists a document instance, usually after creating or modifying it.

### 36. What is the difference between `find()`, `findOne()` and `findById()`?

| Method | Purpose |
| --- | --- |
| `find()` | Finds multiple documents |
| `findOne()` | Finds the first matching document |
| `findById()` | Finds a document by `_id` |

### 37. What does `findByIdAndUpdate()` do?

Finds a document by ID and updates it.

```javascript
Student.findByIdAndUpdate(
  id,
  { semester: 6 },
  { new: true, runValidators: true }
);

```

### 38. What does `{ new: true }` do?

Returns the updated document instead of the original document.

### 39. What does `runValidators: true` do?

Enables Mongoose validators during supported update operations.

### 40. What is the difference between `deleteOne()` and `findByIdAndDelete()`?

* `deleteOne()` deletes the first document matching a filter.
* `findByIdAndDelete()` deletes a document using its ID and returns the deleted document.

---
