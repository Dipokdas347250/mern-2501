const bannerModel = require("../models/banner.model");
const { apiResponse } = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");

exports.addBannerController=asyncHandler(async(req,res, next) => {
    let {filename} = req.file;
    let {url} = req.body;
    let image = `${process.env.SERVER_URL}/${filename}`;


    let banner = new bannerModel({
        image,
        url
    })

    await banner.save()
    apiResponse(res, 201, "banner created successffull", banner)

});

exports.allBannerController= asyncHandler(async(req,res,next)=>{
    let banner = await bannerModel.find({})
    apiResponse(res, 200, "all banner fatch successfull", banner)

});

exports.updateBannerController= asyncHandler(async(req, res, next)=>{
    res.send("update banner controller")
});

exports.deleteBannerController= asyncHandler(async(req, res, next)=>{
    res.send("delete banner controller")
})