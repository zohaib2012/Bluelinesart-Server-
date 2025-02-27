



import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>




      <div className=" mx-auto bg-white p-6 rounded-lg shadow-lg flex justify-center mt-10">
        {/* <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Beautiful Buttons</h1> */}
        {/* Solid Buttons */}
        <div className="mb-8">
          {/* <h2 className="text-xl font-semibold mb-4">Solid Buttons</h2> */}
          <div className="flex flex-wrap gap-4">



            <Link href="/ProductSaleForm">

              <button className="inline-flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition transform hover:translate-y-[-2px] hover:shadow-md">
                <i className="fas fa-check mr-2" /> ProductSaleForm
              </button>/
            </Link>

            <Link href="/AddExpenseAmountForm">
              <button className="inline-flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition transform hover:translate-y-[-2px] hover:shadow-md">
                <i className="fas fa-times mr-2" />AddExpenseAmountForm
              </button>
            </Link>
            <Link href="/ExpensesAmountList">
              <button className="inline-flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition transform hover:translate-y-[-2px] hover:shadow-md">
                <i className="fas fa-times mr-2" />ExpensesAmountList
              </button>
            </Link>
            <Link href="/ExpenseListComponent">
              <button className="inline-flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition transform hover:translate-y-[-2px] hover:shadow-md">
                <i className="fas fa-times mr-2" />ExpenseListComponent
              </button>
            </Link>




            <Link href="/ProductForm">
              <button className="inline-flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition transform hover:translate-y-[-2px] hover:shadow-md">
                <i className="fas fa-plus mr-2" /> ProductForm
              </button>
            </Link>

            <Link href="/ProductList">
              <button className="inline-flex items-center justify-center bg-lime-950 text-white px-4 py-2 rounded hover:bg-lime-900 transition transform hover:translate-y-[-2px] hover:shadow-md">
                <i className="fas fa-info mr-2" /> product
              </button>
            </Link>
            <Link href="/Categories">
              <button className="inline-flex items-center justify-center bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-900 transition transform hover:translate-y-[-2px] hover:shadow-md">
                <i className="fas fa-info mr-2" /> Categories
              </button>

            </Link>

            <Link href="IncomeAmountList">
              <button className="inline-flex items-center justify-center bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition transform hover:translate-y-[-2px] hover:shadow-md">
                <i className="fas fa-exclamation-triangle mr-2" /> IncomeAmountList
              </button>
            </Link>
            <Link href="/AddIncomeSourceForm">
              <button className="inline-flex items-center justify-center bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition transform hover:translate-y-[-2px] hover:shadow-md">
                <i className="fas fa-info mr-2" /> AddIncomeSourceForm
              </button>
            </Link>
            <Link href="/incomesources">
              <button className="inline-flex items-center justify-center bg-purple-900 text-white px-4 py-2 rounded hover:bg-purple-950 transition transform hover:translate-y-[-2px] hover:shadow-md">
                <i className="fas fa-info mr-2" /> incomesources
              </button>
            </Link>
            <Link href="/AddVendorForm">

              <button className="inline-flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition transform hover:translate-y-[-2px] hover:shadow-md">
                <i className="fas fa-check mr-2" />AddVendorForm
              </button>
            </Link>
            <Link href="/VendorList">

              <button className="inline-flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition transform hover:translate-y-[-2px] hover:shadow-md">
                <i className="fas fa-check mr-2" />VendorList
              </button>
            </Link>

          </div>
        </div>
        {/* Outline Buttons */}
        {/* <div className="mb-8">
    <h2 className="text-xl font-semibold mb-4">Outline Buttons</h2>
    <div className="flex flex-wrap gap-4">
      <button className="inline-flex items-center justify-center border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition transform hover:translate-y-[-2px] hover:shadow-md">
        <i className="fas fa-check mr-2" /> Primary
      </button>
      <button className="inline-flex items-center justify-center border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white transition transform hover:translate-y-[-2px] hover:shadow-md">
        <i className="fas fa-plus mr-2" /> Success
      </button>
      <button className="inline-flex items-center justify-center border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition transform hover:translate-y-[-2px] hover:shadow-md">
        <i className="fas fa-times mr-2" /> Danger
      </button>
      <button className="inline-flex items-center justify-center border border-yellow-500 text-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-white transition transform hover:translate-y-[-2px] hover:shadow-md">
        <i className="fas fa-exclamation-triangle mr-2" /> Warning
      </button>
      <button className="inline-flex items-center justify-center border border-gray-500 text-gray-500 px-4 py-2 rounded hover:bg-gray-500 hover:text-white transition transform hover:translate-y-[-2px] hover:shadow-md">
        <i className="fas fa-info mr-2" /> Info
      </button>
    </div>
  </div> */}
        {/* Text Buttons */}
        {/* <div className="mb-8">
    <h2 className="text-xl font-semibold mb-4">Text Buttons</h2>
    <div className="flex flex-wrap gap-4">
      <button className="inline-flex items-center justify-center text-blue-500 px-4 py-2 rounded hover:bg-blue-100 transition transform hover:translate-y-[-2px] hover:shadow-md">
        <i className="fas fa-check mr-2" /> Primary
      </button>
      <button className="inline-flex items-center justify-center text-green-500 px-4 py-2 rounded hover:bg-green-100 transition transform hover:translate-y-[-2px] hover:shadow-md">
        <i className="fas fa-plus mr-2" /> Success
      </button>
      <button className="inline-flex items-center justify-center text-red-500 px-4 py-2 rounded hover:bg-red-100 transition transform hover:translate-y-[-2px] hover:shadow-md">
        <i className="fas fa-times mr-2" /> Danger
      </button>
      <button className="inline-flex items-center justify-center text-yellow-500 px-4 py-2 rounded hover:bg-yellow-100 transition transform hover:translate-y-[-2px] hover:shadow-md">
        <i className="fas fa-exclamation-triangle mr-2" /> Warning
      </button>
      <button className="inline-flex items-center justify-center text-gray-500 px-4 py-2 rounded hover:bg-gray-100 transition transform hover:translate-y-[-2px] hover:shadow-md">
        <i className="fas fa-info mr-2" /> Info
      </button>
    </div>
  </div> */}
      </div>





    </div>
  )
}

export default Nav
