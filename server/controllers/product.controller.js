const { apiResponse } = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");
const categoreModel = require("../models/categore.model");

exports.productsController = asyncHandler(async (req, res, next) => {
    let { name, discount, subcategories } = req.body;
    let { filename } = req.file;
    let image = `${process.env.SERVER_URL}/${filename}`;

    let categorey = new categoreModel({
        name, discount, subcategories, image

    })
    await categorey.save();
    apiResponse(res, 200, "Product created successfully", categorey);
});

exports.allCategoryController = asyncHandler(async (req, res, next) => {
    let categories = await categoreModel.find({}).populate('subcategories');
    apiResponse(res, 200, "All categories fetched successfully", categories);

});
