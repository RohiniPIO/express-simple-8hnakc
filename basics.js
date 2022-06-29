const http = require('http');
const fs = require('fs');

//get all files
//const homepage = fs.readFileSync('./index.html');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>PIO Task</h1>');
    res.end();
  } else if (url === '/Create') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>Add new Products</h1>');
    res.end();
  } else if (url === '/Read') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>Fetch Products</h1>');
    res.end();
  } else if (url === '/Update') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>Update Products</h1>');
    res.end();
  } else if (url === '/Delete') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>Remove Product</h1>');
    res.end();
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>Page not found</h1>');
    res.end();
  }
});

server.listen(5000);

