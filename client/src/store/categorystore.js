
import { create } from 'zustand'
import { axioinstance } from '../lib/axios'

 export const categorystore = create((set) => ({
  categories: [], 
  loading:false,

createcategory:async(data)=>{
    set({loading:true})
    try {
        let{name, description}=data
        let response=await axioinstance.post("/addctg",{name, description})
        set((state)=>({
            categories:[...state.categories, response.data]
        }))
    } catch (error) {
        console.log(error)
    }
},
  // Get categories
  getCategories: async () => {
    set({loading:true})
    try {
      const response = await axioinstance.get('/getctg')

        set({ categories: response.data.allcategories }) // Store all categories in the array
      
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  },

  // Edit category
  editCategory: async (id, updatedCategory) => {
    set({loading:true})
    try {
      const response = await axioinstance.put(`/editctg/${id}`, updatedCategory)
   
  set((state)=>({
    categories:state.categories.map((category)=> category._id === id ? { ...state,  ...response.data, }:category)
  }))
      
    } catch (error) {
      console.error('Error editing category:', error)
    }
  },

  // Remove category
  removeCategory: async (id) => {
    try {
      const response = await axioinstance.delete(`/removectg/${id}`)
    set((state)=>({
        categories:state.categories.filter((category)=> category._id !==id )
    }))
    } catch (error) {
      console.error('Error removing category:', error)
    }
  }
}))

// export default useCategoryStore
