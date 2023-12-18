
//make the usuall sitting such as require express 
const express = require('express');
const app = express()
const path = require("path")
//const tempelatePath=path.join(__dirname,'../templates')


// app.use to make file navigation easy for all files css, html and js
app.use(express.static('./src'))
app.use(express.static('./public'))
app.use(express.static('./templates'))

//get the main page and all other pages using get method
app.get('/',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./templates/blogg2.html'))
})

app.get("/aboutme",(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./templates/about me2.html'))
})

app.get("/contactus",(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./templates/contact use2.html'))
})

app.get("/send",(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./templates/send2.html'))
})

app.post("/send/thanks",(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./templates/thanks.html'))
})

app.get("/game",(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./templates/game.html'))
})

app.get("/chat",(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./templates/socket/index.html'))
})


//define the server location on the local host
app.listen(6500,()=>{
    console.log("connected to 6500 .  .")
})


//sendFile(path.resolve(__dirname,'./templates/blogg2.html'))