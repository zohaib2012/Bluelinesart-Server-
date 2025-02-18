import express from "express"
import { addproduct, deleteproduct, getProductDetails, productlist, saleProduct, updateproduct } from "../controller/productcontroller.js"

let prdtroutes=express.Router()
prdtroutes.route("/addproduct").post(addproduct)
prdtroutes.route("/productlist").get(productlist)
prdtroutes.route("/deleteproduct/:id").delete(deleteproduct)
prdtroutes.route("/updateproduct/:id").put(updateproduct)


// Route to get product details by name and calculate total based on quantity
prdtroutes.route('/productdetails/:name').get(getProductDetails)

// Route to handle product sale (update stock after purchase)
prdtroutes.route('/saleproduct/:name').post(saleProduct)



export default prdtroutes