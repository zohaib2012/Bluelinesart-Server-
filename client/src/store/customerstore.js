import { create } from "zustand";
import { axioinstance } from "../lib/axios";

export let customerstore=create((set)=>({
    customers:[],
    loading:false,

createcustomer:async(data)=>{
    set({loading:true})
    try {
        let{name, phone, address,cnic}=data
        let response=await axioinstance.post("/createcustomer",{name, phone, address,cnic})
        set((state)=>({
            customers:[...state.customers, response.data]
        }))
    } catch (error) {
        console.log(error)
    }
},

getcustomers:async()=>{
    set({loading:true})
    try {
        let response=await axioinstance.get("/getcustomers")
        set({
            customers:response.data.getcustomers, loading:false
        })
    } catch (error) {
        console.log(error)
    }
},

editcustomerdata:async(id,editeddata)=>{
    set({loading:true})
    try {
        let response=await axioinstance.put(`/editcustomerdata/${id}`,editeddata)
        set((state)=>({
            customers:state.customers.map((customer)=>customer._id ===id ? {...state, ...response.data}:customer)
        }))
    } catch (error) {
        console.log(error)
    }
},
removecustomer:async(id)=>{
    set({loading:true})
    try {
        set((state)=>({
            customers:state.customers.filter((customer)=>customer._id !==id)
        }))
    } catch (error) {
        console.log(error)
    }
}
}))