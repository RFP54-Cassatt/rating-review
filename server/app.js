const express = require('express');
const Router = express.Router();
const morgan = require('morgan');

//Connect to database
const db = require('./db');

//connection to Router
const router = require('./routes.js');

const app = express();
const PORT = 3113;//THIS MAY NEED TO BE THE SAME AS THE DB PORT 5324?

//diagnostic middleware
app.use(morgan('dev'));
app.use(express.json());

//point server to all routes
app.use('/', router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}..`));
