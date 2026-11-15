const express=require("express");
const app=express();


//middleware to parse json request bodies
app.use(express.json());

// GET: Fetch all students
app.get("/students",(req,res)=>{
    res.status(200).json({
        message:"Student fetched successfully"
    });
});

// GET: Fetch one student
app.get("/students/:id",(req,res)=>{
    const studentId=req.params.id;

    res.status(200).json({
        message:"Student fetched",
        id:studentId
    });
});


// POST: Create student
app.post("/students",(req,res)=>{
    const student=req.body;

    res.status(201).json({
        message:"student created",
        data:student
    });
});

// PUT: Replace student
app.put("/student/:id",(req,res)=>{
    res.status(200).json({
        message:"Student replaced",
        id:req.params.id,
        data:req.body
    });
});

// PATCH: Partially update student
app.patch("/student/:id",(req,res)=>{
    res.status(200).json({
        message:"student updated",
        id:req.params.id,
        updates:req.body
    });
});

// DELETE: Delete student
app.delete("/students/:id",(req,res)=>{
    res.status(200).json({
        message:"student deleted",
        id:req.params.id
    });
});


app.listen(3000,()=>{
    console.log('server running on port 3000');
});
