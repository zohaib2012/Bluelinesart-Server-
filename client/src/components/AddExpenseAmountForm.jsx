import React, { useEffect, useState } from "react";
import { expensestore } from "../store/expenses";
import { expensesamount } from "../store/Expensesamount";
export const AddExpenseAmountForm = () => {
  // State to store selected expense type and input values
  const [formData, setFormData] = useState({
    expensestype: "",
    Amount: "",
    description: "",
  });

  // Fetch expense names from the store
  const { expenses, getexpense, loading: expensesLoading } = expensestore();
  const { addexpensesamount, loading: addLoading } = expensesamount();

  useEffect(() => {
    getexpense(); // Fetch expenses on component mount
  }, [getexpense]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addexpensesamount(formData); // Call the function to add expense amount
    setFormData({ expensestype: "", Amount: "", description: "" }); // Reset form fields
  };

  return (
   
    <div className="p-4 mx-80" >
      <h2 className="text-2xl font-bold mb-4">Add Expense Amount</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Expense Type Dropdown */}
        <label className="block">
          <span className="text-gray-700">Expense Type</span>
          <select
            name="expensestype"
            value={formData.expensestype}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-2"
            required
          >
            <option value="" disabled>
              Select an Expense Type
            </option>
            {expenses.map((expense) => (
              <option key={expense._id} value={expense.name}>
                {expense.name}
              </option>
            ))}
          </select>
        </label>

        {/* Amount Input */}
        <label className="block">
          <span className="text-gray-700">Amount</span>
          <input
            type="number"
            name="Amount"
            value={formData.Amount}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-2"
            required
          />
        </label>

        {/* Description Input */}
        <label className="block">
          <span className="text-gray-700">Description</span>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-2"
            rows="3"
            required
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600"
          disabled={addLoading || expensesLoading}
        >
          {addLoading ? "Adding..." : "Add Expense Amount"}
        </button>
      </form>
    </div>
  
  );
};
