const Product = require('../models/productModel');
const ErrorHandler = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

//GET ALL PRODUCTS admin
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
});

//update product admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("product not found", 204));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
});


//delete product
exports.deleteProduct = catchAsyncErrors(
    async (req, res,next) => {
    try {
        const id = req.params.id;
        
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
          return next(
            new ErrorHandler("cant delete product cause its not found", 404)
          );
        }
        res.status(200).json({
          success: true,
          message: "product deleted successfully",
        });

    } catch (error) {
        return next(new ErrorHandler(error.message, 404));
    }
    const product = await Product.findByIdAndDelete(req.params.id);
    

    if (!product) {
        return next(new ErrorHandler("cant delete product cause its not found", 404));
    }
    res.status(200).json({
        success: true,
        message: "product deleted successfully"
    })
}
)

// GET A SINGLE PRODUCt

exports.getProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
});