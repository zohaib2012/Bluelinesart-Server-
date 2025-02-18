import mongoose  from "mongoose";
import { config } from "dotenv";
config()
export let dbarea=()=>{

mongoose.connection.on("connected",()=>{
    console.log(`database connected sucessfully`)
})

mongoose.connection.on("error",()=>{
    console.log(`error in database connection`)
})
mongoose.connect(process.env.database)
}
