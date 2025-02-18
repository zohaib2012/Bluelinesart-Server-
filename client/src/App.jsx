import React from 'react'
import Lyout from './components/Lyout'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import AddIncomeSourceForm from './components/AddIncomeSourceForm'
import IncomeSourceCards from './components/IncomeSourceslist'
import IncomeAmountForm from './components/IncomeAmountForm'
import ExpenseListComponent from './components/Expenseslist'
import AddExpenseForm from './components/Expenses'
import CategoryForm from './components/Categories '
import ProductForm from './components/Productform'
import ProductSaleForm from './components/ProductSaleForm'
import Addincomeamountform from './components/Addincomeamountform'
import IncomeAmountList from './components/IncomeAmountList'
import { ProductList } from './components/Productlist'
import  { AddExpenseAmountForm } from './components/AddExpenseAmountForm'
import { ExpensesAmountList } from './components/ExpensesAmountList'
import { AddVendorForm } from './components/AddVendorForm'
import VendorList from './components/VendorList'
// import AddVendorForms from './components/AddVendorForms'
// import VendorComponent from './components/VendorComponent'

const App = () => {
  return (
    <div>

{/* <AddVendorForms/> */}
  <Lyout>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/incomesources' element={<IncomeSourceCards/>}/>
      <Route path='/AddIncomeSourceForm' element={<AddIncomeSourceForm/>}/>
      <Route path='/IncomeAmountForm' element={<IncomeAmountForm/>}/>
      <Route path='/AddExpenseForm' element={<AddExpenseForm/>}/>
      <Route path='/ExpenseListComponent' element={<ExpenseListComponent/>}/>
      <Route path='/Categories' element={<CategoryForm/>}/>
      <Route path='/ProductForm' element={<ProductForm/>}/>
      <Route path='/ProductSaleForm' element={<ProductSaleForm/>}/>
      <Route path='/Addincomeamountform' element={<Addincomeamountform/>}/>
      <Route path='/IncomeAmountList' element={<IncomeAmountList/>}/>
      <Route path='/ProductList' element={<ProductList/>}/>
      <Route path='/ExpensesAmountList' element={<ExpensesAmountList/>}/>
      <Route path='/AddExpenseAmountForm' element={<AddExpenseAmountForm/>}/>
      <Route path='/AddVendorForm' element={<AddVendorForm/>}/>
      <Route path='/VendorList' element={<VendorList/>}/>

    </Routes>
  </Lyout>
  {/* <VendorComponent/>/ */}

      </div>
  )
}

export default App
