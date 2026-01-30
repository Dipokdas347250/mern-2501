const express = require('express');
const upload = require('../../../utils/upload');

const { productsController } = require('../../../controllers/product.controller');

const router = express.Router();


router.get("/allproducts" ,upload.single('image'),productsController);


module.exports = router;    