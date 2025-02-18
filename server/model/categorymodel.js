import mongoose from "mongoose";

let categoryschema= new mongoose.Schema({
name:{type:String, required:true},
description:{type:String}
},{
    timestamps:true
})

export let categoryshm=mongoose.model("categorymodel",categoryschema)