const userModel = require("../models/user.model");
const { apiResponse } = require("../utils/apiResponse");
const bcrypt = require('bcrypt');
const asyncHandler = require("../utils/asyncHandler");
const sendEmail = require("../helpers/sendEmail");


exports.signupController = asyncHandler(
    async (req, res) => {
    let { fullname, email, password, phone, address, photo } = req.body;
      bcrypt.hash(password, 12,async function(err, hash) {
       if(err){
        apiResponse(res,500,err)
       }
        let user = new userModel({
        fullname, email, password:hash, phone, address, photo
    })
    await user.save()
    sendEmail(email,fullname)
    apiResponse(res,201,"user created successfull",user)
       
    });
}
)





// exports.productsController = (req, res) => {
//     res.send("Products Controller");
// }

