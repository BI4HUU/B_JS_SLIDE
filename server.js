var WebSocketServer = require('websocket').server;
var WebSocketClient = require('websocket').client;
var WebSocketFrame  = require('websocket').frame;
var WebSocketRouter = require('websocket').router;
var W3CWebSocket = require('websocket').w3cwebsocket;
var WebSocketServer = require('websocket').server;
var http = require('http');
var request8 = require('request');
 var server
var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(process.env.PORT, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});
 
wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});
 
function originIsAllowed(origin) {
  return true;
}
 
wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
      // Make sure we only accept requests from an allowed origin
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }
    
    var connection = request.accept('echo-protocol', request.origin);
    console.log((new Date()) + ' Connection accepted.');
    connection.on('message', function(message) {
         console.dir(typeof message.utf8Data)
         var ddd = JSON.parse(message.utf8Data)[0];console.dir(ddd); 
         var dd1 = JSON.parse(message.utf8Data)[1];console.dir(dd1);
         var dd2 = JSON.parse(message.utf8Data)[2];console.dir(dd2);
        //  var ddd = message.utf8Data[0];
        //  var dd1 = message.utf8Data[1];
        //  var dd2 = message.utf8Data[2];
        if (message.utf8Data == '2') {
            request8('https://api.vk.com/method/friends.search?user_id=55324081&count=88&access_token=e35d6cceec3110d8d4939a27a9050409e21c85464afeef907071a9cb44446b3bf5faf8159e88b3d79da81&v=5.52', function (error, re, body2) {
            var body = JSON.parse(body2)
            var arr = [];  var sarr = [];
            for (var i = 0; i < body.response.count; i++ ) {
              var sarr = [];
              sarr = [body.response.items[i].id,body.response.items[i].first_name,body.response.items[i].last_name];
              arr.push(sarr)
            }
            var ar = JSON.stringify(arr)
            connection.sendUTF(`add(['b2' ,${ar}])`);
            console.log(arr.toString());
            });
        } else{
            if (ddd=='send') {
                request8(`https://api.vk.com/method/messages.send?user_id=${dd1}&message=${dd2}&access_token=e35d6cceec3110d8d4939a27a9050409e21c85464afeef907071a9cb44446b3bf5faf8159e88b3d79da81&v=5.52`, 
                 function (error, response, body3) {
                   console.dir(body3);
                })
            };
        }
        
       
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            connection.sendUTF(message.utf8Data);
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
        }
    });
});