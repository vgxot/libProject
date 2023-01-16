const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer();
server.on('request', (req, res) => {
    /*console.log(req.url);
    console.log(req.method);
    console.log(req.headers);*/
    if (req.url === '/') {
        sendRes('main.html', 'text/html', res);
    }
    else if (/\/uploads\/[^\/]+$/.test(req.url) && req.method === 'POST') {
        console.log('upload files');
        saveUploadFile(req, res);
    }
    else if (req.url === '/save-form') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();

        });
        req.on('end', () =>{
            console.log(body);
        })
    }
    else {
        sendRes(req.url, getContentType(req.url), res);
    }
}).listen(3000, () => console.log('server работает'));

function sendRes(url, contentType, res) {
    let folder = path.extname(url);
    if (folder === ".html") {
        folder = 'html';
    }
    else {
        folder = '';
    }
    let file = path.join(__dirname +'/'+ folder, url);
    console.log(`отправляю файл: ${file}`)
    fs.readFile(file, (err, content) => {
        if (err) {
             res.writeHead(404);
             res.write('error');
             res.end();
             console.log(`404, не получилось отправить ${file}`);
        }
        else {
            res.writeHead(200, {'Content-Type': contentType});
            res.write(content);
            res.end();
        }
    })
}
function getContentType(url) {
    switch (path.extname(url)) {
        case ".html":
            return "text/html";
        case ".css":
            return "text/css";
        case ".js":
            return "text/javascript";
        case ".svg":
            return "image/svg+xml";
        default:
            return "application/octet-stream";
    }
}