const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

//config
dotenv.config({path: 'backend/config/config.env'})

//connect to database

connectDatabase();

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port 3000 on http://localhost:${process.env.PORT}`) ;
});
 
//unhandled promise rejection

process.on('unhandledRejection', (err) => { 
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled promise rejection`);

    server.close(() => {
        process.exit(1);
    })

})
