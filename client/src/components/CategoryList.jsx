

import React, { useEffect, useState } from 'react';
import { categorystore } from '../store/categorystore';

const CategoryList = () => {
  const { categories, getCategories, removeCategory, editCategory } = categorystore();
  const [isEditing, setIsEditing] = useState(null);
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');

  useEffect(() => {
    getCategories(); // Fetch categories when component mounts
  }, []);

  const handleEdit = (category) => {
    setIsEditing(category._id);
    setEditName(category.name);
    setEditDescription(category.description);
  };

  const handleEditSubmit = async (id) => {
    await editCategory(id, { name: editName, description: editDescription });
    setIsEditing(null); // Exit edit mode after saving
  };

  return (
    <div className="container mx-auto p-4 ">
      <h2 className="text-2xl font-semibold text-center mb-6">Category List</h2>
      <ul className="space-y-4">
        {categories.map((category) => (
          <li
            key={category._id}
            className="flex flex-col md:flex-row md:items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md"
          >
            {isEditing === category._id ? (
              <div className="flex flex-col md:flex-row md:items-center gap-2 w-full">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Edit category name"
                />
                <input
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Edit description"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditSubmit(category._id)}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditing(null)}
                    className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
                <span className="text-gray-700 font-medium flex-1">
                  {category.name} - {category.description}
                </span>
                <div className="flex gap-2 mt-2 md:mt-0">
                  <button
                    onClick={() => handleEdit(category)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => removeCategory(category._id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
