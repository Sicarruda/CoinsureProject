const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const loginRouter = require('./routes/loginRouter');
const registrationRouter = require('./routes/registrationRouter');
const userPageRouter = require('./routes/userPageRouter');
const homeRouter = require('./routes/homeRouter')

const app = express();
app.use(cors());
//https://www.youtube.com/watch?v=kBSckls-Ih4&list=PLmY5AEiqDWwDWwg4_0lle-3qcLGi-0V5c&index=2

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/home', homeRouter);
app.use('/login', loginRouter);
app.use('/registration', registrationRouter);
app.use('/userPage', userPageRouter);


module.exports = app;
