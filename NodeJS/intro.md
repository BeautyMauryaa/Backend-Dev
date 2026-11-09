This is an important module because Node.js is the runtime we'll use to build our backend applications with Express.js.

We'll focus on understanding how Node.js works internally, writing practical code, and answering interview questions.

# Module 2 – Node.js Fundamentals

Backend Development

Concepts + Coding + Interviews



## Topic 1. What is Node.js?

### 1. Definition

Node.js is an open-source, cross-platform JavaScript runtime environment that allows us to execute JavaScript outside the browser.

In simple words:

Normally, JavaScript runs inside browsers to handle frontend functionality. Node.js allows us to run JavaScript on the server side.

For example:

- Frontend: JavaScript handles button clicks and UI interactions.
- Backend: Node.js executes server-side logic, handles requests and communicates with databases.

[What Is Runtime Environment ?. A runtime environment is a background… | by Ramesh Raveendran | Medium](https://images.openai.com/static-rsc-4/FbT5bYzhGJlkjoflcIOoGAyip5TtE2QKG3FRDWQvYF-diWa6RNTFd20pXugbykm5t16aIZ8JBgq_bwrQrxm1fHB7cnSpOYQyxTF-2U26jbxIY_vLYiceeWjRK3qOa5tbH86aY9-3Tg1Tyq2xKpHT678gq2L48t4_B1Zvywp2dyo?purpose=inline)

[medium.com](https://medium.com/%40rameshraveendranm/what-is-runtime-environment-71917514cd1d?utm_source=chatgpt.com)

### 2. Why do we use Node.js?

1. JavaScript everywhere: We can use JavaScript for both frontend and backend.
2. Non-blocking I/O: It can handle I/O operations asynchronously without blocking the main JavaScript execution thread.
3. Event-driven architecture: It uses events and callbacks to manage asynchronous operations.
4. Large ecosystem: npm provides access to thousands of packages.
5. Good for I/O-heavy applications: Such as APIs, chat applications and real-time services.

### 3. What is Node.js used for?

- REST API development
- Authentication systems
- E-commerce backends
- Real-time chat applications
- Streaming applications
- Backend services
- Microservices

### 4. Practical Example

Create a file called `app.js`.

```
console.log("Hello from Node.js");
```

Run it in your terminal:

```
node app.js
```

Output:

```
Hello from Node.js
```

You've just executed JavaScript outside a browser.

### 5. Interview Questions

Q1. What is Node.js?

Node.js is an open-source, cross-platform JavaScript runtime environment that allows JavaScript to run outside the browser.

Q2. Is Node.js a programming language?

No. JavaScript is the programming language, and Node.js is the runtime environment that executes it.

Q3. Is Node.js a framework?

No. Node.js is a runtime environment. Express.js is a backend web framework built on top of Node.js.

Q4. Why is Node.js popular for backend development?

Because it supports asynchronous, non-blocking I/O, has a large npm ecosystem, and allows developers to use JavaScript on both frontend and backend.

Q5. Is Node.js suitable for CPU-intensive tasks?

Not always. Heavy CPU-intensive JavaScript operations can block the event loop. Worker Threads, separate processes or dedicated services can help handle such workloads.

