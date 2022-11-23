
const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

//Integrate static files (CSS, Folder images...) in your server 
app.use(express.static("public"))

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.listen(process.env.PORT || 3000, function(){
    console.log("The server is live on port 3000")
})




