import { create } from "zustand";
import { axioinstance } from "../lib/axios";

export let expensesamount=create((set)=>({
    expensesamounts:[],
    loading:false,

    addexpensesamount:async(data)=>{
        set({loading:true})
        try {
            let{expensestype, Amount, description}=data
            let response=await axioinstance.post("/addaddexpensesamount",{expensestype,Amount, description})
            set((state)=>({
                expensesamounts:[...state.expensesamounts , response.data]
            }))
        } catch (error) {
            console.log(error)
        }
    },
    getexpnsesamountlist:async()=>{
        set({loading:true})
        try {
            let response= await axioinstance.get("/getexpensesamountlist")
            set((state)=>({
                expensesamounts:response.data.expensesamountlist ,loading:false
            }))
        } catch (error) {
            console.log(error)
        }
    },

    editexpensesamountlist:async(id, editedexpense)=>{
        set({loading:true})
        try {
            
            let response=await axioinstance.put(`/editexpensesamountlist/${id}`,editedexpense)
            set((state)=>({
                expensesamounts:state.expensesamounts.map((expenseamount)=>expenseamount._id ===id ? {...state, ...response.data} :expenseamount )
            }))
        } catch (error) {
            console.log(error)
        }
    },
removeexpenseamount:async(id)=>{
    set({loading:true})
    try {
        let response=await axioinstance.delete(`/deleteexpenseslist/${id}`)
        set((state)=>({
            expensesamounts:state.expensesamounts.filter((expenseamount)=>expenseamount._id !== id)  
        }))
    } catch (error) {
        console.log(error)
    }
}



}))