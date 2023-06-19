import Product from "@/models/Product";
import connectDB from "@/middlewares.js/mongoose";

const handler=async (req,res)=>{
    const {category} = req.query
    const all_products=await Product.find({category: category});
    res.status(200).json({all_products});
}

export default connectDB(handler);