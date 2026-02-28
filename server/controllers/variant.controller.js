const productModel = require("../models/product.model");
const variantModel = require("../models/variant.model");
const { apiResponse } = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");

exports.addVariantController= asyncHandler(async(req,res)=>{
   let {size, color, sku, product} = req.body;
   let productData = await productModel.findOne({_id:product});
   if(!productData){
    apiResponse(res,404,"product not found")
   }
   if(productData.variantType == "multivariant"){
   let variant = new variantModel({
      size, color, sku, product
   })
   
   await variant.save()
   await productModel.findOneAndUpdate({_id: product}, {$push:{variant:variant._id}}, {new:true})
   
   apiResponse(res,201,"variant added successfully",variant)
   }else{
       apiResponse(res,500,"this product is not multivariant")
   }
   // if(!size || !color || !sku || !product){
   //  apiResponse(res,400,"all fields are required")
   // }else{
   //  apiResponse(res,200,"variant added successfully",productData)
   // }
    
})