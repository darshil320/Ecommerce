const Product = require('../models/productModel');


exports.createProduct = async (req, res,next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
}

//GET ALL PRODUCTS admin
exports.getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    })
}

//update product admin

exports.updateProduct = async (req, res) => {
    let product = Product.findById(req.params.id);
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "product not found"
        })
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
 
};

//delete product
exports.deleteProduct = async (req, res,next) => {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
        return res.status(500).json({
            success: false,
            message: "product not found"
        })
    }
    product.remove();
    res.status(200).json({
        success: true,
        message: "product deleted successfully"
    })
}
