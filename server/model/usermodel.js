import mongoose from "mongoose";
let userschema=new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    confirmpassword:{type:String, required:true},
    
})
export let usershm= mongoose.model("user model", userschema)