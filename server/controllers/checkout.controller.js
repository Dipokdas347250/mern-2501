const cartModel = require("../models/cart.model");
const checkoutModel = require("../models/checkout.model");
const { apiResponse } = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");

exports.checkoutController = asyncHandler(async (req, res) => {
    
    let { user, paymentMethod, shipping } = req.body;
    let cartItems = await cartModel.find({ user })

    let totalprice = cartItems.reduce((curr , prev)=>{
        return prev.totalprice + curr
    }, 0)

    let placeOrder = new checkoutModel({
        user,
        paymentMethod,
        shipping,
        items: cartItems,
        totalprice : totalprice
    });

    await placeOrder.save()
    apiResponse(res, 201, "order successfull...", placeOrder)
})

exports.getallordersController = asyncHandler(async(req,res)=>{
    let allorder = await checkoutModel.find({})
    .populate({
        path: "user",
        select: "fullname email -_id"
    })
    .populate({
        path: "items.product",
        select: "title description image price -_id"
        
    })
    apiResponse(res, 200, "order fatch successfull...", allorder)
})