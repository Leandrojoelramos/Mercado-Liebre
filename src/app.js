const express = require('express');
const app = express();
const path = require('path');

const public = path.join(__dirname, './public');
app.use(express.static(public))

app.get("/",function(req, res){
    res.sendFile(path.join(__dirname,"./views/home.html"));
})
app.get("/login",function(req, res){
    res.sendFile(path.join(__dirname,"./views/login.html"));
})
app.get("/register",function(req, res){
    res.sendFile(path.join(__dirname,"./views/registro.html"));
})


app.listen(process.env.PORT || 3000,()=>{
    console.log('¡¡ esta vivo en el servidor 3000 !!');
}) 

