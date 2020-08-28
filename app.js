const express = require("express")
app = express();

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("resume-app-privacy-policy");
});

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});
