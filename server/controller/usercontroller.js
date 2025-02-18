import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { config } from "dotenv"
import { usershm } from "../model/usermodel.js"
config()
export let signup=async (req, res)=>{
    try {
        
  
let detail= req.body
let{name, email, password, confirmpassword}=detail
if(password !== confirmpassword){
    return res.status(400).json({message:"invalid password"})
}
let hasspassword= await bcrypt.hash(password, 10)
let newusershm = usershm.create({
    name,
    email,
    password:hasspassword,
    confirmpassword
})

let Signuptoken=jwt.sign({_id:(await newusershm)._id}, process.env.secretkey1,{expiresIn:"10h"})
res.cookie("Signuptoken",Signuptoken,{
httponly:true,
secure:true,
expiresIn:"10*60*60"
})
return res.status(200).json({message:"user signup sucessfully"})

} catch (error) {
      console.log(error)  
}
}
export let login=async (req, res)=>{
try {
    let detail=req.body
    let {email,password}=detail
    let user1= await usershm.findOne({email:email})
    if(!user1){
        return res.status(400).json({message:"email not found signup first"})

    }
    let user2 =await bcrypt.compare(password, user1.password)
let Logintoken=jwt.sign({_id:user1._id}, process.env.secretkey1,{expiresIn:"5h"})
res.cookie("Logintoken",Logintoken,{
    secure:true,
    httponly:true,
    expiresIn:"5*60*60"
})
    return res.status(200).json({message:"login sucessfully",Logintoken})
} catch (error) {
    console.log(error)
}
}

export let logout=(req, res)=>{
try {
    res.cookie("Logintoken","",{
        expires: new Date(0),
        httponly:true,
        secure:true
    })
    res.cookie("Signuptoken","",{
        expires: new Date(0),
        httponly:true,
        secure:true
    })
    return res.status(200).json({message:"logout sucessfully"})
   
} catch (error) {   
    console.log(error)
}
}