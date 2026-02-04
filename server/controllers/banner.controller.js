const asyncHandler = require("../utils/asyncHandler");

exports.addBannerController=asyncHandler(async(req,res, next) => {
    res.send("Banner API working");

})