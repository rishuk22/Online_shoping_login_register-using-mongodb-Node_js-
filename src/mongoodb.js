const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/DATABASE")
.then(()=>{
    console.log('mongoose connected');
}) 

.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mob:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('Signupdata',logInSchema)

module.exports=LogInCollection