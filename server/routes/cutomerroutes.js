import express from "express";
import { createcustomer, editcustomerdata, getcustomers, removecustomer } from "../controller/customercontroller.js";
let customerroutes=express.Router()

customerroutes.route("/createcustomer").post(createcustomer)
customerroutes.route("/getcustomers").get(getcustomers)
customerroutes.route("/editcustomerdata/:id").put(editcustomerdata)
customerroutes.route("/removecustomer/:id").delete(removecustomer)

export default customerroutes