import express from "express";
import { addvender, editvendordata, getvendor, removevendor } from "../controller/vendorcontroller.js";
let vendorroutes=express.Router()
vendorroutes.route("/addvender").post(addvender)
vendorroutes.route("/getvender").get(getvendor)
vendorroutes.route("/editvenderdata/:id").put(editvendordata)
vendorroutes.route("/removevender/:id").delete(removevendor)
export default vendorroutes