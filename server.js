var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    var fs = require('fs');

    fs.readFile('proxy.html', function (err, buf) {
        res.end(buf.toString());
    });

}).listen(3000);