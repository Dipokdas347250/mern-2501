const express = require('express');
const { addCartController, singleCartController } = require('../../../controllers/addcart.controller');
const router = express.Router();


router.post("/add-cart", addCartController)
router.get("/singlecart/:user" , singleCartController)





module.exports = router;    