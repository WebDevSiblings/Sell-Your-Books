const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userData10 = require('../models/userModel');
dotenv.config();

const URI = process.env.URI;

mongoose.connect(URI);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB Successfully')
})

const userController = {};
userController.saveData = async (req,res,next) => {
    try {
        const abc = [1,2];
        res.locals.abc = abc;
        next()
        return
    } catch (err) {
        next(err);
    }

}
module.exports = userController;