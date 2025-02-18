import React, { useEffect, useState } from "react";
import { productstore } from "../store/productstore";

export const ProductList = () => {
    const { products, getproduct, removeproduct, editproduct, loading } = productstore();
    const [editMode, setEditMode] = useState(null); 
    const [editedProduct, setEditedProduct] = useState({
        name: "",
        description: "",
        category: "",
        purchaseprice: "",
        saleprice: "",
        stock: ""
    });

    useEffect(() => {
        getproduct();
    }, [getproduct]);

    const handleEdit = (product) => {
        setEditMode(product._id);
        setEditedProduct(product);
    };

    const handleDelete = (id) => {
        removeproduct(id);
    };

    const handleSave = (id) => {
        editproduct(id, editedProduct);
        setEditMode(null); 
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Product List</h2>
            <table className="w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2 border">Name</th>
                        <th className="p-2 border">Description</th>
                        <th className="p-2 border">Category</th>
                        <th className="p-2 border">Purchase Price</th>
                        <th className="p-2 border">Sale Price</th>
                        <th className="p-2 border">Stock</th>
                        <th className="p-2 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id} className="hover:bg-gray-100">
                            {editMode === product._id ? (
                                <>
                                    <td className="p-2 border">
                                        <input
                                            type="text"
                                            name="name"
                                            value={editedProduct.name}
                                            onChange={handleChange}
                                            className="w-full p-1 border rounded"
                                        />
                                    </td>
                                    <td className="p-2 border">
                                        <textarea
                                            name="description"
                                            value={editedProduct.description}
                                            onChange={handleChange}
                                            className="w-full p-1 border rounded"
                                            rows="2"
                                        />
                                    </td>
                                    <td className="p-2 border">
                                        <input
                                            type="text"
                                            name="category"
                                            value={editedProduct.category}
                                            onChange={handleChange}
                                            className="w-full p-1 border rounded"
                                        />
                                    </td>
                                    <td className="p-2 border">
                                        <input
                                            type="number"
                                            name="purchaseprice"
                                            value={editedProduct.purchaseprice}
                                            onChange={handleChange}
                                            className="w-full p-1 border rounded"
                                        />
                                    </td>
                                    <td className="p-2 border">
                                        <input
                                            type="number"
                                            name="saleprice"
                                            value={editedProduct.saleprice}
                                            onChange={handleChange}
                                            className="w-full p-1 border rounded"
                                        />
                                    </td>
                                    <td className="p-2 border">
                                        <input
                                            type="number"
                                            name="stock"
                                            value={editedProduct.stock}
                                            onChange={handleChange}
                                            className="w-full p-1 border rounded"
                                        />
                                    </td>
                                    <td className="p-2 border">
                                        <button
                                            onClick={() => handleSave(product._id)}
                                            className="w-full bg-green-500 text-white py-1 rounded hover:bg-green-600"
                                        >
                                            Save
                                        </button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td className="p-2 border">{product.name}</td>
                                    <td className="p-2 border">{product.description}</td>
                                    <td className="p-2 border">{product.category}</td>
                                    <td className="p-2 border">RS:{product.purchaseprice}</td>
                                    <td className="p-2 border">RS:{product.saleprice}</td>
                                    <td className="p-2 border">{product.stock}</td>
                                    <td className="p-2 border">
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => handleEdit(product)}
                                                className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(product._id)}
                                                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
