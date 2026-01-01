const express = require('express');
const router = express.Router();


router.get("/allproducts" , (req, res) => {
    res.send("All Products Route");
});


module.exports = router;    