const cartModel = require("../models/cart.model");
const checkoutModel = require("../models/checkout.model");
const { apiResponse } = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");

const SSLCommerzPayment = require('sslcommerz-lts')
const store_id = process.env.STORE_ID
const store_passwd = process.env.STORE_PASSWORD
const is_live = false 

exports.checkoutController = asyncHandler(async (req, res) => {
    
    let { user, paymentMethod, shipping } = req.body;
    let cartItems = await cartModel.find({ user })

    let totalprice = cartItems.reduce((curr , prev)=>{
        return prev.totalprice + curr
    }, 0)

 let transaction_id = Math.round(Date.now() * 100 * Math.random())

    const data = {
        total_amount: totalprice,
        currency: 'BDT',
        tran_id: transaction_id, 
        success_url: 'http://localhost:3030/success',
        fail_url: 'http://localhost:3030/fail',
        cancel_url: 'http://localhost:3030/cancel',
        ipn_url: 'http://localhost:3030/ipn',
        shipping_method: 'Courier',
        product_name: 'Computer.',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: 'Customer Name',
        cus_email: 'customer@example.com',
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: '01711111111',
        cus_fax: '01711111111',
        ship_name: 'Customer Name',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
    };




    let placeOrder = new checkoutModel({
        user,
        paymentMethod,
        shipping,
        items: cartItems,
        totalprice : totalprice
    });

    if(paymentMethod == "online"){
         const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
    sslcz.init(data).then(apiResponse => {
        // Redirect the user to payment gateway
        let GatewayPageURL = apiResponse.GatewayPageURL
        // res.redirect(GatewayPageURL)
        console.log('Redirecting to: ', GatewayPageURL)
    });
    }

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