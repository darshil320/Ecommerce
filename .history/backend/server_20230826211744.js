const app = require('./app');
const dotenv = require('dotenv');

//config
dotenv.config({path: 'backend/config/config.env'})

//connect to database

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port 3000 on http://localhost:${process.env.PORT}`) ;
});
 
