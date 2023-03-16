const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  let response = '';

  if (url === '/home') {
    response = 'Welcome home';
  } else if (url === '/about') {
    response = 'Welcome to About Us page';
  } else if (url === '/node') {
    response = 'Welcome to my Node Js project';
  } else {
    response = 'Page not found';
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(response);
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
