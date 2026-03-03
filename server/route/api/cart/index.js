const express = require('express');
const { addCartController } = require('../../../controllers/addcart.controller');
const router = express.Router();


router.post("/add-cart", addCartController)





module.exports = router;    