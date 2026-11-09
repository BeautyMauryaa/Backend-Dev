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
5. What is the difference between `process.nextTick()` and `setTimeout()`?
6. What happens when the Call Stack is busy?
7. Can synchronous code block the Event Loop?
8. What is the role of libuv in the Event Loop?

