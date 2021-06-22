// const http = require('http');
// const fs = require('fs'); // core module of node js which helps us to work on the file system

// // const server = http.createServer((req, res) => {
// //     // console.log(req);
// //     // process.exit();
// //     console.log(req.url, req.method, req.headers);
// // })

// // server.listen(3000);

// // http.createServer((req, res) => {
// //     console.log("server created successfully");
// // }).listen(3000);


// // Sending responses

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>Server Title</title></head>');
//     res.write('<body><h1>Hello! Welcome to the server response</h1></body>');
//     res.write('</html>');
//     res.end();
// });

// server.listen(3000);


// //Routing Requests

// http.createServer((req, res) => {
//     let url = req.url;

//     if(url === '/') {
//         res.write('<html>');
//         res.write('<head><title>My Page Title</title></head>');
//         res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submnit">SEND MESSAGE</button></form></body>');
//         res.write('</html>');
//         return res.end();
//     }

//     res.write('<html>');
//     res.write('<head><title>Server Title</title></head>');
//     res.write('<body><h1>Hello! Welcome to the server response</h1></body>');
//     res.write('</html>');
//     res.end();
// }).listen(3030);


// // Redirecting the requests and creating the new file

// http.createServer((req, res) => {
//     let method = req.method;
//     let url = req.url;

//     if (url === '/') {
//         res.write('<html>');
//         res.write('<head><title>My Page Title</title></head>');
//         res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submnit">SEND MESSAGE</button></form></body>');
//         res.write('</html>');
//         return res.end();
//     }

//     if (url === '/message' && method === 'POST') {
//         // fetching the form data using the stream and buffers concept

//         const body = [];

//         req.on('data', (chunk) => {
//             body.push(chunk);
//         });

//         return req.on('end', () => {
//             const parsedBody = Buffer.concat(body).toString();
//             const message = parsedBody.split('=')[1];
//             // fs.writeFileSync('message.txt', message); //used for the small chunks of data

//             // writeFile should be user for large data because of the asynchronous behaviour of the Node JS, to avoid the code blocking
//             fs.writeFile('message.txt', message, err => {
//                 res.statusCode = 302;
//                 res.setHeader('Location', '/');
//                 return res.end();
//             })
//         });

//         // fs.writeFileSync('message.txt', 'DUMMY TEXT');
//         // res.statusCode = 302;
//         // res.setHeader('Location', '/');
//         // return res.end();
//     }

//     res.write('<html>');
//     res.write('<head><title>Server Title</title></head>');
//     res.write('<body><h1>Hello! Welcome to the server response</h1></body>');
//     res.write('</html>');
//     res.end();
// }).listen(3020);

const http = require('http');

const routes = require('./routes');

// console.log(routes.handler);
const server = http.createServer(routes);

server.listen(8088);