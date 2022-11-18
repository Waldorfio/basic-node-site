const http = require('http');
const url = require('url');
const fs = require('fs');
 
http.createServer(function (req, res) {
    const fullServerUrl = url.parse(req.url, true);
    const filename = "."+ fullServerUrl.pathname;

    if (filename == './index.html' ||
        filename == './contact-me.html' ||
        filename == './about.html'
    ) {
        fs.readFile(filename, function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            console.log(filename);
            return res.end();
        });
    } else {
        fs.readFile('404.html', function(err, data) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(data);
            console.log(filename);
            return res.end();
        });
    }
}).listen(8080); 