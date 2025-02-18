import { incomeshm } from "../model/incomemodel.js"


export let addincomesourse =async(req ,res)=>{
    try {
        let detail= req.body
        let {name, description}=detail
        let newincomeshm= await incomeshm.create({
            name, description
        })
        return res.status(200).json({message:" add new income souorce sucessfully",newincomeshm })
    } catch (error) {
        console.log(error)
    }
}


export let getincomesource=async(req, res)=>{
    try {
        let allincomesources= await incomeshm.find()
        
        return res.status(200).json({message:"Fetch allincomesources sucessfully", allincomesources})
    } catch (error) {
        console.log(error)
    }
}

export let editincomesources=async(req ,res)=>{
    try {
        let {id}=req.params
        let editedincomesources=req.body
        let editeincomesource=await incomeshm.findByIdAndUpdate(id, editedincomesources)
        
        return res.status(200).json({message:"changes update sucessfully", editeincomesource})
    } catch (error) {
        console.log(error)
    }
}
export let removeincomesource=async(req, res)=>{
    try {
        let {id}=req.params
        let removedincomesource = await incomeshm.findByIdAndDelete(id)
        return res.status(200).json({message:"remove income source sucessfully ", removedincomesource})
    } catch (error) {
        console.log(error)
    }
}