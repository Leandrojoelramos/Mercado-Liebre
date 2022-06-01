const express= require('express');
const app= express();
const path=require("path");
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))

const directory=path.join(__dirname,"/public");

app.listen(process.env.PORT || 3030,()=>{
    console.log("its a live")
});


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"))
})

app.get("/Login",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"))
})
app.get("/CrearCuenta",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/registro.html"))
})

app.post('/datos', (req,res) =>{
    res.send(req.body)
})

