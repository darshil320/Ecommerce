const express = require('express');
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const fileUpload= require('express-fileupload');
const errorMiddleware = require('./middleware/error');


app.use(express.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

const corsOptions = {
  origin: "http://localhost:3000", // Replace with the origin of your frontend
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Enable cookies and HTTP authentication headers
};

app.use(cors(corsOptions));

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