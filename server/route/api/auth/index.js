const express = require('express');
const { signupController, loginController } = require('../../../controllers/auth.controller');
const router = express.Router();


router.post("/signup", signupController);
router.post("/login", loginController)

// router.post("/login" , (req, res) => {
//     res.send("User Login Route");
// });


module.exports = router;