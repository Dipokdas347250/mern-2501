const cartModel = require("../models/cart.model");
const checkoutModel = require("../models/checkout.model");
const { apiResponse } = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");

exports.checkoutController = asyncHandler(async (req, res) => {
    // apiResponse(res, 200, "order successfull...")
    let { user, paymentMethod, shipping, items } = req.body;
    let cartItems = await cartModel.find({ user })

    let placeOrder = new checkoutModel({
        user,
        paymentMethod,
        shipping,
        items: cartItems,
    });

    await placeOrder.save()
    res.send(placeOrder)
})