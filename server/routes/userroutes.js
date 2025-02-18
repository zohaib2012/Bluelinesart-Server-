import express from "express";
import { login, logout, signup } from "../controller/usercontroller.js";
let userroutes=express.Router()
userroutes.route("/signup").post(signup)
userroutes.route("/login").post(login)
userroutes.route("/logout").post(logout)
export default userroutes