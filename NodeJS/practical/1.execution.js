// 1. Write a program demonstrating synchronous execution.
console.log("Start");
console.log("Middle");
console.log("End");



// 2. Write a program demonstrating asynchronous execution using setTimeout().
 setTimeout(()=>{
    console.log("hello after 2 sec");
 },2000);


// 3. Demonstrate the execution order of process.nextTick(), Promises and setTimeout().  
console.log("event loop order test");
setTimeout(() => console.log("1. setTimeout (Macrotask)"), 0);
setImmediate(() => console.log("2. setImmediate (Check)"));
Promise.resolve().then(()=>console.log("promise (microtask)"));
process.nextTick(()=>console.log("process.nextTick"));