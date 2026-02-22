const productModel = require("../models/product.model");
const { apiResponse } = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");

exports.allMainProductController = asyncHandler(async (req, res) => {
  let filenames = req.files.map((file) => {
  return `${process.env.SERVER_URL}/${file.filename }`     
  });
  let products = new productModel({
    ...req.body,
    image: filenames[0]
  })
  await products.save();
  apiResponse(res, 201, "Main Product created successfully", products);
  
})