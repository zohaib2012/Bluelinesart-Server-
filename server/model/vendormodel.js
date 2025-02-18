import mongoose from "mongoose";

let vendorschema= new mongoose.Schema({
   name:{type:String, required:true}, 
   address:{type:String}, 
phone:{type:Number, required:true}, 
CNIC:{type:Number}, 
// products: [{ 
//     productId: { type: mongoose.Schema.Types.ObjectId, ref: "productshm" },
//     purchasePrice: { type: Number },
// }]
products:[{
    productId:{type:mongoose.Schema.Types.ObjectId, ref:"productshm"},
    purchasePrice: { type: Number }
}]
},{
    timestamps:true
})

export let vendorshm= mongoose.model("vendor model", vendorschema)
