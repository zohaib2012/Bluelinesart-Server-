import { categoryshm } from "../model/categorymodel.js"

export let createcategory =async(req ,res)=>{
    try {
        let detail= req.body
        let {name, description}=detail
        let newcategoryshm= await categoryshm.create({
            name, description
        })
        return res.status(200).json({message:"category added sucessfully", newcategoryshm})
    } catch (error) {
        console.log(error)
    }
}


export let getcategory=async(req, res)=>{
    try {
        let allcategories= await categoryshm.find()
        
        return res.status(200).json({message:"Fetch category sucessfully", allcategories})
    } catch (error) {
        console.log(error)
    }
}

export let editcategory=async(req ,res)=>{
    try {
        let {id}=req.params
        let editedcategory=req.body
        let editecategory=await categoryshm.findByIdAndUpdate(id, editedcategory)
        
        return res.status(200).json({message:"changes update sucessfully", editecategory})
    } catch (error) {
        console.log(error)
    }
}
export let removecategory=async(req, res)=>{
    try {
        let {id}=req.params
        let removedcategory= await categoryshm.findByIdAndDelete(id)
        return res.status(200).json({message:"category remove sucessfully ", removedcategory})
    } catch (error) {
        console.log(error)
    }
}