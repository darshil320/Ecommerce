import { create, find, findById, findByIdAndUpdate, findByIdAndDelete } from '../models/productModel';
import ErrorHandler from '../utils/errorHandler';


export async function createProduct(req, res,next) {
    const product = await create(req.body);
    res.status(201).json({
        success: true,
        product
    })
}

//GET ALL PRODUCTS admin
export async function getAllProducts(req, res) {
    const products = await find();
    res.status(200).json({
        success: true,
        products
    })
}

//update product admin

export async function updateProduct(req, res) {
    let product = findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("product not found", 404));
        }
       

    product = await findByIdAndUpdate(req.params.id, req.body, {
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
export async function deleteProduct(req, res,next) {
    const product = await findByIdAndDelete(req.params.id);

    if (!product) {
        return next(new ErrorHandler("cant delete product cause its not found", 404));
    }
    res.status(200).json({
        success: true,
        message: "product deleted successfully"
    })
}

// GET A SINGLE PRODUCt

export async function getProduct(req, res,next) {
    const product = await findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("this perticular product is not found", 404));
    }
    res.status(200).json({
        success: true,
        product
        }
    )}