const { apiResponse } = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");

exports.addVariantController= asyncHandler(async(req,res)=>{
   apiResponse(res,200,"variant added successfully")
})