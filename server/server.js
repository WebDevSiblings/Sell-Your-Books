const express = require('express');

const dotenv = require('dotenv')
const apiRouter = require('./routes/apiRouter');

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json())

app.use('/api', apiRouter);

app.use('*', (req, res) => {
    res.status(404).json(`The url of ${req.originalUrl} does not exist`)
  });

  app.use((err, req, res, next) => {
    let defaultErr = {
      log: "Express error handler caught unknown middleware error",
      status: 400,
      message: { err: "An error occurred" },
    };
    let errorObj = Object.assign(defaultErr, { message: { err: err.message } });
    res.status(errorObj.status).send(errorObj);
  });

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})







