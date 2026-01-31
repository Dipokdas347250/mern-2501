const categoreModel = require("../models/categore.model");
const subcategorieModel = require("../models/subcategorie.model");
const { apiResponse } = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");

exports.addSubcategory= asyncHandler(async (req, res, next) => {
    let { name , category} = req.body;
    let subcategory = new subcategorieModel({
        name, category
    });
    await subcategory.save();

   await categoreModel.findOneAndUpdate({_id:category},{$push:{subcategories:subcategory._id}}, {new:true});

    



    apiResponse(res, 200, "Subcategory created successfully", subcategory);

});