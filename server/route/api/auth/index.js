const express = require('express');
const { signupController, loginController, alluserController } = require('../../../controllers/auth.controller');
const { vailddataCheker } = require('../../../helpers/vailddatauser');
const router = express.Router();


router.post("/signup", signupController);
router.post("/login", loginController)

router.get("/alluser", vailddataCheker, alluserController)

// router.post("/login" , (req, res) => {
//     res.send("User Login Route");
// });


module.exports = router;