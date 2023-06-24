import { User } from "@/models/User";
import connectDB from "@/middlewares.js/mongoose";
const CryptoJS = require("crypto-js");

const handler=async (req,res)=>{

    if(req.method==='POST'){

        console.log(req.body);
        const {name,email,password}=req.body;

        const user=new User({name,email,password:CryptoJS.AES.encrypt(password, process.env.ENCRYPTION_KEY).toString()});
        await user.save();
        res.status(200).json({success:"account created successfully"});
    }
    else{
        res.status(400).json({error:"Bad request"});
    }
}

export default connectDB(handler);