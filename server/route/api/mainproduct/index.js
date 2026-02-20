const express = require('express');
const { allMainProductController } = require('../../../controllers/mainProduct.controller');
const upload = require('../../../utils/upload');
const router = express.Router();


router.post("/all-main-product", upload.array('images'), allMainProductController)





module.exports = router;    