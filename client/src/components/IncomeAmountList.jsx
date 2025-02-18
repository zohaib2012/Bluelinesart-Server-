import { useEffect } from "react";
import { incomeamount } from "../store/incomeamountstore"; // Import your Zustand store

function IncomeAmountList() {
  // Destructure `incomeamounts` and `getincomeamount` from your Zustand store
  const { incomeamounts, getincomeamount, loading } = incomeamount();

  useEffect(() => {
    // Fetch income amounts when the component mounts
    getincomeamount();
  }, [getincomeamount]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Income Amounts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-2">
          {incomeamounts.length > 0 ? (
            incomeamounts.map((item, index) => (
              <li
                key={index}
                className="bg-white p-4 shadow rounded-lg flex flex-col md:flex-row md:justify-between items-start md:items-center"
              >
                <div>
                  <h3 className="font-semibold text-lg">{item.Incometype}</h3>
                  <p className="text-gray-500">{item.description}</p>
                </div>
                <p className="text-blue-600 font-bold mt-2 md:mt-0">
                  Amount: RS: {item.Amount}
                </p>
              </li>
            ))
          ) : (
            <p>No income amounts found.</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default IncomeAmountList;
