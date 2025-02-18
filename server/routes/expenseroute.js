import express from "express"
import { addexpenses, editexpenses, getexpenses, removeexpenses } from "../controller/expensescontroller.js"
let expensesourceroutes=express.Router()

expensesourceroutes.route("/addexpenses").post(addexpenses)
expensesourceroutes.route("/getexpenses").get(getexpenses)
expensesourceroutes.route("/editexpenses/:id").put(editexpenses)
expensesourceroutes.route("/removeexpenses/:id").delete(removeexpenses
    
)

export default expensesourceroutes
