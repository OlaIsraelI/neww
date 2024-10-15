const http = require("http");

const httpServer = http.createServer((req, res) => {
  if(req.url === '/' && req.method === 'GET'){
    res.end('Hello Word');
  }  else if (req.url === '/about' && req.method === 'GET'){
      res.end('About Us Page');
  } else {
      res.statusCode = 404;
      res.end('Page Not Found');
  }
});


const PORT = 3000;

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});