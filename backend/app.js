const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const loginRouter = require('./routes/loginRouter')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/login', loginRouter)
app.use('/registration', registrationRouter)

module.exports = app;