import { User } from "@/models/User";
import connectDB from "@/middlewares.js/mongoose";
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken'); 

const handler=async (req,res)=>{

    if(req.method==='POST'){

        let user=await User.findOne({email : req.body.email});
        if(user){
            
            let bytes  = CryptoJS.AES.decrypt(user.password, process.env.ENCRYPTION_KEY);
            let decrypted_password = bytes.toString(CryptoJS.enc.Utf8);

            if(req.body.password===decrypted_password){

                const data={name:user.name,email:user.email}
                const token=jwt.sign(data,process.env.JWT_SECRET_KEY);
                res.status(200).json({success:true,token});

            }
            else{
                res.status(401).json({success:false,error:"Invalid credentials"});
            }
        }
        else{
            res.status(401).json({success:false,error:"No user found"});
        } 
    }
    else{
        res.status(400).json({error:"Bad request"});
    }
}

export default connectDB(handler);