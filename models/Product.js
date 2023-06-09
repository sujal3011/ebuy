const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{type : String, required : true},
    slug:{type : String, required : true,unique : true},
    desc:{type : String, required : true},
    image:{type : String, required : true},
    category:{type : String, required : true},
    price:{type : Number, required : true},
    size:{type : String},
    color:{type : String},
    availableQty:{type : String,required : true},

},{timestamps: true});


export const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

