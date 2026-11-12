
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
## Node.js – Practical Coding Tasks

Solve these yourself in VS Code using Node.js. These questions cover callbacks, Promises, async/await, Event Loop, non-blocking I/O, and Worker Threads.

No solutions included. Try writing the code and share it for review.

### Level 1: Basic JavaScript execution

1\. Write a program that prints `Start`, `Middle`, and `End` in order.

2\. Use `setTimeout()` to print `Hello` after 2 seconds.

3\. Write a program using `setTimeout()` and normal console statements. Predict the output order.

4\. Use `process.nextTick()`, `Promise.resolve()`, and `setTimeout()` together. Predict the execution order.

### Level 2: Callbacks and Promises

5\. Create a function `getUser()` that accepts a callback and returns user data after 2 seconds.

6\. Create a Promise that resolves with `"Data received"` after 2 seconds.

7\. Create a Promise that rejects with `"Something went wrong"` and handle the error using `.catch()`.

8\. Convert a callback-based function into a Promise-based function.

### Level 3: Async/Await and error handling

9\. Create an async function that fetches user data using `await`.

10\. Use `try...catch` to handle an error from a rejected Promise.

11\. Create a function that fetches two users sequentially using `await`.

12\. Fetch two independent pieces of data concurrently using `Promise.all()`.

### Level 4: File handling and non-blocking I/O

13\. Read a text file using `fs.readFileSync()`.

14\. Read the same file using `fs.readFile()`.

15\. Read a file using `fs.promises.readFile()` and `async/await`.

16\. Handle the error when the requested file does not exist.

### Level 5: Worker Threads

17\. Create a Worker Thread that performs a large calculation without blocking the main thread.

18\. While the Worker Thread is calculating, print `"Main thread is still running"` from the main thread.

19\. Send a value from the main thread to a worker and return the calculated result.

20\. Handle errors and worker completion using Worker Thread events.

### Your priority

| Priority  | Tasks |
| --------- | ----- |
| Must do   | 1–12  |
| Important | 13–16 |
| Advanced  | 17–20 |

Interview challenge: A Node.js API receives 100 requests. One request performs a very large calculation while the remaining 99 requests are waiting. How would you prevent that calculation from blocking the Event Loop?

Solve this after Task 20.

When you finish, send me your code. I'll review correctness, explain mistakes, and give you interview-style follow-up questions.


practice-nodejs/
│
├── 01-basic-execution/
│   ├── 01-sync.js
│   ├── 02-setTimeout.js
│   ├── 03-execution-order.js
│   └── 04-event-loop-order.js
│
├── 02-callbacks-promises/
│   ├── 05-callback.js
│   ├── 06-promise-resolve.js
│   ├── 07-promise-reject.js
│   └── 08-callback-to-promise.js
│
├── 03-async-await/
│   ├── 09-async-await.js
│   ├── 10-error-handling.js
│   ├── 11-sequential-execution.js
│   └── 12-promise-all.js
│
├── 04-file-system/
│   ├── 13-read-sync.js
│   ├── 14-read-async.js
│   ├── 15-read-promise.js
│   ├── 16-file-error.js
│   └── sample.txt
│
├── 05-worker-threads/
│   ├── 17-worker-calculation.js
│   ├── 18-main-thread.js
│   ├── 19-worker-communication.js
│   └── 20-worker-error.js
│
└── README.md
