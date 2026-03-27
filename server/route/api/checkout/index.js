const express = require('express');
const { checkoutController } = require('../../../controllers/checkout.controller');
const router = express.Router();



router.post("/checkout_order" , checkoutController)





module.exports = router;    