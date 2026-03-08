const express = require('express');
const { checkoutController } = require('../../../controllers/checkout.controller');
const router = express.Router();



router.post("./checkout" , checkoutController)





module.exports = router;    