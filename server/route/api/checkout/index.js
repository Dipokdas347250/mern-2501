const express = require('express');
const { checkoutController, getallordersController } = require('../../../controllers/checkout.controller');
const router = express.Router();



router.post("/checkout_order" , checkoutController)
router.get("/all-orders",getallordersController)





module.exports = router;    