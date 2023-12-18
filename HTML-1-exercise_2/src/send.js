const express = require("express")
const router = express.Router()

router.get("/",(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./templates/send2.html'))
})

router.post("/",async(req,res) =>{
    
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

router.get("/thanks",(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./templates/thanks.html'))
})

module.exports = router