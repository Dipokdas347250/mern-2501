const express = require('express');
const { signupController, loginController, alluserController } = require('../../../controllers/auth.controller');
const { validAuthorize } = require('../../../middleware/validAuthorize');
const { isAdminorsubadmin } = require('../../../middleware/isAdminorsubadmin');
// const { vailddataCheker } = require('../../../helpers/vailddatauser');
const router = express.Router();


router.post("/signup", signupController);
router.post("/login", loginController)

// router.get("/alluser", vailddataCheker, alluserController)
router.get("/alluser", validAuthorize,(req,res,next)=>isAdminorsubadmin(req,res,next,["admin","subadmin"]), alluserController)





module.exports = router;