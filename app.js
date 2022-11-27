
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

app.get("/vlog", function(req, res){
    res.render("5am.ejs")
})

app.get("/vlog/:days", function(req, res){
    const day = req.params.days
    res.render("vlogdays", {day:day})
})

app.listen(process.env.PORT || 3000, function(){
    console.log("The server is live on port 3000")
})



