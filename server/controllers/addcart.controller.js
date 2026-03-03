const productModel = require("../models/product.model");
const { apiResponse } = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");

exports.addCartController = asyncHandler(async(req ,res)=>{
    
    let {variant,user,quntity,product}= req.body;
    let productData = await productModel.findOne({_id:product})

   if(productData.variantType == "multivariant"){

   }else{
    
   }
} )