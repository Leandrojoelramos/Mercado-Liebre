const express = require('express');
const app = express();
const path = require('path');
const port=process.env.PORT || 8080
const directory=path.join(__dirname,"./../public")

app.listen(port,()=>{
    console.log("¡esta vivo!")
})

app.use(express.static(directory))



app.get("/",function(req, res){
    res.sendFile(path.join(__dirname,"./views/home.html"));
})
app.get("/login",function(req, res){
    res.sendFile(path.join(__dirname,"./views/login.html"));
})
app.get("/register",function(req, res){
    res.sendFile(path.join(__dirname,"./views/registro.html"));
})