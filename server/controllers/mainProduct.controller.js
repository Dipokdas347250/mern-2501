const productModel = require("../models/product.model");
const asyncHandler = require("../utils/asyncHandler");

exports.allMainProductController = asyncHandler(async (req, res) => {
    console.log(req.files);
    
  res.send(req.body);

  let products = new productModel({
    ...req.body,
    images: req.files.map(file => file.path)
  })
  await products.save();
  
})