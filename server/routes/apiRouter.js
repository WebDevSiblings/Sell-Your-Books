const userController = require('../controllers/userController');

const express = require('express');

const apiRouter = express.Router();

apiRouter.get('/', userController.saveData, (req, res) => {
    const { abc } = res.locals;
    res.json(abc);
})

module.exports = apiRouter;