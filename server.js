const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Server is running successfully!');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});