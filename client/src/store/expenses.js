import { create } from "zustand";
import { axioinstance } from "../lib/axios";

export let expensestore=create((set)=>({
    expenses:[],
    loading:false,

    addexpenses:async(data)=>{
        set({loading:true})
        try {
           let {name, description} =data
           let response=await axioinstance.post("/addexpenses",{name, description})
           
           set((state)=>({
               expenses:[...state.expenses, response.data] , loading:false

           }))
        } catch (error) {
            console.log(error)
        }
    },


    getexpense:async()=>{
set({loading:true})
try {
    let response=await axioinstance.get("/getexpenses")

    set({
        expenses:response.data.allexpenses  ,loading:false
    })

} catch (error) {
    console.log(error)}


    },


    editexpense:async(id, editedexpense)=>{
        set({loading:true})
        try {
            let response= await axioinstance.put(`/editexpenses/${id}`,editedexpense)
set((state)=>({
    expenses:state.expenses.map((expens)=>expens._id ===id ? {...state, ...response.data}:expens)

}))


                } catch (error) {
            console.log(error)
        }
    },



    removeexpense:async(id)=>{
        set({loading:true})
        try {
            let response=await axioinstance.delete(`/removeexpenses/${id}`)
            set((state)=>({
                expenses:state.expenses.filter((expens)=>expens._id !==id)
            }))
        } catch (error) {
            console.log(error)
        }
    }
}))