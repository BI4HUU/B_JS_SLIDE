var http = require('http');
var fs = require("fs");
var s = http.createServer();
s.on('request', function(request, response) {
    response.writeHead(200);
    response.end(fs.readFileSync("index.html", "utf8"));
});
s.listen(process.env.PORT, process.env.IP);