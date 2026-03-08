const { apiResponse } = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");

exports.checkoutController = asyncHandler(async(req, res)=>{
    apiResponse(res, 200, "order successfull...")
})