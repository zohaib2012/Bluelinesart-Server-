import { customershm } from "../model/customermodel.js"

export let createcustomer=async(req, res)=>{
    try {
        let detail=req.body
        let {name, phone, address, cnic}=detail
        
        let newcustomershm= await customershm.create({
name,
phone,
address,
cnic
        })
        return res.status(400).json({message:"customer created sucessfully", newcustomershm})
    } catch (error) {
        console.log(error)
    }
}

export let getcustomers=async(req, res)=>{
    try {
        let getcustomers= await customershm.find()
        
        return res.status(400).json({message:"fetch customer data sucessfully", getcustomers})
    } catch (error) {
        console.log(error)
    }
}

export let editcustomerdata=async(req, res)=>{
    try {
        let editedcustomerdata= req.body
        let {id}=req.params
    let editedcustomer=await customershm.findByIdAndUpdate(id, editedcustomerdata)
    
    return res.status(400).json({message:"update data sucessfully", editedcustomer})
} catch (error) {
    console.log(error)
}
}

export let removecustomer=async(req, res)=>{
    try {
        let {id}=req.params
        let removedcustomer= await customershm.findByIdAndDelete(id)
        
        return res.status(400).json({message:"remove customer sucessfully", removedcustomer})
    } catch (error) {
        console.log(error)
    }
}

export let updatadata=async(req, res)=>{
    try {
      
        let updation= req.body
        let updateddata= await us
    } catch (error) {
        console.log(error)
    }
}