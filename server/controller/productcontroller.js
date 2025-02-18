import { productshm } from "../model/productmodel.js"
import { vendorshm } from "../model/vendormodel.js"

export let addproduct = async (req, res) => {
    try {

        let detail = req.body

        let { name, description, category, purchaseprice, saleprice, stock, vendorId} = detail

        let profit = saleprice - purchaseprice
        let profitmargin = ((profit / purchaseprice) * 100).toFixed(2)


        let newproductshm = await productshm.create({
            name,   
            description,
             category,
             purchaseprice, 
            saleprice, 
            stock, 
            profit, 
            profitmargin,
            vendorId
        })

await vendorshm.findByIdAndUpdate(
    vendorId,{
    $push:{
        products:{
            productId:newproductshm._id,
            purchasePrice:purchaseprice
        }
    }
    },{ new: true }
)
       

        return res.status(200).json({ message: "product added", newproductshm })
    } catch (error) {
        console.log(error)
    }
}

export let productlist = async (req, res) => {
    try {

        let productlist = await productshm.find()
        return res.status(200).json({ message: "product list", productlist })
    } catch (error) {
        console.log(error)
    }


}
export let deleteproduct = async (req, res) => {
    try {
        let { id } = req.params
        let deletedproduct = await productshm.findByIdAndDelete(id)

        return res.status(200).json({ message: "delete product sucessfully", deletedproduct })
    } catch (error) {
        console.log(error)
    }
}

export let updateproduct = async (req, res) => {
    try {
        let updatedproduct = req.body
        let { id } = req.params
        updateproduct = await productshm.findByIdAndUpdate(id, updatedproduct)

        return res.status(200).json({ message: "update product sucessfully", updateproduct })

    } catch (error) {
        console.log(error)
    }
}


export let getProductDetails = async (req, res) => {
    try {
        let { name } = req.params;
        let { quantity } = req.query;

        console.log("Received Product Name:", name);  // Log the product name
        console.log("Received Quantity:", quantity);  // Log the quantity

        let product = await productshm.findOne({ name: new RegExp(`^${name}$`, "i") });

        if (!product) {
            console.log("Product not found in database");  // Log if not found
            return res.status(404).json({ message: "Product not found" });
        }
console.log("One")
        // Calculate total amount based on sale price and quantity
        const totalAmount = product.saleprice * (quantity ? parseInt(quantity) : 1);
console.log(totalAmount)
        return res.status(200).json({
            purchaseprice: product.purchaseprice,
            saleprice: product.saleprice,
            stock: product.stock,
            totalAmount,
        });
        // console.log("two")
    } catch (error) {
        console.error("Error in getProductDetails:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


// Sale product and update stock
export let saleProduct = async (req, res) => {
    try {
        console.log("sale setion0")

        console.log("Incoming sale request");  // Debug log
        console.log("Params:", req.params);  // Check the params object
        console.log("Body:", req.body);

        let { name } = req.params;
        let { quantity } = req.body;
console.log("sale setion1")

console.log("Product Name:", name);  // Log to check if correct product name is received
console.log("Quantity:", quantity);  

console.log("sale setion2")
        let product = await productshm.findOne({ name });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Check if stock is sufficient
        if (product.stock < quantity) {
            return res.status(400).json({ message: "Insufficient stock" });
        }

        // Deduct quantity from stock
        product.stock -= quantity;
        await product.save();

         console.log("Updated Stock:", product.stock); 
        return res.status(200).json({ message: "Product sold successfully", updatedStock: product.stock });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error processing sale" });
    }
};

