
import React, { useEffect } from 'react';
import useVendorStore from '../store/vendorstore';

const VendorList = () => {
  const vendors = useVendorStore((state) => state.vendors); // Get vendors list
  const getVendors = useVendorStore((state) => state.getVendors); // Fetch vendors
  const editVendor = useVendorStore((state) => state.editVendor); // Edit vendor function
  const removeVendor = useVendorStore((state) => state.removeVendor); // Remove vendor function

  // Fetch vendors on component mount
  useEffect(() => {
    getVendors();
  }, [getVendors]);

  // Handle editing vendor
  const handleEdit = (vendor) => {
    // For simplicity, let's prompt for new values; this could be replaced with a form or modal.
    const updatedName = prompt("Enter new name:", vendor.name);
    const updatedPhone = prompt("Enter new phone:", vendor.phone);
    const updatedAddress = prompt("Enter new address:", vendor.address);
    const updatedCNIC = prompt("Enter new CNIC:", vendor.CNIC);

    if (updatedName && updatedPhone && updatedAddress && updatedCNIC) {
      const updatedData = {
        name: updatedName,
        phone: updatedPhone,
        address: updatedAddress,
        CNIC: updatedCNIC,
      };
      editVendor(vendor._id, updatedData);
    }
  };

  // Handle deleting vendor
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this vendor?");
    if (confirmDelete) {
      removeVendor(id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Vendor List</h2>

      {vendors.length === 0 ? (
        <p className="text-center text-gray-500">No vendors available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Phone</th>
                <th className="py-3 px-6">Address</th>
                <th className="py-3 px-6">CNIC</th>
                <th className="py-3 px-6">Products (Purchase Price)</th>
                <th className="py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {vendors.map((vendor) => (
                <tr key={vendor._id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium">{vendor.name}</td>
                  <td className="py-4 px-6">{vendor.phone}</td>
                  <td className="py-4 px-6">{vendor.address}</td>
                  <td className="py-4 px-6">{vendor.CNIC}</td>
                  <td className="py-4 px-6">
                    {vendor.products && vendor.products.length > 0 ? (
                      <ul className=" underline ml-4">
                        {vendor.products.map((product, index) => (
                          <li key={index}>{product.purchasePrice}</li>
                        ))}
                      </ul>
                    ) : (
                      <span>No products</span>
                    )}
                  </td>
                  <td className="py-4 px-6 flex gap-2">
                    <button
                      onClick={() => handleEdit(vendor)}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(vendor._id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default VendorList;
