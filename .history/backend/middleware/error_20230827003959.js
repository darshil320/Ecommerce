import ErrorHandler from "../utils/errorHandler";

app.use(express.json());

export default (err,req,res,next) => {
    err.statusCode = err.statusCode || 500;
    err.message= err.message || "Internal Server Error";
    res.status(err.statusCode).json({
        success: false,
        error:err,
    })
}