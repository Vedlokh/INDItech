const mongoose=require('mongoose');
const userScheme=new mongoose.Schema({
   _id:mongoose.Schema.ObjectId,
    Fname:String,
    Lname:String,
    Feedback:String,
    Description:String,
    Email:String
})
module.exports=mongoose.model('Users',userScheme)