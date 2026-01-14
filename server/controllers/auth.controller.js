const userModel = require("../models/user.model");
const { apiResponse } = require("../utils/apiResponse");
const bcrypt = require('bcrypt');
const asyncHandler = require("../utils/asyncHandler");
const sendEmail = require("../helpers/sendEmail");
const otpNumber = require("../helpers/otp");
const { vaildEmail } = require("../helpers/vaildEmail");
const jwt = require('jsonwebtoken');


exports.signupController = asyncHandler(
    async (req, res) => {
    let { fullname, email, password, phone, address, photo,otp } = req.body;
   let emailCheker = vaildEmail(email);

   if(!emailCheker){
     apiResponse(res,400,"invaild Email")
   }else{
      bcrypt.hash(password, 12,async function(err, hash) {
       if(err){
        apiResponse(res,500,err)
       }
       let otp = otpNumber()
        let user = new userModel({
        fullname, email, password:hash, phone, address, photo,otp
    })
    await user.save()
    sendEmail(email,fullname,otp)
    apiResponse(res,201,"user created successfull",user)
       
    });
   }

    
}
)


exports.loginController = asyncHandler(async(req,res)=>{
    let {email, password}= req.body;
 let emailCheker = vaildEmail(email);

   if(!emailCheker){
     apiResponse(res,400,"invaild Email")
   }else{
    let loginUser = await userModel.findOne({email})
  if(!loginUser){
    apiResponse(res,404,"email not found")
  }else{
    bcrypt.compare(password, loginUser.password,function(err,result){
        if(err){
            apiResponse(res,500,"some went wrong")
        }else{
            if(!result){
              apiResponse(res,401,"Invalid password")
            }else{
              let user ={
                _id: loginUser._id,
                fullname:loginUser.fullname,
                email:loginUser.email,
                role:loginUser.role
              }

              let token = jwt.sign({ user}, process.env.JWT_SECRET,{ expiresIn: "2m"});
              apiResponse(res,200,"user login success",{...user, token})
            }
            
        }
    })
  }

   }
  
})

exports.alluserController = asyncHandler(async(req,res)=>{
   let users = await userModel.find({}).select("fullname email role")
   apiResponse(res,200,"fetch all users successful",users)
})






// exports.productsController = (req, res) => {
//     res.send("Products Controller");
// }

