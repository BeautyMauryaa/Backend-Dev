# **Authentication vs Authorization**

These two concepts are fundamental to backend development and frequently asked in interviews.

## **1. What is Authentication?**

**Interview definition:**

Authentication is the process of verifying the identity of a user or client attempting to access an application.

Simple Hinglish explanation:

Authentication ka matlab hai verify karna ki user actually wahi person hai jo woh claim kar raha hai.

Example:

Suppose a user enters:

```
Email: nova@example.com
Password: mypassword123
```

Your backend:

1. Finds the user using their email.
2. Compares the submitted password with the stored password hash using bcrypt.
3. If credentials are valid, generates a JWT.
4. Returns the token to the client.

The user is now authenticated.

## **2. What is Authorization?**

**Interview definition:**

Authorization is the process of determining whether an authenticated user has permission to access a particular resource or perform a specific action.

Simple Hinglish explanation:

Authorization decide karta hai ki logged-in user ko kya karne ki permission hai.

Example:

Suppose your application has two roles:

- Admin
- User

| Action             | Admin | User |
| ------------------ | ----- | ---- |
| View profile       | Yes   | Yes  |
| Update own profile | Yes   | Yes  |
| View all users     | Yes   | No   |
| Delete users       | Yes   | No   |
| Manage user roles  | Yes   | No   |

Authentication confirms identity. Authorization checks permissions.

## **3. Authentication vs Authorization**

Step 1

**Authentication — Who are you?**

**Verify credentials**

Email + Password → JWT

Step 2

**Authorization — What can you do?**

**Check permissions**

Role + Resource permissions → Allow / Deny

## **4. HTTP status codes you should know**

| Status | Meaning                                |
| ------ | -------------------------------------- |
| 200    | Request successful                     |
| 201    | Resource created                       |
| 400    | Invalid request                        |
| 401    | Unauthenticated or invalid credentials |
| 403    | Authenticated but not authorized       |
| 404    | Resource not found                     |
| 409    | Duplicate resource                     |
| 500    | Internal server error                  |

**Important interview question:** What's the difference between 401 and 403?

- 401: The request lacks valid authentication.
- 403: The server understands who the user is but refuses access due to insufficient permissions.


## **6. Practical scenario**

An e-commerce application has three users:

- Rahul — Admin
- Priya — Customer
- Amit — Customer

Priya logs in successfully and receives a JWT. She then tries to delete Rahul's account through:

```
DELETE /api/users/rahul
```

Answer these questions in your own words:

1. Has Priya passed authentication?
2. Should the backend allow this operation?
3. Which process prevents her from deleting Rahul's account?
4. Which HTTP status should the backend return?
