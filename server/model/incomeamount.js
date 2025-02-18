import mongoose from "mongoose";
let incomeamountchema = new mongoose.Schema({
    Incometype:{type:String , required:true},
    Amount:{type:Number, required:true},
    description:{type:String , required:true},
    
 date:{type:Date, default:Date.now}
},{
    timestamps:true
})
export let incomeamountshm= mongoose.model("income amount model", incomeamountchema)