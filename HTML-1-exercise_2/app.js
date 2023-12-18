
//make the usuall sitting such as require express 
const mongoose = require('mongoose');
const express = require('express');
const app = express()
const path = require("path")
const collections = require('./mongodb'); 
const bodyParser = require('body-parser');
const fs = require("fs");

const crypto = require('crypto');
const algorithm = 'aes-256-cbc'; //Using AES encryption
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

//Encrypting text
function encrypt(text) {
   let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
   let encrypted = cipher.update(text);
   encrypted = Buffer.concat([encrypted, cipher.final()]);
   return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

// Decrypting text
function decrypt(text) {
   let iv = Buffer.from(text.iv, 'hex');
   let encryptedText = Buffer.from(text.encryptedData, 'hex');
   let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
   let decrypted = decipher.update(encryptedText);
   decrypted = Buffer.concat([decrypted, decipher.final()]);
   return decrypted.toString();
}

// Text send to encrypt function
var hw = encrypt("Welcome to Tutorials Point...")
console.log(hw)
console.log(decrypt(hw))

function authentication(req, res, next) {
    const authheader = req.headers.authorization;
    console.log(req.headers);
 
    if (!authheader) {
        let err = new Error('You are not authenticated!');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err)
    }
 
    const auth = new Buffer.from(authheader.split(' ')[1],
        'base64').toString().split(':');
    const user = auth[0];
    const pass = auth[1];
 
    if (user == 'admin' && pass == 'password') {
 
        // If Authorized user
        next();
    } else {
        let err = new Error('You are not authenticated!');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err);
    }
 
}
 
// First step is the authentication of the client
app.use(authentication)
app.use(express.static(path.join(__dirname, 'public')));

const sendRoute = require('./src/send')
app.use('/send',sendRoute)
//const tempelatePath=path.join(__dirname,'../templates')


// app.use to make file navigation easy for all files css, html and js
app.use(express.static('./src'))
app.use(express.static('./public'))
app.use(express.static('./templates'))
app.use(express.urlencoded({extended:false}))

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

app.post("/send",async(req,res) =>{
    
    const data={
        name:req.body.name,
        email:req.body.email,
        sex:req.body.sex,
       
        massage:req.body.massage,
        mailMe:req.body.mailMe,
        rateMe:req.body.rateMe,
    }
    await collections.insertMany([data])
    console.log(data)
    console.log('data sent')
    res.sendFile(path.resolve(__dirname,'./templates/thanks.html'))
})

app.get("/send/thanks",(req,res) =>{
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