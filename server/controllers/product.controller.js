const { apiResponse } = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");
const categoryModle = require("../models/categore.model");

exports.productsController = asyncHandler(async(req, res, next) => {
   let {name, discount, subcategory} = req.body;
   let {filename} = req.file;
   let image = `${process.env.SERVER_URL}/uploads/${filename}`;
   
//   if(!name || !discount || !subcategory || !req.file){
//     return res.status(400).json({
//       success: false,
//       message: "All fields are required"
//     });
//   }
    const category = new categoryModle({
        name,
        image,
        discount,
        subcategories: subcategory
    });

  

   await category.save();
   apiResponse(res, 201, true, "Product created successfully", category);
});
