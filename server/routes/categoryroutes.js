import express from "express"
import { createcategory, editcategory, getcategory, removecategory } from "../controller/categorycontroller.js"
let categoryroutes= express.Router()
categoryroutes.route("/addctg").post(createcategory)
categoryroutes.route("/getctg").get(getcategory)
categoryroutes.route("/editctg/:id").put(editcategory)
categoryroutes.route("/removectg/:id").delete(removecategory
)
export default categoryroutes