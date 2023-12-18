const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://azzoz2001:qweewq@ggmm.xhyg2wu.mongodb.net/',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("mongo connected")
})
.catch(()=>{
    console.log("failed to connect")
})

const thoughtsSchema = new mongoose.Schema({
    name:{
        type:String
        
    },
    email:{
        type:String
    },
    sex:{
        type:String 
    },
    
    massage:{
        type:String
    },
    mailMe:{
        type:String
    },
    rateMe:{
     type:Number
    }
})

const collections= new mongoose.model("ggmm",thoughtsSchema)

module.exports = collections