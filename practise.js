const express = require('express');
const app = express();

const {products} = require('./data')

app.get('/', (req, res) => {
  res.json(products)
 });



app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});

//app.get
//app.Post
//app.put
//app.delete
//app.all
//app.use
//app.listen
