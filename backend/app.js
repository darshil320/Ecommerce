const express = require('express');
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const fileUpload= require('express-fileupload');
const dotenv = require("dotenv");
const errorMiddleware = require('./middleware/error');

dotenv.config({ path: "backend/config/config.env" });
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
const payment = require("./routes/paymentsRoute");


app.use('/api/v1', product);
app.use('/api/v1', user);    
app.use("/api/v1", order);    
app.use("/api/v1", payment);


// middleware for error 

app.use(errorMiddleware);



module.exports = app