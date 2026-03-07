const cartModel = require("../models/cart.model");
const productModel = require("../models/product.model");
const { apiResponse } = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");

exports.addCartController = asyncHandler(async(req ,res)=>{
    
    let {variant,user,quntity,product}= req.body;
    let productData = await productModel.findOne({_id:product})

   if(productData.variantType == "multivariant"){ 
      if(!variant){
         apiResponse(res, 404,"variant is required...")

      }else{

         let addtocart = new cartModel({
             user,
             quntity,
             product,
             variant
          });
           await addtocart.save()
          apiResponse(res, 201,"product add to cart...", addtocart)
      }
       
   }else{
    // single variant product
     let addtocart = new cartModel({
        user,
        quntity,
        product,
     });
     await addtocart.save()
     apiResponse(res, 201,"product add to cart...", addtocart)
   }
} )