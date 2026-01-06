exports.globalerrorhandler = (error, req, res, next) => {
    
     if (error.name === 'ValidationError') {
    let errors = {};
    Object.keys(error.errors).forEach((key) => {
      errors[key] = error.errors[key].message;
    });
    return res.status(400).json({success:false,message:errors}); // Send specific error messages to client
  }else if(error.message){
   return res.status(500).json({success:false, message:error.message})
  }else{
    return res.status(500).json({success:false, message:"Something went wrong"})
  }
  

}