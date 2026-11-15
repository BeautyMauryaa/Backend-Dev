const express=require("express");
const app=express();
app.use=express.json();

app.post("/login",(req,res)=>{
    const{email,password}=req.body;
    if(!email||!password){
        return res.status(400).json({
            success:false,
            message:"Email and pass are required"
        });
    }

    return res.status(200).json({
        success:true,
        message:"Login request received"
    });
});


const port=3000;
app.listen(port,()=>{
    console.log(`server running on ${port}`);
})

// Understand the execution:

// -Client sends email and password.
// -Express parses the JSON body.
// -req.body provides the submitted credentials.
// -Backend validates whether required fields exist.
// -res.status(400) sends a bad-request response if data is missing.
// -Otherwise, res.status(200).json() sends a success response.