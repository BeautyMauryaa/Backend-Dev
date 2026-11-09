## Topic 7. Callbacks, Promises and Async/Await

These three concepts are essential for practical Node.js development.

### 1. What is a Callback?

A callback is a function passed as an argument to another function, which can be executed later.

Example:

```
function getUser(callback) {
    setTimeout(() => {
        callback("Rahul");
    }, 1000);
}

getUser((name) => {
    console.log(name);
});
```

Output:

```
Rahul
```

Interview question: What is Callback Hell?

Callback Hell occurs when multiple nested callbacks make code difficult to read, maintain and debug.

### 2. What is a Promise?

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

A Promise has three states:

| State     | Meaning                          |
| --------- | -------------------------------- |
| Pending   | Operation is in progress         |
| Fulfilled | Operation completed successfully |
| Rejected  | Operation failed                 |

Example:

```
const getUser = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("User found");
    } else {
        reject("User not found");
    }
});

getUser
    .then(result => console.log(result))
    .catch(error => console.log(error));
```

### 3. What is Async/Await?

Async/Await is syntax built on Promises that makes asynchronous code easier to read and write.

Example:

```
async function getUser() {
    try {
        const result = await getUserData();

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
```

### 4. Callback vs Promise vs Async/Await

| Feature        | Callback                        | Promise         | Async/Await          |
| -------------- | ------------------------------- | --------------- | -------------------- |
| Structure      | Function                        | Promise object  | Promise-based syntax |
| Error handling | Error-first callback convention | `.catch()`      | `try/catch`          |
| Readability    | Can become nested               | Better chaining | Usually cleaner      |
| Modern usage   | Still common in APIs            | Common          | Common               |

