
import express from "express";
import { config } from "dotenv";
import { dbarea } from "./config/dbarea.js";
import userroutes from "./routes/userroutes.js";
import prdtroutes from "./routes/productroutes.js";
import cors from "cors";
import categoryroutes from "./routes/categoryroutes.js";
import incomeroutes from "./routes/incomesourceroutes.js";
import incomeamount from "./routes/incomeamount.js";
// import expressroutes from "./routes/expenseroute.js";
import expensesamountroute from "./routes/expensesamount.js";
import expensesourceroutes from "./routes/expenseroute.js";
import vendorroutes from "./routes/vendoroute.js";
import customerroutes from "./routes/cutomerroutes.js";

config();

let startserver = () => {
    dbarea();
    let app = express();
    app.use(express.json());

    // Configure CORS correctly
    app.use(cors({

        origin:"http://localhost:5173",
       credentials:true
    }

    ))
    
    let port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });

    app.use("/api", userroutes);
    app.use("/api", prdtroutes);
    app.use("/api", categoryroutes);
    app.use("/api", incomeroutes);
    app.use("/api", incomeamount);
    app.use("/api", expensesourceroutes);
    app.use("/api", expensesamountroute);
    app.use("/api", vendorroutes);
    app.use("/api", customerroutes);
};

startserver();
