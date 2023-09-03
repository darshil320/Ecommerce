const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error');
const product = require('./routes/productRoute');

app.use(express.json());


app.use('/api/v1', product);
app.use(errorMiddleware);
// middleware for error 



module.exports = app