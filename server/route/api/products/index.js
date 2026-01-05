const express = require('express');
const { productsController } = require('../../../controllers/auth.controller');
const router = express.Router();


router.get("/allproducts" ,productsController);


module.exports = router;    