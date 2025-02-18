import mongoose from "mongoose";
let exprenseschema = new mongoose.Schema({
    name:{type:String , required:true},
    description:{type:String , required:true},
},{
    timestamps:true
})
export let expensesshm= mongoose.model("Expenses model", exprenseschema)