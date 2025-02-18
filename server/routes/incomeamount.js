import express from "express"
import { addincomeamount, editincomeamount, getincomeamount, incomeamountdate, removeincomeamount } from "../controller/incomeamount.js"

let incomeamount=express.Router()
incomeamount.route("/addincomeamount").post(addincomeamount)
incomeamount.route("/getincomeamount").get(getincomeamount)
incomeamount.route("/incomeamountdate/by-date").get(incomeamountdate)
incomeamount.route("/getincomeamount").get(getincomeamount)
incomeamount.route("/removeincomeamount/:id").delete(removeincomeamount)
incomeamount.route("/editincomeamount/:id").put(editincomeamount)
export default incomeamount