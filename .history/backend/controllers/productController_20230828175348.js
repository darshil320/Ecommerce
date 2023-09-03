const Product = require('../models/productModel');
const ErrorHandler = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require('../utils/apifeatures');

exports.createProduct = catchAsyncErrors(async (req, res, next) => {

  req.body.user = req.user.id;

  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

//GET ALL PRODUCTS admin
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 8;
  const productsCount = await Product.countDocuments();

  const apiFeature= new ApiFeatures(Product.find(), req.query).search().filter().pagination(resultPerPage);
  const products = await apiFeature.query;
  res.status(200).json({
    success: true,
    products,
    productsCount,
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


//create a new review or update the review

exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
  const {rating, comment , productId} = req.body;
  const review = {
    user:req.userr._id,
    name:req.user.name,
    rating:Number(rating),
    comment,
  };

  const product = await Product.findById(productId);
  const isReviewed = product.reviews.find(rev => rev.user.toString() === req.user._id.toString());
  if(isReviewed){
    product.reviews.forEach(rev => {
      if(rev.user.toString() === req.user._id.toString()){
        rev.comment = comment;
        rev.rating = rating;

    }});
  } else{
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
      }

      let avg = 0;
      product.ratings = product.reviews.forEach(rev => {
        avg += rev.rating;
      })
});