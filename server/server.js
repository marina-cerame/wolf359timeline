'use strict';

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static('client'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
