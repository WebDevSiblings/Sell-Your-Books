const express = require('express');
const mongoose = require('mongoose');
const userData = require('./models/userModel');
const dotenv = require('dotenv')

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({1:2})
})

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})







