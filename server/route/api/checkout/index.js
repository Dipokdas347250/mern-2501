const express = require('express');
const { checkoutController, getallordersController, paymentSuccessController, paymentFailController } = require('../../../controllers/checkout.controller');
const router = express.Router();



router.post("/checkout_order" , checkoutController)
router.post("/payment_success/:id" , paymentSuccessController)
router.post("/payment_fail" , paymentFailController)
router.get("/all-orders",getallordersController)





module.exports = router;    