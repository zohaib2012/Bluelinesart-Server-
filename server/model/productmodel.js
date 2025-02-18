

import mongoose from "mongoose";

// Define product schema
let productschema = new mongoose.Schema({

// productId:{type:mongoose.Schema.Types.ObjectId ,ref:"product"},
vendorId:{type:mongoose.Schema.Types.ObjectId, ref:"vendorshm"},

    name: { type: String, required: true },
    category: { type: String },
    purchaseprice: { type: Number, required: true },
    saleprice: { type: Number, required: true },
    description: { type: String },
    stock: { type: Number, default: 0 },
    profitmargin: {
       type:String, 
    },
    profit:{
        type:Number
    }
}, {
    timestamps:true
});

export let productshm = mongoose.model("Product", productschema);
