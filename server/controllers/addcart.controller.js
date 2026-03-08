const cartModel = require("../models/cart.model");
const productModel = require("../models/product.model");
const { apiResponse } = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");

exports.addCartController = asyncHandler(async(req ,res)=>{
    
    let {variant,user,quntity,product}= req.body;
    let cartData = await cartModel.findOne({product}).populate({
      path: "product",
      selete: "price"
    })

    if(cartData){
      cartData.quntity++;
      cartData.totalprice = cartData.product.price * cartData.quntity;
      await cartData.save()
      apiResponse(res ,200, "quntity updated")

    }else{

       let productData = await productModel.findOne({_id:product})
       let totalprice = productData.price * (quntity ? quntity: 1);
   
   
   
      if(productData.variantType == "multivariant"){ 
         if(!variant){
            apiResponse(res, 404,"variant is required...")
   
         }else{
   
            let addtocart = new cartModel({
                user,
                quntity,
                product,
                variant,
                totalprice
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
           totalprice
        });
        await addtocart.save()
        apiResponse(res, 201,"product add to cart...", addtocart)
      }
    }

})

exports.singleCartController = asyncHandler(async(req, res)=>{
   let {user} = req.params;
   let getCartlist = await cartModel.find({user}).populate({
      path:"product",
      select: "title price image"
   }).select("-user -updatedAt -createdAt")
   apiResponse(res, 200 , "single cart fatch ...",getCartlist)
})