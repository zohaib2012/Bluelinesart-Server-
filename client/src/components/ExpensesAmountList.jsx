// import React, { useEffect, useState } from "react";
// import { expensesamount } from "../store/Expensesamount";
// // import { expensesamount } from "../store/expensesamount";

// export const ExpensesAmountList = () => {
//   const { expensesamounts, getexpnsesamountlist, editexpensesamountlist, removeexpenseamount, loading } = expensesamount();
//   const [editingId, setEditingId] = useState(null);
//   const [editData, setEditData] = useState({ expensestype: "", Amount: "", description: "" });

//   useEffect(() => {
//     getexpnsesamountlist(); // Fetch the expenses amount list on component mount
//   }, [getexpnsesamountlist]);

//   // Handle edit button click
//   const handleEditClick = (expense) => {
//     setEditingId(expense._id);
//     setEditData({ expensestype: expense.expensestype, Amount: expense.Amount, description: expense.description });
//   };

//   // Handle delete button click
//   const handleDeleteClick = (id) => {
//     removeexpenseamount(id); // Call the delete function with expense ID
//   };

//   // Handle edit form submission
//   const handleEditSubmit = (e) => {
//     e.preventDefault();
//     editexpensesamountlist(editingId, editData); // Call the edit function with edited data
//     setEditingId(null); // Reset editing state after submission
//     setEditData({ expensestype: "", Amount: "", description: "" });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Expenses Amount List</h2>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul className="space-y-4">
//           {expensesamounts.map((expense) => (
//             <li key={expense._id} className="p-4 border rounded shadow">
//               {editingId === expense._id ? (
//                 <form onSubmit={handleEditSubmit} className="space-y-2">
//                   <input
//                     type="text"
//                     name="expensestype"
//                     value={editData.expensestype}
//                     onChange={(e) => setEditData({ ...editData, expensestype: e.target.value })}
//                     className="w-full p-2 border rounded"
//                     placeholder="Expense Type"
//                     required
//                   />
//                   <input
//                     type="number"
//                     name="Amount"
//                     value={editData.Amount}
//                     onChange={(e) => setEditData({ ...editData, Amount: e.target.value })}
//                     className="w-full p-2 border rounded"
//                     placeholder="Amount"
//                     required
//                   />
//                   <textarea
//                     name="description"
//                     value={editData.description}
//                     onChange={(e) => setEditData({ ...editData, description: e.target.value })}
//                     className="w-full p-2 border rounded"
//                     rows="3"
//                     placeholder="Description"
//                     required
//                   />
//                   <button type="submit" className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">
//                     Save
//                   </button>
//                   <button onClick={() => setEditingId(null)} className="ml-2 bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600">
//                     Cancel
//                   </button>
//                 </form>
//               ) : (
//                 <>
//                   <p><strong>Type:</strong> {expense.expensestype}</p>
//                   <p><strong>Amount:</strong> {expense.Amount}</p>
//                   <p><strong>Description:</strong> {expense.description}</p>
//                   <button onClick={() => handleEditClick(expense)} className="bg-blue-500 text-white py-1 px-3 rounded mr-2 hover:bg-blue-600">
//                     Edit
//                   </button>
//                   <button onClick={() => handleDeleteClick(expense._id)} className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
//                     Delete
//                   </button>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };


import React, { useEffect, useState } from "react";
import { expensesamount } from "../store/Expensesamount";
// import { expensesamount } from "../store/expensesamount";

export const ExpensesAmountList = () => {
  const { expensesamounts, getexpnsesamountlist, editexpensesamountlist, removeexpenseamount, loading } = expensesamount();
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ expensestype: "", Amount: "", description: "" });

  useEffect(() => {
    getexpnsesamountlist(); // Fetch the expenses amount list on component mount
  }, [getexpnsesamountlist]);

  // Handle edit button click
  const handleEditClick = (expense) => {
    setEditingId(expense._id);
    setEditData({ expensestype: expense.expensestype, Amount: expense.Amount, description: expense.description });
  };

  // Handle delete button click
  const handleDeleteClick = (id) => {
    removeexpenseamount(id); // Call the delete function with expense ID
  };

  // Handle edit form submission
  const handleEditSubmit = (e) => {
    e.preventDefault();
    editexpensesamountlist(editingId, editData); // Call the edit function with edited data
    setEditingId(null); // Reset editing state after submission
    setEditData({ expensestype: "", Amount: "", description: "" });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Expenses Amount List</h2>

      <div className="flex font-semibold border-b pb-2 mb-4">
        <div className="w-1/3">Expense Type</div>
        <div className="w-1/3">Amount</div>
        <div className="w-1/3">Actions</div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-4">
          {expensesamounts.map((expense) => (
            <li key={expense._id} className="flex items-center p-2 border rounded shadow space-x-4">
              {editingId === expense._id ? (
                <form onSubmit={handleEditSubmit} className="flex w-full items-center space-x-4">
                  <input
                    type="text"
                    name="expensestype"
                    value={editData.expensestype}
                    onChange={(e) => setEditData({ ...editData, expensestype: e.target.value })}
                    className="w-1/3 p-2 border rounded"
                    placeholder="Expense Type"
                    required
                  />
                  <input
                    type="number"
                    name="Amount"
                    value={editData.Amount}
                    onChange={(e) => setEditData({ ...editData, Amount: e.target.value })}
                    className="w-1/3 p-2 border rounded"
                    placeholder="Amount"
                    required
                  />
                  <button type="submit" className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">
                    Save
                  </button>
                  <button onClick={() => setEditingId(null)} className="ml-2 bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600">
                    Cancel
                  </button>
                </form>
              ) : (
                <>
                  <div className="w-1/3">{expense.expensestype}</div>
                  <div className="w-1/3">{expense.Amount}</div>
                  <div className="flex space-x-2">
                    <button onClick={() => handleEditClick(expense)} className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
                      Edit
                    </button>
                    <button onClick={() => handleDeleteClick(expense._id)} className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
