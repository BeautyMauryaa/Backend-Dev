## Topic 4. Blocking vs Non-Blocking I/O

This is extremely important for Node.js backend interviews.

### 1. Blocking I/O

A blocking operation prevents the main JavaScript thread from continuing until the operation finishes.

Example:

```
const fs = require("fs");

console.log("Start");

const data = fs.readFileSync("data.txt", "utf8");

console.log(data);

console.log("End");
```

Execution:

```
Start
File reading
End
```

The next statement waits until file reading finishes.

### 2. Non-Blocking I/O

A non-blocking operation allows JavaScript to continue executing while the I/O operation is in progress.

Example:

```
const fs = require("fs");

console.log("Start");

fs.readFile("data.txt", "utf8", (err, data) => {
    console.log(data);
});

console.log("End");
```

Execution:

```
Start
End
File reading
```

The file reading operation doesn't block the main JavaScript thread.

[Deep Dive into the Event Loop: Understanding Node.js Internals | by Smit Patel | Medium](https://images.openai.com/static-rsc-4/ORiKaBeB-y4mAK1GVCuN5P6Uo2dgx0srs1bU579cx3Q88M3ORSCbGWpreqUpCacSYKUHek1Zm7lxjeVFdEanJn-OBRMo5sNjXfzkjYOOlzR7K2KY9Fmy7HODZsMh_zpBSBWrZ4ASbZPXkn3NuGxfo5DVVRrM2046IfCLwAEGIL4?purpose=inline)

[smit90.medium.com](https://smit90.medium.com/deep-dive-into-the-event-loop-understanding-node-js-internals-f9263ef91233?utm_source=chatgpt.com)

### 3. Why is non-blocking I/O important?

Imagine your backend receives 100 requests.

If one request performs a slow synchronous file operation, the main JavaScript thread cannot process other JavaScript callbacks during that time.

With asynchronous I/O, the main thread can continue processing other work while the I/O operation is pending.

Important: Non-blocking does not mean the operation finishes instantly. It means the calling thread doesn't have to wait for its completion.

### 4. Interview Questions

Q1. What is blocking I/O?

Blocking I/O prevents the executing thread from continuing until the operation completes.

Q2. What is non-blocking I/O?

Non-blocking I/O allows the executing thread to continue performing other work while an I/O operation is in progress.

Q3. Which is preferred in Node.js backend development?

Non-blocking I/O is generally preferred for I/O-heavy backend applications because it helps maintain responsiveness and handle concurrent requests efficiently.

Q4. What happens if you use readFileSync in a production API?

It blocks the main JavaScript thread while reading the file, potentially delaying other requests and reducing application responsiveness.

