const express = require('express');
const router = express.router();
const morgan = require('morgan');

const db = require('./db');

const router = require('./routes.js');

const app = express();
const PORT = 3113;

app.use(morgan('dev'));
app.use(express.json());

// app.use('/', router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

//module.exports.app = app;