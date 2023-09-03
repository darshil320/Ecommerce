const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error');
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser())

//route imports
const product = require('./routes/productRoute');
const user = require('./routes/userRoute');
const cookieParser = require('cookie-parser');


app.use('/api/v1', product);
app.use('/api/v1', user);    
// middleware for error 
app.use(errorMiddleware);



module.exports = app