// Create an Express application with:

// 1. A logging middleware that prints the HTTP method and URL.
// 2. An authentication middleware that checks whether an `Authorization` header exists.
// 3. A protected `GET /dashboard` route.
// 4. If the header is missing, return `401`.
// 5. If the header exists, allow the request to reach the route.
// 6. Register the middleware in the correct order.

// Test both cases using Postman:

// - Without Authorization header.
// - With Authorization header.
// Don't implement actual JWT verification yet; we'll cover that in authentication.


const express=require("express");
const app=express();
app.use(express.json());

//logging miggleware
const loggerMiddleware=(req,res,next)=>{
    console.log(`[${req.method}] ${req.url}`);
    next();
}

app.use(loggerMiddleware);

//authentication middleware
const authMiddleware=(req,res,next)=>{
    const authheader=req.headers["authorization"];

    if(!authheader){
        return res.status(401).json({
            error:"unauthorization: missing authorization header"
        });
    }
    next();
};


app.get("/dashboard",authMiddleware,(req,res)=>{
    res.status(200).json({
        message:"Access granted! welcome to your dashboard."
    });
});

const port=3000;
app.listen(port,()=>{
    console.log("server running");
});