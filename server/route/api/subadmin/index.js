
const express = require('express');
const { applySubadminController } = require('../../../controllers/subadmin.controller');
const router = express.Router();


router.post("/apply-subadmin", applySubadminController)


module.exports = router;    