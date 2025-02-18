import mongoose from "mongoose";
let expenseamountschema = new mongoose.Schema({
    expensestype:{type:String , required:true},
    Amount:{type:Number, required:true},
    description:{type:String , required:true},
},{
    timestamps:true
})
export let expenseamountshm= mongoose.model("expense amount model", expenseamountschema)