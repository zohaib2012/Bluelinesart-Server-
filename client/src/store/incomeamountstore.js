import axios from "axios";
import { create } from "zustand";
import { axioinstance } from "../lib/axios";

export let incomeamount = create((set) => ({
    incomeamounts: [],
    loading: false,

    createIA: async (data) => {
        set({ loading: true })
        try {
            let { Incometype, description, Amount } = data
            let response = await axios.post("http://localhost:7000/api/addincomeamount", { Incometype, description, Amount })

            set((state) => ({
                incomeamounts: [...state.incomeamounts, response.data], loading: false
            }))


        } catch (error) {
            console.log(error)
        }
    },


    getincomeamount: async () => {
        set({ loading: true })
        try {
            let response = await axioinstance.get("/getincomeamount")

            set({
                incomeamounts: response.data.allincomeamount, loading: false
            })
        } catch (error) {
            console.log(error)
        }
    },

    // incomeamountdate: async (selecteddate) => {
    //     try {

    //         const response = await axioinstance.get("/incomeamountdate/by-date", {
    //             params: { date: selecteddate }
    //         })

    //         console.log(response.data)
  
    //     set({ incomeamounts: response.data });
            
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


}))