## Topic 6. Event Loop in Node.js

Very important for interviews

### 1. What is the Event Loop?

The Event Loop is a mechanism in Node.js that coordinates the execution of asynchronous callbacks.

It allows Node.js to handle asynchronous operations without blocking the main JavaScript thread.

In simple words:

The Event Loop helps Node.js manage multiple tasks while JavaScript executes on a single main thread.

### 2. How does the Event Loop work?

[Node.js Event Loop Deep Dive: Why Your Async Code Isn’t Actually Parallel | by Bhagya Rana | Medium](https://images.openai.com/static-rsc-4/lZPacQgn2DE8yOXexd1XHS2kvLq6yqRhhj03UuJyrcMUkr4HZMMa3ID1ZtKARAer_QoN2o_SDy7h2XLbIAd2QAoQ-7HSbQ3EpB2fLHdTby9I6gaVGI22-4Ef9JQzxUbyFH-CorMIfKT_a2xcjxpdBWTtj0hZw4lmg51qQEdEOsg?purpose=inline)

[medium.com](https://medium.com/%40bhagyarana80/node-js-event-loop-deep-dive-why-your-async-code-isnt-actually-parallel-f9ee9851e585?utm_source=chatgpt.com)

Understand this flow:

1. JavaScript code executes on the call stack.
2. An asynchronous operation is initiated.
3. The operation is handled by the appropriate runtime mechanism.
4. When the operation completes, its callback becomes eligible for execution.
5. The Event Loop coordinates when callbacks execute.
6. JavaScript executes the callback when the call stack is available.

### 3. Example

```
console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("End");
```

Output:

```
Start
End
Timer
```

Why?

- `console.log("Start")` executes immediately.
- `setTimeout()` schedules a timer callback.
- `console.log("End")` executes immediately.
- The timer callback executes later when the Event Loop reaches the appropriate phase.

### 4. Microtasks vs Macrotasks

This is a common interview question.

Microtasks:

- Promise callbacks (`.then`, `.catch`, `.finally`)
- `queueMicrotask()`

Macrotasks / Task queues:

- `setTimeout()`
- `setInterval()`
- `setImmediate()` (Node.js-specific scheduling)

Node.js also has a special `process.nextTick()` queue, which has priority over regular Promise microtasks in normal Node.js execution.

Example:

```
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

process.nextTick(() => {
    console.log("Next Tick");
});

console.log("End");
```

Expected output:

```
Start
End
Next Tick
Promise
Timeout
```

### 5. Important Interview Questions

1. What is the Event Loop?
2. Why does Node.js need an Event Loop?
3. What is the Call Stack?
4. What are microtasks and macrotasks?

### 1. What is the Call Stack?

Interview Answer:

The Call Stack is a data structure that keeps track of which functions are currently executing in JavaScript. It follows the LIFO (Last In, First Out) principle.

When a function is called, it is pushed onto the stack, and when it finishes, it is removed.

### 2. What is the difference between `process.nextTick()` and `setTimeout()`?

Interview Answer:

Both are used to execute callbacks later, but they work differently.

- `process.nextTick()` executes its callback immediately after the current operation finishes, before the Event Loop continues to its next phase.
- `setTimeout()` executes its callback after the specified delay, during the Timers phase of the Event Loop.

Example:

```
console.log("Start");

process.nextTick(() => {
    console.log("Next Tick");
});

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");
```

Output:

```
Start
End
Next Tick
Timeout
```

### 3. What happens when the Call Stack is busy?

Interview Answer:

When the Call Stack is busy executing a task, JavaScript cannot execute other callbacks until the current task finishes.

As a result, callbacks and Event Loop operations have to wait, which can delay other requests and make the application slow.

### 4. Can synchronous code block the Event Loop?

Interview Answer:

Yes. Synchronous code blocks the Event Loop because it executes on the main thread and must finish before other callbacks can run.

For example, a large calculation or an infinite loop can block the Event Loop and prevent Node.js from handling other requests efficiently.

### 5. What is the role of libuv in the Event Loop?

Interview Answer:

libuv is a library used by Node.js to handle asynchronous operations. It provides the Event Loop, manages asynchronous I/O operations, and maintains a thread pool for certain tasks.

It helps Node.js handle multiple operations efficiently without blocking the main JavaScript thread.

Quick revision for interviews:

| Concept              | Remember                                    |
| -------------------- | ------------------------------------------- |
| Call Stack           | Executes JavaScript functions               |
| `process.nextTick()` | Runs before the Event Loop continues        |
| `setTimeout()`       | Runs in the Timers phase                    |
| Busy Call Stack      | Other callbacks must wait                   |
| Synchronous code     | Can block the Event Loop                    |
| libuv                | Event Loop + asynchronous I/O + thread pool |

