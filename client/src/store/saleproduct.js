import { create } from "zustand";
import { axioinstance } from "../lib/axios";
// import { axioinstance } from "../lib/axios";

export let saleproduct = create((set) => ({
  products: [],
  loading: false,
  selectedProduct: null,
  totalAmount: 0,
  quantity: 1,

  setProducts: (products) => set({ products }),
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  setQuantity: (quantity) => set({ quantity }),
  setTotalAmount: (amount) => set({ totalAmount: amount }),

  addproduct: async (data) => {
    set({ loading: true });
    try {
      let response = await axioinstance.post("/addproduct", data);
      set((state) => ({
        products: [...state.products, response.data],
      }));
      console.log("Product added:", response.data); // Debug log
    } catch (error) {
      console.log("Error adding product:", error);
    }
    set({ loading: false });
  },

  getproduct: async () => {
    set({ loading: true });
    try {
      let response = await axioinstance.get("/productlist");
      set({ products: response.data.productlist, loading: false });
      console.log("Fetched products:", response.data.productlist); // Debug log
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  },

  fetchProductList: async () => {
    try {
      const response = await axioinstance.get('/productlist');
      set({ products: response.data.productlist.map(product => product.name) });
    } catch (error) {
      console.error('Error fetching product list:', error);
    }
  },

  fetchProductDetails: async (productName, quantity) => {
    try {
      let response = await axioinstance.get(`/productdetails/${productName}`, {
        params: { quantity },
      });
      set({
        selectedProduct: response.data,
        totalAmount: response.data.saleprice * quantity,
      });
      console.log("Fetched product details:", response.data); // Debug log
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  },

  saleProduct: async (name, quantity) => {
    try {
      quantity = parseInt(quantity, 10);
      let response = await axioinstance.put(`/saleproduct/${name}`, { quantity });
      alert("Product purchased successfully!");
      console.log("Sale response:", response.data); // Debug log
    } catch (error) {
      console.error("Error purchasing product:", error);
      if (error.response) {
        console.error("Error details:", error.response.data);
      }
    }
  },




}));
