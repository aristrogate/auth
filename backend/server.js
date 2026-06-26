require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const connectDB = require('./db'); 

const app = express();
connectDB();  

app.use(express.json()); 
app.use(cookieParser());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));