const ErrorHandler = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
//register a user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is sample id",
      url: "this is sample url",
    },
  });
  sendToken(user, 201, res);
});

//login a user

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const {email,password} = req.body;

    if(!email || !password){
        return next(new ErrorHandler("Please Enter Email and Password",400))
    }

    const user = await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("Invalid Email or Password",401))
    }

    const isPasswordMatched = await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Email or Password",401))
    }

sendToken(user,200,res);
});

//logout user

exports.logoutUser = catchAsyncErrors(async (req, res, next) => {   
    res.cookie('token',null,{
        expires: new Date(Date.now()),
        httpOnly: true
    });
    res.status(200).json({
        success:true,
        message:"Logged Out"})

})

//Forgot password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
   
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: `Ecommerce Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.message, 500));
  }})


  //RESET PASSWORD

exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex"); 
    
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
});

    if(!user){ 
        return next(new ErrorHandler("Reset Password Token is invalid or has been expired",400));
    }
    if(req.body.password !== req.body.confirmPassword){
        return next(new ErrorHandler("Password does not match",400));
    
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    sendToken(user,200,res);
})

//get user detail

exports.getUserDetails = catchAsyncErrors(async (req,res,next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success:true,
    user,
  })

})

//UPDATE USER PASSWORD


exports.updatePassword = catchAsyncErrors(async (req,res,next) => {

    const user = await User.findById(req.user.id).select("+password");

  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if(!isPasswordMatched){
    return next(new ErrorHandler("Old Password is incorrect",400));
  }

  if(req.body.newPassword !== req.body.confirmPassword){
    return next(new ErrorHandler("Password does not match",400));
  }

  user.password = req.body.newPassword;

  await user.save();
  sendToken(user,200,res);

})

//UPDATE USER PROFILE

exports.updateProfile = catchAsyncErrors(async (req,res,next) => {
    const newUserDate = {
        name:req.body.name,
        email:req.body.email,
    }
    //we will add cloudinary later

    const user = await User.findByIdAndUpdate(req.user.id,newUserDate,{
        new:true,
        useFindAndModify:false,
    });
    res.status(200).json({
        success:true
    })
})

//get all user 

exports.getAllUser = catchAsyncErrors(async (req,res,next) => {
    const users = await User.find();
    res.status(200).json({
      success:true,
      users,
    })

  });


//GET A SINGLE USER

exports.getSingleUser = catchAsyncErrors(async (req,res,next) => {
  const user = await User.findById(req.params.id);
  if(!user){
    return next(new ErrorHandler(`User does not exist with id: ${req.params.id}`));  
}
  res.status(200).json({
    success:true,
    user,
  })
})

//UPDATE USER ROLE 

exports.updateUserRole = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };
 
  //we will add cloudinary later

  const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    useFindAndModify: false,
  });

   if (!user) {
     return next(
       new ErrorHandler(`User does not exist with id: ${req.params.id}`)
     );
   }
  res.status(200).json({
    success: true,
  });
});

//delete user 
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id); 

  //we will remove  cloudinary later
  if(!user){
    return next(new ErrorHandler(`User does not exist with id: ${req.params.id}`),404);
  }

  res.status(200).json({
    success: true,
  });
});