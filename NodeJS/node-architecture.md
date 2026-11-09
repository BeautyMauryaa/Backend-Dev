## Topic 2. Node.js Architecture

This is one of the most important Node.js interview topics.

### 1. How does Node.js work internally?

Node.js uses an event-driven, non-blocking I/O architecture.

Its major components include:

1. V8 JavaScript Engine
2. Event Loop
3. Node.js APIs
4. libuv
5. Thread Pool

[Node.js v8 Architecture: Key Features, Components, and Benefits | Sparkle Web](https://images.openai.com/static-rsc-4/VfZxIXdAlnU6tLyYX0FOv3CzVP7CdPxmtwI4bMYRYeD5XMzqYevq86jAUU7U_O4EgWwluHQ9Kid2eOYV6kL1KDCdfyzVFYjLfp4G49AUULb7cEA_M5kid0GzK0QoQoc-OCiZdxy9WLvSX4UpppfAXvAQm2IqSLcq_0EKrarYh5w?purpose=inline)

[sparkleweb.in](https://www.sparkleweb.in/blog/a_detailed_guide_to_node.js_v8%28javascript_engine%29_architecture_and_features?utm_source=chatgpt.com)

Let's understand each component.

V8 Engine

V8 is Google's open-source JavaScript engine. It compiles and executes JavaScript code.

Node.js uses V8 to execute JavaScript.

libuv

libuv is a library used by Node.js to provide asynchronous I/O capabilities, event-loop functionality and a thread pool.

Event Loop

The event loop coordinates the execution of callbacks for asynchronous operations. We'll study it in detail shortly.

Thread Pool

libuv maintains a worker thread pool for certain operations, such as filesystem operations and some cryptographic operations.

Node.js APIs

Node.js provides built-in modules such as:

- `fs` – File system operations.
- `http` – HTTP server functionality.
- `path` – File and directory path utilities.
- `crypto` – Cryptographic functionality.

### 2. Important Interview Questions

Q1. What is the V8 engine?

V8 is Google's JavaScript engine that compiles and executes JavaScript code. Node.js uses it to run JavaScript outside the browser.

Q2. What is libuv?

libuv is a library that provides Node.js with event-loop functionality, asynchronous I/O support and a worker thread pool.

Q3. Is Node.js single-threaded?

JavaScript execution in a typical Node.js application runs on a main thread. However, Node.js also uses background threads and operating-system facilities to handle certain operations.

Q4. Does Node.js create a new thread for every request?

No. Node.js generally uses an event-driven architecture rather than creating a dedicated thread for each incoming request.

