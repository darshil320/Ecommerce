const { log } = require('console');
const mongoose = require('mongoose');  

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {console.log(err);}).then((data)=>{
    console.log(`Mongodb connected with the server data  ${data.connection.host}`);
})