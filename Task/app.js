const path = require('path');
const express = require('express');
const ejs = require('ejs')
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

app.listen(5000, () => {
  console.log('Server is listening to port 5000');
});
