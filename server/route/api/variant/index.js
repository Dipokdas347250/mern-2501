const express = require('express');
const { addVariantController } = require('../../../controllers/variant.controller');
const router = express.Router();




router.post("/add-variant", addVariantController)



module.exports = router;    