import { create } from "zustand";
import { axioinstance } from "../lib/axios";

export let productstore = create((set) => ({
  products: [],
  loading: false,
  selectedProduct: null, 
  totalAmount: 0,      
  quantity: 1,         

  setProducts: (products) => set({ products }),
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  setQuantity: (quantity) => set({ quantity }),
  setTotalAmount: (amount) => set({ totalAmount: amount }),

  // Fetch the list of products
  getProductList: async () => {
    set({ loading: true });
    try {
      const response = await axioinstance.get("/productlist");
      set({ products: response.data.productlist, loading: false });
    } catch (error) {
      console.error("Error fetching product list:", error);
      set({ loading: false });
    }
  },

  // Fetch product details based on selected product name
  fetchProductDetails: async (productName, quantity = 1) => {
    try {
      const response = await axioinstance.get(`/productdetails/${productName}`, {
        params: { quantity },
      });
      set({
        selectedProduct: response.data,
        totalAmount: response.data.totalAmount,
      });
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  },

  // Handle the sale process
  saleProduct: async (name, quantity) => {
    try {
      quantity = parseInt(quantity, 10);
      const response = await axioinstance.put(`/saleproduct/${name}`, { quantity });
      alert("Product purchased successfully!");
      set((state) => ({
        products: state.products.map((product) =>
          product.name === name ? { ...product, stock: response.data.updatedStock } : product
        ),
      }));
    } catch (error) {
      console.error("Error purchasing product:", error);
      if (error.response) {
        alert(error.response.data.message);  
      }
    }
  },
}));
