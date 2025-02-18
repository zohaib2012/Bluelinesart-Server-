import React, { useState } from 'react';
import { categorystore } from '../store/categorystore';
import CategoryList from './CategoryList';

const CategoryForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { createcategory } = categorystore();

  const handleSubmit = (e) => {
    e.preventDefault();
    createcategory({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <div>

    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg space-y-4"
      >
      <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
        Add New Category
      </h2>
      <div>
        <label htmlFor="name" className="block text-gray-600 font-medium">
          Category Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-gray-600 font-medium">
          Description
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
        Add Category
      </button>
    </form>


<CategoryList/>

        </div>


  );
};

export default CategoryForm;
