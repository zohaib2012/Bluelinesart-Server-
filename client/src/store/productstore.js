import { create } from "zustand";
import { axioinstance } from "../lib/axios";

export let productstore=create((set)=>({
    products:[],
    loading:false,



    selectedProduct: null, 
    totalAmount: 0,      
    quantity: 1,         
  
    setProducts: (products) => set({ products }),
    setSelectedProduct: (product) => set({ selectedProduct: product }),
    setQuantity: (quantity) => set({ quantity }),
    setTotalAmount: (amount) => set({ totalAmount: amount }),


    addproduct:async(data)=>{
        set({loading:true})
        try {
            let {name,description, category,purchaseprice,saleprice,stock,vendorId}=data
            let response=await axioinstance.post("/addproduct",{name,description, vendorId,category,purchaseprice,saleprice,stock})
            set((state)=>({
                products:[...state.products , response.data]
            }))
        } catch (error) {
            console.log(error)
        }
    },

    getproduct:async()=>{
        set({loading:true})
        try {
            let response=await axioinstance.get("/productlist")

            set((state)=>({
                products:response.data.productlist ,loading:false
            }))
        } catch (error) {
            console.log(error)
        }
    },

    removeproduct:async(id)=>{
        set({loading:true})
        try {
            
            let response=await axioinstance.delete(`/deleteproduct/${id}`)

            set((state)=>({
products:state.productlist.filter((product)=> product._id !==id)
            }))
        } catch (error) {
            console.log(error)
        }

    },

    editproduct:async(id ,editedproduct)=>{
        set({loading:true})
        try {
            let response= await axioinstance.put(`/updateproduct/${id}`,editedproduct)

set((state)=>({
    products:state.products.map((product)=>product._id === id ?{...state  ,...response.data}:product)
}))

        } catch (error) {
            console.log(error)
        }
    },







  
    // // Fetch the list of products
    // getProductList: async () => {
    //   set({ loading: true });
    //   try {
    //     const response = await axioinstance.get("/productlist");
    //     set({ products: response.data.productlist, loading: false });
    //   } catch (error) {
    //     console.error("Error fetching product list:", error);
    //     set({ loading: false });
    //   }
    // },
  
    // // Fetch product details based on selected product name
    // fetchProductDetails: async (name, quantity = 1) => {
    //   try {
    //     const response = await axioinstance.get(`/productdetails/${name}`, {
    //       params: { quantity },
    //     });
    //     set({
    //       selectedProduct: response.data,
    //       totalAmount: response.data.totalAmount,
    //     });
    //   } catch (error) {
    //     console.error("Error fetching product details:", error);
    //   }
    // },
  
    // // Handle the sale process
    // saleProduct: async (productName, quantity) => {
    //   try {
    //     quantity = parseInt(quantity, 10);
    //     // const response = await axioinstance.post(`/saleproduct/${name}`, { quantity });
    //     axios.post(`http://localhost:7000/api/saleproduct/${productName}`, {
    //         quantity
    //       });
    //     alert("Product purchased successfully!");
    //     set((state) => ({
    //       products: state.products.map((product) =>
    //         product.name === name ? { ...product, stock: response.data.updatedStock } : product
    //       ),
    //     }));
    //   } catch (error) {
    //     console.error("Error purchasing product:", error);
    //     if (error.response) {
    //       alert(error.response.data.message);  
    //     }
    //   }
    // },

}))