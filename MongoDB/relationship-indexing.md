
## Part 4: Relationships, indexing and aggregation

*Important after fundamentals*

### 41. What is `populate()` in Mongoose?

`populate()` replaces referenced document IDs with the corresponding documents.

Example:

```javascript
const orderSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  }
});
Order.find().populate("product");

```

### 42. What is the difference between embedding and referencing?

Embedding stores related information within the same document. Referencing stores another document's ID.

### 43. What is an index in MongoDB?

An index is a data structure that helps MongoDB locate documents more efficiently without scanning every document.

### 44. Why do we use indexes?

To improve query performance, particularly for frequently searched, sorted or filtered fields.

### 45. What is a unique index?

An index that prevents duplicate indexed values.

### 46. What is aggregation in MongoDB?

Aggregation processes documents through multiple stages to perform operations such as filtering, grouping, sorting and calculating totals.

### 47. What is an aggregation pipeline?

A sequence of stages where documents pass through transformations.

Common stages:

| Stage | Purpose |
| --- | --- |
| `$match` | Filter documents |
| `$group` | Group documents |
| `$sort` | Sort documents |
| `$project` | Select or reshape fields |
| `$limit` | Limit results |
| `$skip` | Skip results |
| `$count` | Count documents |

### 48. What is the difference between `find()` and `aggregate()`?

* `find()` retrieves documents matching a query.
* `aggregate()` processes documents through pipeline stages for more complex data operations.

---