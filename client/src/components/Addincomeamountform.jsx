import { useEffect, useState } from "react";
import { incomeamount } from "../store/incomeamountstore"; // import incomeamount from Zustand store
import { incomesourcestore } from "../store/incomesourcestore";
// import IncomeAmountList from "./Incomeamountlist";

function Addincomeamountform() {
  const { incomesources, getincomesources } = incomesourcestore(); // Fetching income sources from Zustand store
  const { createIA } = incomeamount(); // Accessing the function to add income amount

  const [names, setNames] = useState([]);
  const [selectedType, setSelectedType] = useState(""); // Store the selected income type
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    getincomesources();
  }, [getincomesources]);

  useEffect(() => {
    const extractedNames = incomesources.map((source) => source.name);
    setNames(extractedNames);
  }, [incomesources]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createIA({ Incometype: selectedType, description, Amount: amount });
    setDescription("");
    setAmount("");
    setSelectedType("");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-semibold text-center mb-6 text-slate-700">Add Income Entry</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div className="flex flex-col">
          <label htmlFor="incomeType" className="text-sm font-medium text-gray-600 mb-1">
            Income Type
          </label>
          <select
            id="incomeType"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Income Type</option>
            {names.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="text-sm font-medium text-gray-600 mb-1">
            Description
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Enter description"
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="amount" className="text-sm font-medium text-gray-600 mb-1">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            placeholder="Enter amount"
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Income
        </button>
      </form>


    </div>
  );
}

export default Addincomeamountform;