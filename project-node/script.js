const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain'});

    if (req.url === '/') {
        res.end('Hi from Node.js!');
    } else if (req.url === '/about') {
        res.end('This is the about page.');
    } else {
        res.end('Page not found')
    }
});

server.listen(5050, () => {
    console.log('Server is running on http://localhost:5050');
});
