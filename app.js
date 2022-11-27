
const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const app = express()

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))

//Integrate static files (CSS, Folder images...) in your server 
app.use(express.static("public"))

app.get("/", function(req,res){
    res.render("index")
})

app.get("/cv", function(req, res){
    res.render("cv")
})

app.listen(process.env.PORT || 3000, function(){
    console.log("The server is live on port 3000")
})

app.get("/5am-vlog", function(req, res){
    res.render("5am.ejs")
})



