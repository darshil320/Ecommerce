const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error');

app.use(express.json());
const product = require('./routes/productRoute');



app.use('/api/v1', product);
app.use((err, req, res, next) => {
  // Log the error to the console
  console.error(err.stack);
  // Send the error response to the client
  res.status(500).json({ error: err.message });
});

app.use(errorMiddleware);
// middleware for error 



module.exports = app