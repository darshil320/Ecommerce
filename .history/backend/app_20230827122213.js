const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error');

app.use(express.json());
const product = require('./routes/productRoute');



app.use('/api/v1', product);

app.use(errorMiddleware);
// middleware for error 



module.exports = app