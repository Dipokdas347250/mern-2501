const express = require('express');
const upload = require('../../../utils/upload');

const { productsController, allCategoryController } = require('../../../controllers/product.controller');

const router = express.Router();


router.get("/allproducts" ,upload.single('image'),productsController);
router.get("/allCategory", allCategoryController);


module.exports = router;    