import { incomeamountshm } from "../model/incomeamount.js"

export let addincomeamount =async(req ,res)=>{
    try {
        let detail= req.body
        let { Incometype, description,Amount}=detail
        let newincomeamount= await incomeamountshm.create({
             Incometype, description,Amount
        })
        return res.status(200).json({message:" add newincome amount",newincomeamount })
    } catch (error) {
        console.log(error)
    }
}



export let getincomeamount=async(req, res)=>{
    try {
        let allincomeamount= await incomeamountshm.find()
        
        return res.status(200).json({message:"Fetch allincomeamount sucessfully", allincomeamount})
    } catch (error) {
        console.log(error)
    }
}

export let editincomeamount=async(req ,res)=>{
    try {
        let {id}=req.params
        let editedincomeamount=req.body
        let editeincomeamunt=await incomeamountshm.findByIdAndUpdate(id, editedincomeamount)
        
        return res.status(200).json({message:"update sucessfully", editeincomeamunt})
    } catch (error) {
        console.log(error)
    }
}
export let removeincomeamount=async(req, res)=>{
    try {
        let {id}=req.params
        let removedincomeamount = await incomeamountshm.findByIdAndDelete(id)
        return res.status(200).json({message:"remove income source sucessfully ", removedincomeamount})
    } catch (error) {
        console.log(error)
    }
}

export let incomeamountdate=async(req, res)=>{
    try {
        const { date } = req.query;  // Receive the date from query parameter

        // Convert the date string into a Date object
        const start = new Date(date);
        start.setHours(0, 0, 0, 0); // Start of the day
        const end = new Date(date);
        end.setHours(23, 59, 59, 999); // End of the day

        // Filter incomes within the start and end date range
        const incomes = await incomeamountshm.find({
            date: { $gte: start, $lte: end }
        });

        res.json({ success: true, data: incomes });

    } catch (error) {
        console.log(error)
    }
}