import React, { useState } from "react";
import { expensestore } from "../store/expenses";
// import { expensestore } from "../store/expensestore"; // Update with the correct path to the store

const AddExpenseForm = () => {
  const [name, setName] = useState(""); // State for expense name
  const [description, setDescription] = useState(""); // State for expense description
  const loading = expensestore((state) => state.loading); // Access loading state
  const addexpenses = expensestore((state) => state.addexpenses); // Access addexpenses function

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare data for the new expense
    const expenseData = { name, description };

    // Call addexpenses function to save data to backend
    await addexpenses(expenseData);

    // Clear the form fields after submission
    setName("");
    setDescription("");
  };

  return (
    <div className="ml-96">
      <h3 className="text-center text-2xl m-5">Add New Expense</h3>
      <form onSubmit={handleSubmit}>
        <div className="border-2  m-3 p-5">
          <label className="font-semibold text-black block">Expense Type:</label>
          <input
          className="border-2 border-slate-400 m-2 rounded-md h-9"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="border-2 m-3 p-5">
          <label className="font-semibold text-black block " >Description:</label>
          <textarea 
          className="border-2 border-slate-400 m-2 rounded-md h-14 w-80"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button className="w-28 border-2 border-slate-800 rounded-md m-5 hover:bg-slate-500 hover:border-white hover:text-white h-9" type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Expense"}
        </button>
      </form>
    </div>
  );
};

export default AddExpenseForm;
