
import { vendorshm } from "../model/vendormodel.js"

export let addvender=async(req, res)=>{
    try {
        let detail=req.body
        let{name, address, phone,CNIC}=detail

        let newvendorshm=await vendorshm.create({
            name,
            address,
            phone,
            CNIC
        })
        return res.status(200).json({message:"vendor added sucessfully", newvendorshm})
    } catch (error) {
        console.log(error)
    }
}
export let getvendor=async(req, res)=>{
    try {
    let getvendors= await vendorshm.find()
    
    return res.status(200).json({message:"fetch vendors data sucesssfull",getvendors})
} catch (error) {
    console.log(error) 
}
}

export let removevendor=async(req, res)=>{
    try {
        let {id}=req.params
        let removedvendor= await vendorshm.findByIdAndDelete(id)
        return res.status(200).json({message:"vendor remove sucessfully",removedvendor})
    } catch (error) {
        console.log(error)
    }
}
export let editvendordata=async(req, res)=>{
    try {
        let updatedvendordata=req.body
        let {id}=req.params
        let editedvendordata= await vendorshm.findByIdAndUpdate(id, updatedvendordata)
        return res.status(200).json({message:"update vendor data sucessfully",updatedvendordata})
    } catch (error) {
        console.log(error)
    }
}