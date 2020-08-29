const express = require("express")
app = express()

app.set("view engine", "ejs")

app.get("/",(req,res)=>{
    res.send("welcome to bosbizz.fr")
})

app.get("/resume/policy",(req,res)=>{
    res.render("resume-app-privacy-policy");
})

app.listen(8080,()=>{
    console.log("Server is running on port 8080")
})
