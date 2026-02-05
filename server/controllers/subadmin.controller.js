const subadminModel = require("../models/subadmin.model");
const { apiResponse } = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");


exports.applySubadminController = asyncHandler(async (req, res, next) => {
  let {user, storename, logo, phone }= req.body;
  let subadmin = await subadminModel.findOne({_id: user})


  if(subadmin){
    apiResponse(res, 400, "subadmin alredy exist")

  }else{
    let applysubadmin = new subadminModel({
        user,
        storename,
        logo,
        phone
    })

    await applysubadmin.save()
     apiResponse(res, 201, "your request send successfully")

  }


});