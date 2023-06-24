import {Product} from "@/models/Product";
import connectDB from "@/middlewares.js/mongoose";

const handler=async (req,res)=>{

    if(req.method==='POST'){
        for(let i=0;i<req.body.length;i++){

            const product = new Product({
                title:req.body[i].title,
                slug:req.body[i].slug,
                desc:req.body[i].desc,
                image:req.body[i].image,
                category:req.body[i].category,
                price:req.body[i].price,
                size:req.body[i].size,
                color:req.body[i].color,
                availableQty:req.body[i].availableQty,
            })
            await product.save();
        }
        res.status(200).json({sucess:"products saved successfully"});
    }
    else{
        res.status(400).json({sucess:"Bad request"});
    }
}

export default connectDB(handler);