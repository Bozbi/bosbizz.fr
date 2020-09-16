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

app.get("/download/resume",(req,res)=>{
    res.download(__dirname+'/public/apks/resume.apk')
})

app.get("/download/real_estate_manager",(req,res)=>{
    res.download(__dirname+'/public/apks/real_estate_manager.apk')
})

app.get("/download/go_4_lunch",(req,res)=>{
    res.download(__dirname+'/public/apks/go_4_lunch.apk')
})

app.get("/download/oc_pizza",(req,res)=>{
    res.download(__dirname+'/public/docs/oc_pizza_documentation.zip')
})


app.listen(port,'localhost',()=>{
    console.log("Server is running on port 8080")
})
