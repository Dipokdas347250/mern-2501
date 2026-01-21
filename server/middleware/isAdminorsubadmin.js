const { apiResponse } = require("../utils/apiResponse")

exports.isAdminorsubadmin=(req,res,next,role)=>{
   if(role.includes(req.session.user.role)){
    next()
   }else{
    apiResponse(res,403,"Access denied. Admin or Subadmin required.")
   }

    
}
    