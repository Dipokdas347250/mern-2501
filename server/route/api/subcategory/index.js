const express = require('express');
const { addSubcategory } = require('../../../controllers/subcategory');
const router = express.Router();


router.post("/add-subcategory", addSubcategory );




module.exports = router;    