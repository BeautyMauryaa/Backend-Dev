### 5. Real-World Backend Scenario

Suppose a user logs into your application.

Your backend needs to:

1. Find the user in MongoDB.
2. Verify their password.
3. Generate a JWT token.
4. Return the response.

These operations may involve asynchronous functions.

A simplified example:

```
async function login(email, password) {
    try {
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error("User not found");
        }

        const isValid = await bcrypt.compare(
            password,
            user.password
        );

        if (!isValid) {
            throw new Error("Invalid credentials");
        }

        const token = generateToken(user);

        return token;

    } catch (error) {
        throw error;
    }
}
```

This is the type of asynchronous programming you'll use regularly in backend development.

Practical coding tasks
Solve these yourself in Node.js. Don't just memorize the output.
1. Write a program demonstrating synchronous execution.
2. Write a program demonstrating asynchronous execution using setTimeout().
3. Demonstrate the execution order of process.nextTick(), Promises and setTimeout().
4. Create a Promise that resolves after 2 seconds.
5. Create a Promise that rejects and handle the error.
6. Convert a callback-based function into a Promise-based function.
7. Write an async function using await and try/catch.
8. Read a file using both synchronous and asynchronous filesystem methods.