var WebSocketServer = new require('ws');
var fs = new require("fs");

var webSocketServer = new WebSocketServer.Server({
	port: 9999
});
webSocketServer.on('connection', function(ws) {

// ws.send();

ws.on('message', function(message) {
   if (message == '1') {ws.send(fs.readFileSync("1.html", "utf8"))};
   if (message == '2') {ws.send(fs.readFileSync("2.html", "utf8"))};
   if (message == '3') {ws.send(fs.readFileSync("3.html", "utf8"))};

	console.log('получено сообщение ' + message);
	});
});
