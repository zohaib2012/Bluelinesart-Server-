import mongoose from "mongoose";
let incomeschema = new mongoose.Schema({
    name:{type:String , required:true},
    description:{type:String , required:true},
 date:{type:Date, default:Date.now}
},{
    timestamps:true
})
export let incomeshm= mongoose.model("income model", incomeschema)