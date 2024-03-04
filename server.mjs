import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"
import movieRouter from './routes/movieroute.mjs';



const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGO_URL

//Middleware

app.use (express.json())

//Routes

app.use('/movie', movieRouter);


app.listen (3000, () => {
    console.log(`server listening at ${3000}`)

})

// connect to mongodb
mongoose.connect(MONGOURL)
.then (() => {
    console.log('connected to Mongodb')
}) .catch ((error) => {
    console.log(error)
})

