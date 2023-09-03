const { log } = require('console');
const mongoose = require('mongoose');  

mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {console.log(err);}).then((data)=>{
    console.log(`Mongodb connected with the server data  ${data.connection.host}`);
})