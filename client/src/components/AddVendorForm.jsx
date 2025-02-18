import React, { useState } from 'react';
import useVendorStore from '../store/vendorstore';
// import useVendorStore from '../store/vendorstore';
// import useVendorStore from '../path/to/your/store/useVendorStore'; // Adjust the path as needed

export const AddVendorForm = () => {
  const [vendorData, setVendorData] = useState({
    name: '',
    address: '',
    phone: '',
    CNIC: ''
  });

  const addVendor = useVendorStore((state) => state.addVendor);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendorData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addVendor(vendorData); // Call addVendor from the Zustand store
    setVendorData({ name: '', address: '', phone: '', CNIC: '' }); // Clear form fields
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add Vendor</h2>
      
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={vendorData.name}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          name="address"
          value={vendorData.address}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="text"
          name="phone"
          value={vendorData.phone}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700">CNIC</label>
        <input
          type="text"
          name="CNIC"
          value={vendorData.CNIC}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Add Vendor
      </button>
    </form>
  );
};

// export default AddVendorForm;
