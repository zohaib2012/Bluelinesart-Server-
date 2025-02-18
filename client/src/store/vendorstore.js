import { create } from 'zustand';
import { axioinstance } from '../lib/axios';
// import axios from 'axios';

const useVendorStore = create((set) => ({
  vendors: [],
  loading:false,

  
  // Add a new vendor
  addVendor: async (vendorData) => {
    try {
        let{ name,address,phone,CNIC}=vendorData
      const response = await axioinstance.post('/addvender', {name,address,phone,CNIC}); // API endpoint for adding vendor
      set((state) => ({ vendors: [...state.vendors, response.data] }));
    } catch (error) {
        console.log("Error adding vendor:", error);
    }
},
// Fetch all vendors
getVendors: async () => {
  try {
    const response = await axioinstance.get('/getvender'); // API endpoint for fetching vendors
    set({ vendors: response.data.getvendors });
  } catch (error) {
    console.log("Error fetching vendors:", error);
  }
},

  // Edit vendor data
  editVendor: async (id, updatedData) => {
    try {
      const response = await axioinstance.put(`/editvenderdata/${id}`, updatedData); // API endpoint for editing vendor
      set((state) => ({
        vendors: state.vendors.map((vendor) =>
          vendor._id === id ? { ...state, ...response.data } : vendor
        ),
      }));
    } catch (error) {
      console.log("Error updating vendor:", error);
    }
  },


  // Remove a vendor
  removeVendor: async (id) => {
    try {
      await axioinstance.delete(`/removevender/${id}`); // API endpoint for deleting vendor
      set((state) => ({
        vendors: state.vendors.filter((vendor) => vendor._id !== id),
      }));
    } catch (error) {
      console.log("Error removing vendor:", error);
    }
  },
}));

export default useVendorStore;
