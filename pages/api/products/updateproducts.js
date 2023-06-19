import Product from "@/models/Product";
import connectDB from "@/middlewares.js/mongoose";

const handler=async (req,res)=>{

    if(req.method==='POST'){
        for(let i=0;i<req.body.length;i++){
            const updated_products=await Product.findByIdAndUpdate(req.body[i]._id,req.body[i]);
        }
        res.status(200).json({sucess:"products updated successfully"});
    }
    else{
        res.status(400).json({sucess:"Bad request"});
    }
}

export default connectDB(handler);