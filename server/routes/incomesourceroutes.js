import express from "express"
import { addincomesourse, editincomesources, getincomesource, removeincomesource } from "../controller/incomecontroller.js"
let incomeroutes= express.Router()
incomeroutes.route("/addincomesource").post(addincomesourse)
incomeroutes.route("/getincomesource").get(getincomesource)
incomeroutes.route("/editincomesource/:id").put(editincomesources)
incomeroutes.route("/removeincomesource/:id").delete(removeincomesource
)
export default incomeroutes