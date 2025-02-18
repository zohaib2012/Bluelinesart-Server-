import { create } from "zustand";
import { axioinstance } from "../lib/axios";

export let incomesourcestore=create((set)=>({
    incomesources:[],
    loading:false,


    addincomesource:async(data)=>{
        set({loading:true})

        try {
           let{name, description}=data
           let response=await axioinstance.post("/addincomesource",{name, description})
           set((state)=>({
            incomesources:[...state.incomesources, response.data],loading:false
           })) 
        } catch (error) {
            console.log(error)
        }
    },



    getincomesources:async()=>{
        set({loading:true})
        try {
            
            let response=await axioinstance.get("/getincomesource")
            set((state)=>({
                incomesources:response.data.allincomesources, loading:false
            }))
        } catch (error) {
            console.log(error)
        }
    },

editincomesource:async(id, editedincomesorce)=>{
    set({loading:true})

    try {
        let response= await axioinstance.put(`/editincomesource/${id}`,{editedincomesorce})
        set((state)=>({
            incomesources:state.incomesources.map((incomesource)=> incomesource._id === id ? {...state, ...response.data}:incomesource )
        }))
    } catch (error) {
        console.log(error)
    }
},

deleteincomesource:async(id)=>{
    set({loading:true})
    try {
        let response=await axioinstance.delete(`/removeincomesource/${id}`)
    set((state)=>({

        incomesources:state.incomesources.filter((incomesource)=> incomesource._id !==id)


        
    }))
    
    } catch (error) {

        console.log((error))
    }
}


}))