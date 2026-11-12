const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("welcome");
});

app.get("/users",(req,res)=>{
    res.send("All Users");
});

app.get("/products",(req,res)=>{
    res.send("All Products");
});

const port=3000;
app.listen(port,()=>{
    console.log(`server running on ${port}`);
})