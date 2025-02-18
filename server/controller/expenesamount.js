import { expenseamountshm } from "../model/expensesamountmodel.js"

export let addexpensesamount=async(req, res)=>{
    try {
    
    let detail= req.body

    let {expensestype, Amount, description}=detail

    let newexpenseamountshm=await expenseamountshm.create({
        expensestype, Amount, description
    })
    return res.status(200).json({message:"add expenses amount  sucessfully", newexpenseamountshm})
    } catch (error) {
        console.log(error)
    }
}

export let getexpensesamountlist=async (req, res)=>{
    try {
        let expensesamountlist=await expenseamountshm.find()
        return res.status(200).json({message:"fetch expenses amount list sucessfully", expensesamountlist})
    } catch (error) {
        console.log(error)
    }
}
export let editexpensesamountlist=async (req, res)=>{
    try {
    
        let editedexpensesamountlist=req.body
        let {id}= req.params
        let expensesamountlist=await expenseamountshm.findByIdAndUpdate(id, editedexpensesamountlist)
        return res.status(200).json({message:"Edited Sucessfully", expensesamountlist})
    } catch (error) {
        console.log(error)
    }
}

export let deleteexpenseslist=async(req, res)=>{
    try {
        let {id}=req.params
        let removedexpenseamountlist= await expenseamountshm.findByIdAndDelete(id)
        return res.status(200).json({message:"remove sucessfully", removedexpenseamountlist})
    } catch (error) {
        console.log(error)
    }
}

