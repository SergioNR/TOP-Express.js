import * as http from 'node:http';


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!');
    }); //* To be able to connect to the server in localhost, i need to use HTTP, not HTTPS


server.listen(process.env.PORTNODE, process.env.HOSTNAME, () => {
    console.log(`NODE server running at https://${process.env.HOSTNAME}:${process.env.PORTNODE}/`);
})