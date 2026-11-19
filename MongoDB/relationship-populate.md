
### **1. What are relationships in MongoDB?**

Suppose we have two collections:

**Users collection**

```
{
  _id: ObjectId("..."),
  name: "Rahul",
  email: "rahul@gmail.com"
}
```

**Orders collection**

```
{
  _id: ObjectId("..."),
  product: "Laptop",
  price: 50000,
  user: ObjectId("...")
}
```

The `user` field in the Order document stores the ID of the user who placed that order.

This is called a **referenced relationship**.

### **2. How to define a reference in Mongoose**

In your Order model:

```
const orderSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});
```

Important:

- `ObjectId` stores the referenced document's ID.
- `ref: "User"` tells Mongoose which model to use when populating that reference.

### **3. What is&#x20;**`populate()`**?**

Normally, fetching an order gives you the user ID.

```
const order = await Order.findById(orderId);
```

But sometimes you need the user's name and email too.

Use:

```
const order = await Order.findById(orderId)
  .populate("user");
```

Now Mongoose replaces the referenced ID with the matching User document.

You can also select specific fields:

```
const order = await Order.findById(orderId)
  .populate("user", "name email");
```

This avoids returning unnecessary user fields.

### **4. Reverse relationship: One user, multiple orders**

A user can have multiple orders.

You can fetch all orders belonging to a user:

```
const orders = await Order.find({
  user: userId
}).populate("user", "name email");
```

You can also populate multiple references in a query:

```
const orders = await Order.find()
  .populate("user", "name email")
  .populate("product", "name price");
```

This requires the corresponding references to be defined in the schema.

### **5. Important interview points**

- `populate()` works with references defined using `ref`.
- It retrieves related documents using their IDs.
- It does not permanently replace the stored reference in MongoDB.
- If a referenced document does not exist, a single populated reference generally becomes `null`.
- `populate()` is useful for reading related data, but excessive population can affect performance.

## **Practical coding challenge**

Your turn — no solution

Build this endpoint:

`GET /orders/:orderId`

Your requirements:

1. Find an order using its MongoDB ID.
2. Populate its associated user.
3. Return only the user's `name` and `email`.
4. Return HTTP 400 for an invalid ObjectId.
5. Return HTTP 404 if the order does not exist.
6. Return HTTP 200 with the populated order if found.
7. Handle unexpected database errors.

**Test with Postman:**

| Test                     | Expected status |
| ------------------------ | --------------- |
| Valid order ID           | 200             |
| Invalid ID format        | 400             |
| Valid but nonexistent ID | 404             |
| Database error           | 500             |

## **Interview MCQs**

In an Order schema, what does ref: "User" specify when used with an ObjectId field?

1 of 5

AThe MongoDB database name

BThe referenced Mongoose model

CThe collection's validation rules

DThe field's default ObjectId

Next

Give feedback

**After you complete this:** We'll cover indexing and unique indexes, then aggregation, and finally the complete MongoDB CRUD API.