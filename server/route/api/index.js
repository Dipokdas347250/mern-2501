const express = require('express');
const router = express.Router();
const auth = require('./auth');
const products = require('./products');
const subcategory = require('./subcategory');


// localhost:8080/api/v1/api/auth
router.use("/auth" , auth);
router.use("/products" , products)
router.use("/subcategory" , subcategory)
module.exports = router;