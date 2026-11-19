## Part 1: MongoDB fundamentals

*Must know*

### 1. What is MongoDB?
MongoDB is a NoSQL, document-oriented database that stores data in BSON documents instead of traditional rows and columns.

### 2. What is a NoSQL database?
A NoSQL database is a non-relational database designed to store and manage data using models such as documents, key-value pairs, graphs or wide-column structures.

### 3. What is the difference between SQL and MongoDB?

| SQL database | MongoDB |
| :--- | :--- |
| Tables | Collections |
| Rows | Documents |
| Columns | Fields |
| Fixed schema commonly | Flexible document structure |
| SQL queries | MongoDB query language |

### 4. What is a document in MongoDB?
A document is an individual record stored as BSON, containing field-value pairs.

### 5. What is a collection?
A collection is a group of MongoDB documents, similar to a table in a relational database.

### 6. What is BSON?
BSON stands for Binary JSON. MongoDB uses it internally to store documents and support additional data types.

### 7. Does MongoDB have a schema?
MongoDB supports flexible schemas, but you can enforce document structure and validation using MongoDB schema validation or Mongoose schemas.

### 8. What is `_id` in MongoDB?
`_id` is the unique identifier of a document. MongoDB automatically generates an ObjectId if you do not provide one.

### 9. What is ObjectId?
ObjectId is a BSON data type commonly used as MongoDB's document identifier.

### 10. What is the difference between MongoDB and Mongoose?
* **MongoDB:** Database that stores documents.
* **Mongoose:** Node.js ODM library that provides schemas, models, validation and convenient database operations.

### 11. What is a flexible schema?
Documents in the same collection can have different fields or field structures unless validation rules restrict them.

### 12. What are the advantages of MongoDB?
* Flexible document structure.
* Suitable for nested and hierarchical data.
* Horizontal scaling through sharding.
* Supports indexing and aggregation.
* Integrates well with Node.js applications.

### 13. What are the disadvantages of MongoDB?
* Poorly designed document structures can cause duplication.
* Complex relational queries can require more planning.
* Large documents and inefficient queries can affect performance.

### 14. What is the difference between embedded documents and referenced documents?
* **Embedded:** Store related data inside the same document.
* **Referenced:** Store another document's ID and retrieve related data separately when needed.

### 15. When would you choose MongoDB?
When the application benefits from flexible document structures, nested data, or a document-oriented data model.

---
