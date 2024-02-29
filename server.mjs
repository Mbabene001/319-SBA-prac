// Require filesystems
import express from "express";
import dotenv from 'dotenv'
import Movies from './models/moviesSchema';
import Movies from './utilities/data.js'
import mongoose from 'mongoose';





// Invoke and Declare port #
const app = express();
const port = 3000;

//Middleware 

app.use (express.json()) ;


//Routes
...




