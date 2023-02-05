

const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 8545;

const server = http.createServer((req, res) => {
  fs.readFile('dapp.html', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end("404 Not Found");
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

