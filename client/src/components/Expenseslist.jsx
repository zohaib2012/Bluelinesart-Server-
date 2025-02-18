// ExpenseListComponent.jsx
import React, { useEffect } from 'react';
import { expensestore } from '../store/expenses';
// import { expensestore } from '../store/expensestore';

const ExpenseListComponent = () => {
  // Zustand store se expenses aur getexpense function ko access karna
  const expenses = expensestore((state) => state.expenses);
  const loading = expensestore((state) => state.loading);
  const getexpense = expensestore((state)=>state.getexpense);
;  
  // Backend se data fetch karne ke liye useEffect mein `getexpense` ko call karna
  useEffect(() => {
    getexpense();
  }, [getexpense]);
  console.log(expenses)

  return (
      <div className='ml-6'>
        <a href="/AddExpenseForm">

        <button className='border-2 border-slate-900 float-right w-20 hover:text-white hover:bg-slate-600 h-8 rounded-md'>New</button>
        </a>
      <h2 className='text-center  text-2xl m-6'>Expense List</h2>
      <div className=' flex justify-evenly font-light text-2xl'>
        <h1 className='-ml-12'>Expenses Type</h1>
        <h1 className='-ml-12'> Expenses Description</h1>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul >
          {expenses.map((expense) => (
            <li key={expense._id}>
                <div className='flex border-2 border-slate-200 p-2'>

              <h4 className='mx-64'>{expense.name}</h4>
              <p> {expense.description}</p>
                </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseListComponent;
