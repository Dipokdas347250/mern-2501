const express = require('express');
const router = express.Router();
const auth = require('./auth');
const products = require('./products');

// localhost:8080/api/v1/api/auth
router.use("/auth" , auth);
router.use("/products" , products)
module.exports = router;