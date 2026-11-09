## Topic 3. Single-Threaded vs Multithreading in Node.js

### 1. What is a Thread?

A thread is the smallest unit of execution within a process.

A process can contain one or multiple threads.

For example, when you run a Node.js application, it runs as a process with a main JavaScript thread and can use additional background threads for certain tasks.

### 2. What does Single-Threaded mean?

Single-threaded means JavaScript code is executed on one main thread.

Node.js executes JavaScript using its main thread, rather than creating a new JavaScript thread for every request.

### 3. What is Multithreading?

Multithreading means multiple threads execute tasks within the same process, allowing work to happen concurrently.

Node.js supports multithreading through mechanisms such as Worker Threads.

[Single vs Multithreading Explained for Beginners | Medium](https://images.openai.com/static-rsc-4/n0xArQ2hhjpHueRFF9zYSXDnL7GKX77Y6MzD6LSPaLTZuWeF-83TM0szYX7LBenFnt62bYEuSF1GIq6HKHe7tzJRezpJ3DRSUASM2basI1NReHM01f6PdJcWHT3yeTe0MsXoj1fbXhN8Im3wWYyJLqfBcj54-pvEQPnMdiomoDU?purpose=inline)

[medium.com](https://medium.com/%40sweetondonie/single-thread-vs-multi-thread-a-beginners-guide-becc77c66a0c?utm_source=chatgpt.com)

### 4. Is Node.js single-threaded or multithreaded?

Interview answer:

Node.js uses a single main JavaScript thread for executing JavaScript code. However, it uses libuv's thread pool, operating-system asynchronous I/O and Worker Threads to perform certain operations concurrently.

This distinction is important.

### 5. Practical Example

Consider two operations:

- Reading a file.
- Performing a heavy calculation.

File reading can be handled asynchronously without blocking the main JavaScript thread.

But a large synchronous calculation can block the main thread and delay other requests.

```
const fs = require("fs");

console.log("Start");

fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(data);
});

console.log("End");
```

Expected output:

```
Start
End
(file contents)
```

Why?

Because `fs.readFile()` performs asynchronous file reading. JavaScript continues executing without waiting for the file operation to finish.

### Interview Questions

1. What is a thread?
2. What is the difference between single-threaded and multithreaded execution?
3. Is Node.js single-threaded?
4. How does Node.js handle multiple requests?
5. What are Worker Threads?
6. When would you use Worker Threads?

