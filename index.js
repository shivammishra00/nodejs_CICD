const express = require('express');

const app = express();
app.use(express.json())

app.get("/api/get", (req,res)=>{
    return res.json({Message: "CI/Cd integration"})
})

app.get("/api/get/user", (req,res)=>{
    return res.json({name: "Shivam", email: "shivam@gmail.com", role: "admin"})
})

app.listen(5000, ()=>{
    console.log("server is running on port 5000")
})






