const { apiResponse } = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");
const categoreModel = require("../models/categore.model");
const path = require("path");
const fs = require("fs");
const slugify = require('slugify')


exports.productsController = asyncHandler(async (req, res, next) => {
    let { name, discount, subcategories } = req.body;
    let { filename } = req.file;
   let slug = slugify(name, {
  replacement: '-',  
  remove: undefined, 
  lower: true,            
  trim: true         
})
    let image = `${process.env.SERVER_URL}/${filename}`;

    let categorey = new categoreModel({
        name, discount, subcategories, image, slug

    })
    await categorey.save();
    apiResponse(res, 200, "Product created successfully", categorey);
});

exports.updateCategoryController = asyncHandler(async(req,res,next)=>{
    let {id}= req.params;
    let {name, discount}= req.body;
     let { filename } = req.file;
    if(req.file){
        let categoryImage = await categoreModel.findOne({_id: id})
        let filepath = categoryImage.image.split("/")
        let imagepath = filepath[filepath.length - 1]
        
        let oldpath = path.join(__dirname, "../uploads")
        fs.unlink(`${oldpath}/${imagepath}`, async(err)=>{
            if(err){
               apiResponse(res,500,err.message);

            }else{
            let image = `${process.env.SERVER_URL}/${filename}`;
            categoryImage.image = image;
            await categoryImage.save();
             apiResponse(res,200,"category updateed")

            }
        })
        
    
    }else{
       let update = await categoreModel.findOneAndUpdate({_id:id},{name, discount},{new:true})
       apiResponse(res,200,"category updateed", update)
    }

});

exports.deleteCategoryController = asyncHandler(async(req,res,next)=>{
        let {id}= req.params;
        let categoryDelete = await categoreModel.findOne({_id: id})
          let filepath = categoryDelete.image.split("/")
        let imagepath = filepath[filepath.length - 1]
        
        let oldpath = path.join(__dirname, "../uploads")
        fs.unlink(`${oldpath}/${imagepath}`, async(err)=>{
            if(err){
               apiResponse(res,500,err.message);

            }else{
            await categoreModel.findOneAndDelete({_id: id})
             apiResponse(res,200,"category deletede")

            }
        })


});
exports.allCategoryController = asyncHandler(async (req, res, next) => {
    let categories = await categoreModel.find({}).populate('subcategories');
    apiResponse(res, 200, "All categories fetched successfully", categories);

});

exports.singleCategoryController = asyncHandler(async (req,res,next)=>{
    let {slug}= req.params;
    let categorySingle = await categoreModel.findOne({slug});

    if(categorySingle){
            apiResponse(res, 200, "Slug categories fetched successfully", categorySingle);

    }else{
            apiResponse(res, 404, "Slug categories fetched not found");

    }


})
