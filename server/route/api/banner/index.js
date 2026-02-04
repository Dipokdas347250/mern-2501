const express = require('express');
const { addBannerController } = require('../../../controllers/banner.controller');
const upload = require('../../../utils/upload');
const router = express.Router();

router.post("/add-banner", upload.single(), addBannerController)







module.exports = router;    