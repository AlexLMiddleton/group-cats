require('dotenv').config();
const express = require('express');
const app = express();
const HTTPError = require('node-http-error');
const { propOr } = require('ramda');

const bodyParser = require('body-parser');
const port = propOr(9999, 'PORT', process.env);

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Welcome to the Cats API!'));

// app.post('/cats', (req, res, next) {

// })

app.listen(port, () => console.log('Cats available on', port));
