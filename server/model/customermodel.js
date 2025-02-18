import mongoose from "mongoose";

let customerschema= new mongoose.Schema({
    name:{type:String, required:true},
    address:{type:String, required:true},
    phone:{type:Number, required:true},
    cnic:{type:Number, required:true}
})
export let customershm= mongoose.model("customer model", customerschema)