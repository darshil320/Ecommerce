const ErrorHandler = require("../utils/errorhander");

module.exports = (err,req,res,next) => {
    err.statusCode = err.statusCode || 500;
    err.message= err.message || "Internal Server Error";

    if (err.name === "CastError") {
      const message = `Resource not found. Invalid: ${err.path}`;
      err = new ErrorHandler(message, 400);
    }
    //mongoose duplicate key erro
    if (err.code === 11000) {
      const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
      err = new ErrorHandler(message, 400);      
    }
    // wrong jwt token
    if (err.name === "JsonWebTokenError") {
      const message = `Json Web Token is invalid, Try again `;
      err = new ErrorHandler(message, 400); 
    }

    //jwt expire error
    if (err.name === "TokenExpiredError") {
      const message = `Json Web Token is Expired, Try again `;
      err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        error:err.message,
    })
}


//get user detail

exports.getUserDetails = catchAsyncErrors(async (req,res,next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success:true,
    user,
  })

})

