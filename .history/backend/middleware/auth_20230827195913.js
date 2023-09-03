const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const {token} = req.cookies;
    console.log(token);
        
})