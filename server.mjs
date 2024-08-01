import * as http from 'node:http';


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!');
    });


server.listen(process.env.PORTNODE, process.env.HOSTNAME, () => {
    console.log('My first HTTP server!');
})