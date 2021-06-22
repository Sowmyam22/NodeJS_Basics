const fs = require('fs');

const requestHandler = (req, res) => {
    let method = req.method;
    let url = req.url;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My Page Title</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submnit">SEND MESSAGE</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];

            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            })
        });
    }

    res.write('<html>');
    res.write('<head><title>Server Title</title></head>');
    res.write('<body><h1>Hello! Welcome to the server response</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;

// exports.handler = requestHandler;

// module.exports.handler = requestHandler;