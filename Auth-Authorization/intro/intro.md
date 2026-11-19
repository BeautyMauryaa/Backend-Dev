# **Backend — Next Module: Authentication & Authorization**

## **Step 1 — Authentication vs Authorization**

Dono concepts alag hain.

| Authentication                 | Authorization                    |
| ------------------------------ | -------------------------------- |
| Who are you?                   | What can you access?             |
| User identity verify karta hai | User permissions check karta hai |
| Login                          | Admin-only access                |

**Example:**

- User email/password se login karta hai → Authentication.
- Admin dashboard access kar sakta hai, normal user nahi → Authorization.

## **Step 2 — Password Hashing with bcrypt**

Database mein user ka original password kabhi store nahi karna chahiye.

Suppose user registers with:

```
Password: Nova@123
```

Database mein password ka hashed version store hoga, original password nahi.

### **What is bcrypt?**

**Interview definition:** bcrypt is a password-hashing function used to securely hash passwords before storing them in a database.

Install:

```
npm install bcryptjs
```

### **Hash a password**

```
const bcrypt = require("bcryptjs");

const password = "Nova@123";

const hashedPassword = await bcrypt.hash(password, 10);
```

Here:

- `password` is the original password.
- `10` is the salt-rounds (cost factor).
- `hashedPassword` is stored in MongoDB.

### **Compare passwords during login**

```
const isMatch = await bcrypt.compare(
  enteredPassword,
  user.password
);
```

- `true` → Password matches.
- `false` → Password doesn't match.

**Important interview point:** Hashing is one-way. You don't decrypt a bcrypt hash to recover the original password.

## **Step 3 — What is JWT?**

**JWT = JSON Web Token**

**Interview definition:** JWT is a compact, URL-safe token format used to securely transmit claims between parties. In backend applications, it is commonly used to authenticate users after login.

Simple workflow:

**1. User logs in**

Email + Password

**2. Backend verifies password**

bcrypt.compare()

**3. Backend generates JWT**

jwt.sign()

**4. Client receives token**

Stores and sends token with future requests

**5. Backend verifies token**

jwt.verify() → Allow or reject request

### **Step 4 — Install JWT**

```
npm install jsonwebtoken
```

### **Step 5 — Generate a JWT**

```
const jwt = require("jsonwebtoken");

const token = jwt.sign(
  { userId: user._id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
);
```

Understand the three arguments:

| Argument   | Purpose                       |
| ---------- | ----------------------------- |
| Payload    | Information stored in token   |
| Secret key | Signs the token               |
| Options    | Expiration and other settings |

Example `.env`:

```
JWT_SECRET=your_long_random_secret
JWT_EXPIRES_IN=1d
```

Never expose your JWT secret in frontend code or GitHub.

### **Step 6 — Verify JWT**

```
const decoded = jwt.verify(
  token,
  process.env.JWT_SECRET
);
```

If the token is valid, it returns the decoded payload.

If expired or invalid, it throws an error.

### **Step 7 — Authentication Middleware**

This middleware checks whether a request contains a valid token.

```
const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Not authorized",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;
    next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
```

Example protected route:

```
router.get("/profile", protect, getProfile);
```

Client sends this header:

```
Authorization: Bearer <your_token>
```

**Important interview points:**

- `jwt.sign()` creates a token.
- `jwt.verify()` validates a token.
- `jwt.decode()` only decodes; it does not verify the signature.
- JWT payload is encoded, not encrypted. Never store passwords or sensitive secrets in it.
- `401 Unauthorized` means authentication is missing or invalid.
- `403 Forbidden` means the authenticated user lacks permission.

## **Step 8 — Practical assignment**

Build a separate authentication module in your Student Management API.

Create:

```
models/
  User.js

controllers/
  authController.js

routes/
  authRoutes.js

middleware/
  authMiddleware.js
```

Implement these endpoints:

| Method | Endpoint             | Requirement                    |
| ------ | -------------------- | ------------------------------ |
| POST   | `/api/auth/register` | Register with hashed password  |
| POST   | `/api/auth/login`    | Verify password and return JWT |
| GET    | `/api/auth/profile`  | Protected profile endpoint     |

Do not store plain-text passwords.

