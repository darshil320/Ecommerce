const express = require('express');
const app = express();
const cors = require("cors");
const errorMiddleware = require('./middleware/error');
app.use(cors());
app.use(express.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser())

//route imports
const product = require('./routes/productRoute');
const user = require('./routes/userRoute');
const order = require('./routes/orderRoute');


app.use('/api/v1', product);
app.use('/api/v1', user);    
app.use("/api/v1", order);    

// middleware for error 

app.use(errorMiddleware);



module.exports = app