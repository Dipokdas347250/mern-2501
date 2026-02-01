const express = require('express');
const { addSubcategory, updateSubcategory } = require('../../../controllers/subcategory');
const router = express.Router();


router.post("/add-subcategory", addSubcategory );
router.patch("/update-subcategory/:id",updateSubcategory)




module.exports = router;    