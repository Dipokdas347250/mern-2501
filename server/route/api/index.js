const express = require('express');
const router = express.Router();
const auth = require('./auth');
const products = require('./products');
const subcategory = require('./subcategory');
const banner = require('./banner')
const subadmin = require('./subadmin')
const mainproduct = require('./mainproduct')
const variant = require('./variant')



// localhost:8080/api/v1/api/auth
router.use("/auth" , auth);
router.use("/products" , products)
router.use("/subcategory" , subcategory)
router.use("/banner" , banner)
router.use("/subadmin", subadmin )
router.use("/mainproduct",  mainproduct)
router.use("/variant",  variant)
module.exports = router;