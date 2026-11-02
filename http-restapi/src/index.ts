import express from "express"
const app=express()

app.use(express.json());
app.listen(3000,()=>{
    console.log('server running on port 3000');
})


//get route
app.get("/tasks", (req,res)=>{
    res.json({
        message:"All tasks"
    });
});


//post route:
const tasks: string[]=[];
app.post("/tasks",(req,res)=>{
    const task=req.body.title;
    tasks.push(task);
    res.status(201).json({
        message:"Task created",
        data:tasks
    });
});

