import { listen } from './app';
import { config } from 'dotenv';
import connectDatabase from './config/database';

//config
config({path: 'backend/config/config.env'})

//connect to database

connectDatabase();

listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port 3000 on http://localhost:${process.env.PORT}`) ;
});
 
