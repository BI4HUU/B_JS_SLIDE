var fs = require("fs");
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: process.env.PORT });
var request = require('request');

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) { var itemsH;
  
      if (JSON.parse(message)[0]=='send') {
       // request(`https://api.vk.com/method/messages.send?user_id=${Number(JSON.parse(message)[1])}&message=${JSON.parse(message)[2]}&access_token=e35d6cceec3110d8d4939a27a9050409e21c85464afeef907071a9cb44446b3bf5faf8159e88b3d79da81&v=5.52`, 
        request(`https://api.vk.com/method/messages.send?user_id=35591927&message=${JSON.parse(message)[2]}&access_token=e35d6cceec3110d8d4939a27a9050409e21c85464afeef907071a9cb44446b3bf5faf8159e88b3d79da81&v=5.52`, 
        function (error, response, body3) {console.log('OTBET - '+ JSON.stringify(body3))});console.log(JSON.parse(message)[2])    };
      
      if (JSON.parse(message)[0]=='plac') {
    // request(`https://api.vk.com/method/messages.send?user_id=${Number(JSON.parse(message)[1])}&message=${JSON.parse(message)[2]}&access_token=e35d6cceec3110d8d4939a27a9050409e21c85464afeef907071a9cb44446b3bf5faf8159e88b3d79da81&v=5.52`, 
       request(`https://api.vk.com/method/messages.getHistory?user_id=${Number(JSON.parse(message)[1])}&count=8&access_token=e35d6cceec3110d8d4939a27a9050409e21c85464afeef907071a9cb44446b3bf5faf8159e88b3d79da81&v=5.52`, 
        function (error, response, body3) { itemsH = JSON.parse(body3).response.items; 
            var arrPlac = [];
            for (var i = 0;i < itemsH.length; i++ ) { 
                arrPlac.push(JSON.parse(body3).response.items[i].body)
            }
            let ar = JSON.stringify(arrPlac)
            ws.send(`addPlace([${JSON.parse(body3).response.items[0].user_id},${ar}])`);
        console.log(`addPlace([${JSON.parse(body3).response.items[0].user_id},${ar}])`)
        }
        )};
        // ws.send(fs.readFileSync("1.html", "utf8"))
      // if (message == '1') {ws.send(fs.readFileSync("1.html", "utf8"))};
      
      if (message == '3') {ws.send(fs.readFileSync("3.html", "utf8"))};
      if (message == '2') {
        request('https://api.vk.com/method/friends.search?user_id=55324081&count=88&access_token=e35d6cceec3110d8d4939a27a9050409e21c85464afeef907071a9cb44446b3bf5faf8159e88b3d79da81&v=5.52', function (error, response, body2) {
        var body = JSON.parse(body2)
        var arr = [];  var sarr = [];
        for (var i = 0; i < body.response.count; i++ ) {
          var sarr = [];
          sarr = [body.response.items[i].id,body.response.items[i].first_name,body.response.items[i].last_name];
          arr.push(sarr)
        }
        var ar = JSON.stringify(arr)
        ws.send(`add(['b2' ,${ar}])`);
        console.log(arr.toString());
        });
      };
    var hdshs = typeof Number(JSON.parse(message)[1]);
    console.log('received: %s', Number(JSON.parse(message)[1]), typeof Number(JSON.parse(message)));
  });
});
// ws.send(body2.response.items);
//	console.log(body.response.items[0].id);
