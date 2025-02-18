
import React, { useState, useEffect } from "react";
import { productstore } from "../store/productstore";
import { categorystore } from "../store/categorystore";
import useVendorStore from "../store/vendorstore";
const AddProductForm = () => {
  const addproduct = productstore((state) => state.addproduct);

  // Separate categories and getCategories to avoid snapshot issue
  const categories = categorystore((state) => state.categories);
  const getCategories = categorystore((state) => state.getCategories);
  
  const vendors = useVendorStore((state) => state.vendors); // Fetch vendors from Zustand
  const getVendors = useVendorStore((state) => state.getVendors); // Fetch vendors function

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    purchaseprice: "",
    saleprice: "",
    stock: "",
    vendorName: "", // Use vendorName instead of vendorId
  });

  // Fetch categories and vendors on component mount
  useEffect(() => {
    getCategories(); // Fetch categories from database
    getVendors(); // Fetch vendors from database
  }, [getCategories, getVendors]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    addproduct({
      ...formData,
      vendorId: vendors.find((vendor) => vendor.name === formData.vendorName)?._id, // Use vendorName to get vendorId
    });
    setFormData({
      name: "",
      description: "",
      category: "",
      purchaseprice: "",
      saleprice: "",
      stock: "",
      vendorName: "", // Reset vendorName
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Product Name"
        required
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
        className="border p-2 rounded w-full"
      />
      
      {/* Category Dropdown */}
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
        className="border p-2 rounded w-full"
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
      
      <input
        type="number"
        name="purchaseprice"
        value={formData.purchaseprice}
        onChange={handleChange}
        placeholder="Purchase Price"
        required
        className="border p-2 rounded w-full"
      />
      <input
        type="number"
        name="saleprice"
        value={formData.saleprice}
        onChange={handleChange}
        placeholder="Sale Price"
        required
        className="border p-2 rounded w-full"
      />
      <input
        type="number"
        name="stock"
        value={formData.stock}
        onChange={handleChange}
        placeholder="Stock"
        required
        className="border p-2 rounded w-full"
      />
      
      {/* Vendor Dropdown */}
      <select
        name="vendorName"
        value={formData.vendorName}
        onChange={handleChange}
        required
        className="border p-2 rounded w-full"
      >
        <option value="">Select Vendor</option>
        {vendors.map((vendor) => (
          <option key={vendor._id} value={vendor.name}>
            {vendor.name}
          </option>
        ))}
      </select>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
