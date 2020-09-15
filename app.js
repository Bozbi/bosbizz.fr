const express = require("express")
const ejs = require("ejs")

const app = express()

const port = 8080


app.set("view engine", "ejs")
app.use("/public",express.static(__dirname + "/public"))
app.set('views','./views')

app.get("/",(req,res)=>{
    res.redirect("/public/pdfs/cv.pdf")
})

app.get("/resume/privacy",(req,res)=>{
    res.render("resume-app-privacy-policy");
})

app.get("/download/awesome_flow",(req,res)=>{
    res.download(__dirname+'/public/apks/awesome_flow.apk')
})

app.listen(port,'localhost',()=>{
    console.log("Server is running on port 8080")
})
