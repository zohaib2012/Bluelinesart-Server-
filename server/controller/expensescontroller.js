import { expensesshm } from "../model/Expensemodel.js"



export let addexpenses =async(req ,res)=>{
    try {
        let detail= req.body
        let {name, description}=detail
        let newexpensesshm= await expensesshm.create({
            name, description
        })
        return res.status(200).json({message:" add new expenses sucessfully",newexpensesshm })
    } catch (error) {
        
        console.log(error)
    }
}


export let getexpenses=async(req, res)=>{
    try {
        let allexpenses= await expensesshm.find()
        
        return res.status(200).json({message:"Fetch allepenses sucessfully", allexpenses})
    } catch (error) {
        console.log(error)
    }
}

export let editexpenses=async(req ,res)=>{
    try {
        let {id}=req.params
        let editedexpense=req.body
        let editeexpense=await expensesshm.findByIdAndUpdate(id, editedexpense)
        
        return res.status(200).json({message:"changes update sucessfully", editeexpense})
    } catch (error) {
        console.log(error)
    }
}
export let removeexpenses=async(req, res)=>{
    try {
        let {id}=req.params
        let removedexpense = await expensesshm.findByIdAndDelete(id)
        return res.status(200).json({message:"remove expense sucessfully ", removedexpense})
    } catch (error) {
        console.log(error)
    }
}