

# **Module 3 — Topic 5: Route Parameters vs Query Parameters**

Both are used to pass data through URLs, but their purposes are different.

## **1. Route Parameters (**`req.params`**)**

**Definition — Interview ready:**

Route parameters are named URL segments used to capture dynamic values from a specific route path.

Example:

```
GET /users/101
```

Express route:

```
app.get("/users/:id", (req, res) => {
    const userId = req.params.id;

    res.json({
        userId: userId
    });
});
```

Response:

```
{
  "userId": "101"
}
```

Here:

- `:id` is a dynamic route parameter.
- `req.params.id` accesses its value.
- `101` is the actual value supplied by the client.

**Multiple route parameters:**

```
GET /users/101/orders/5001
```

```
app.get("/users/:userId/orders/:orderId", (req, res) => {
    res.json({
        userId: req.params.userId,
        orderId: req.params.orderId
    });
});
```

Response:

```
{
  "userId": "101",
  "orderId": "5001"
}
```

**When do we use route parameters?**

- Fetching a specific user.
- Fetching a particular product.
- Updating a specific order.
- Deleting a particular record.

Think of route parameters as identifying the resource or a specific part of the resource hierarchy.

## **2. Query Parameters (**`req.query`**)**

**Definition — Interview ready:**

Query parameters are key-value pairs appended to a URL after the `?` symbol. They are commonly used for filtering, searching, sorting, and pagination.

Example:

```
GET /products?category=electronics
```

Express route:

```
app.get("/products", (req, res) => {
    const category = req.query.category;

    res.json({
        category: category
    });
});
```

Response:

```
{
  "category": "electronics"
}
```

**Multiple query parameters:**

```
GET /products?category=electronics&sort=price&page=2
```

```
app.get("/products", (req, res) => {
    res.json({
        category: req.query.category,
        sort: req.query.sort,
        page: req.query.page
    });
});
```

Response:

```
{
  "category": "electronics",
  "sort": "price",
  "page": "2"
}
```

Notice that query parameter values are generally strings. Convert and validate them before using them as numbers.

**When do we use query parameters?**

- Filtering products by category.
- Searching users by name.
- Sorting products by price.
- Pagination using page and limit.
- Filtering orders by status.

## **3. Route Parameters vs Query Parameters**

Route parameters

**Identify a specific resource**

# **/users/101**

Access using `req.params.id`

Query parameters

**Filter or modify how resources are retrieved**

# **/users?role=admin**

Access using `req.query.role`

| Comparison      | Route parameters                      | Query parameters         |
| --------------- | ------------------------------------- | ------------------------ |
| Location        | URL path                              | After `?`                |
| Syntax          | `/users/:id`                          | `/users?id=101`          |
| Access          | `req.params`                          | `req.query`              |
| Common purpose  | Identify resource                     | Filter, search, sort     |
| Required?       | Usually required by the route pattern | Usually optional         |
| Multiple values | Multiple named path segments          | Multiple key-value pairs |

## **4. Real-world backend scenarios**

Imagine you are developing an e-commerce application.

**Scenario A: Fetch one product**

```
GET /products/501
```

Use `req.params.id` because you want a particular product.

**Scenario B: Filter products**

```
GET /products?category=shoes
```

Use `req.query.category` because you want products matching a category.

**Scenario C: Pagination**

```
GET /products?page=2&limit=10
```

Use `req.query` because the client wants a particular page of results.

**Scenario D: Fetch a user's particular order**

```
GET /users/101/orders/5001
```

Use both route parameters to identify the user and order.

## **5. Can we use both together?**

Yes. This is very common in real backend applications.

```
app.get("/users/:userId/orders", (req, res) => {
    const userId = req.params.userId;
    const status = req.query.status;
    const page = Number(req.query.page) || 1;

    res.json({
        userId,
        status,
        page
    });
});
```

Request:

```
GET /users/101/orders?status=delivered&page=2
```

Response:

```
{
  "userId": "101",
  "status": "delivered",
  "page": 2
}
```

Interpretation:

- `101` identifies the user.
- `delivered` filters their orders.
- `2` specifies the requested page.

This is a realistic backend API design pattern.

## **6. Common interview traps**

**Q1. Is&#x20;**`/users?id=101`**&#x20;a route parameter?**

No. It is a query parameter because it appears after `?`.

**Q2. Can query parameters be optional?**

Yes. For example, `/products` can return all products, while `/products?category=shoes` filters them.

**Q3. Can route parameters contain multiple values?**

Yes. For example, `/users/:userId/orders/:orderId`.

**Q4. Are route and query parameter values automatically numbers?**

No. They are generally strings. Validate and convert them when necessary.

**Q5. Should sensitive information such as passwords be passed in query parameters?**

No. URLs can appear in browser history, server logs, and other places. Use an appropriate request body or secure authentication mechanism instead.



## **8. Practical coding challenge**

Create an endpoint:

```
GET /students/:studentId/results?semester=5&subject=java
```

Your task:

1. Extract `studentId` using `req.params`.
2. Extract `semester` using `req.query`.
3. Extract `subject` using `req.query`.
4. Return all three values using `res.json()`.
5. Convert semester into a number.

Expected response:

```
{
  "studentId": "101",
  "semester": 5,
  "subject": "java"
}
``