import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';

//configure env
// env file created on root directory so no need to pass the path object into config
dotenv.config();

//database
connectDB();
//rest obj
const app = express();

//middelwares
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth',authRoutes);
//rest api
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Ecommerce app</h1>")
})

//PORT
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`)
})