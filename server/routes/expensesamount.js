import express from "express";
import { addexpensesamount, deleteexpenseslist, editexpensesamountlist, getexpensesamountlist } from "../controller/expenesamount.js";
// import { editexpenses } from "../controller/expensescontroller";
let expensesamountroute=express.Router()
expensesamountroute.route("/addaddexpensesamount").post( addexpensesamount)
expensesamountroute.route("/getexpensesamountlist").get( getexpensesamountlist)
expensesamountroute.route("/editexpensesamountlist/:id").put( editexpensesamountlist)
expensesamountroute.route("/deleteexpenseslist/:id").delete( deleteexpenseslist)
export default expensesamountroute
