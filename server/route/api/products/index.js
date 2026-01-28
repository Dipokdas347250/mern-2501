const express = require('express');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const { productsController } = require('../../../controllers/product.controller');

const router = express.Router();


router.get("/allproducts" ,upload.single('video'),productsController);


module.exports = router;    