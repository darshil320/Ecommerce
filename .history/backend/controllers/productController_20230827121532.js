const Product = require('../models/productModel');
const ErrorHandler = require("../utils/errorhander");


exports.createProduct = async (req, res,next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
}

//GET ALL PRODUCTS admin
exports.getAllProducts = async (req, res,next) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    })
}

//update product admin

exports.updateProduct = async (req, res,next) => {
    let product = Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("product not found", 201));
        }
       

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
});
    res.status(200).json({
        success: true,
        product
    })
}


//delete product
exports.deleteProduct = async (req, res,next) => {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
        return next(new ErrorHandler("cant delete product cause its not found", 201));
    }
    res.status(200).json({
        success: true,
        message: "product deleted successfully"
    })
}

// GET A SINGLE PRODUCt

exports.getProduct = async (req, res,next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("product not found", 404));
    }
    res.status(200).json({
        success: true,
        product
        }
    )}