## Topic 5. Synchronous vs Asynchronous Programming

These concepts are related to blocking and non-blocking execution, but they are not exactly the same.

### 1. Synchronous Programming

Synchronous code executes sequentially. Each statement waits for the previous statement to finish.

```
console.log("First");

console.log("Second");

console.log("Third");
```

Output:

```
First
Second
Third
```

### 2. Asynchronous Programming

Asynchronous programming allows certain operations to complete later without requiring the main execution flow to wait for them.

Example:

```
console.log("First");

setTimeout(() => {
    console.log("Second");
}, 2000);

console.log("Third");
```

Output:

```
First
Third
Second
```

The timer callback executes after the timer expires and the event loop gets an opportunity to run it.

### 3. Important Difference

| Synchronous                                | Asynchronous                           |
| ------------------------------------------ | -------------------------------------- |
| Sequential execution                       | Allows deferred completion             |
| Current execution waits for each statement | Other work can continue                |
| Simpler execution flow                     | Requires handling completion           |
| Can block execution                        | Often used for non-blocking operations |

Interview trap: Asynchronous and non-blocking are related but not interchangeable terms. Asynchronous describes how completion is handled; blocking describes whether the current thread must wait.

### 4. Practical Backend Example

Imagine your backend needs to fetch user data from MongoDB.

Synchronous-style waiting is not appropriate for normal database operations in Node.js.

Instead, we use asynchronous programming:

```
async function getUser() {
    const user = await User.findById("101");

    console.log(user);
}

getUser();
```

Here:

- `async` declares an asynchronous function.
- `await` waits for the Promise inside that function to settle.
- It does not block the entire Node.js main thread.

