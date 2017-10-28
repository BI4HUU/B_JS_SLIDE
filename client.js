// var WebSocketClient = require('websocket').client;
var request = require('request');
 const TelegramBot = require('node-telegram-bot-api');
const token = '479015323:AAHDex4fuVMMNNO9vt_OX42BHZFPeTugGDw';
const bot = new TelegramBot(token, {polling: true});
// var client = new WebSocketClient();
let ID = "55324081";
var arr = [[{ text: 'Микола Устименко', callback_data: '55324081' }]];  var sarr = [];
var arrHistory = [];
request(`https://api.vk.com/method/messages.get?access_token=e35d6cceec3110d8d4939a27a9050409e21c85464afeef907071a9cb44446b3bf5faf8159e88b3d79da81&v=5.52` , 
			(e, r, b) => {console.log(b)})
bot.on('message', (msg) => {
	const chatId = msg.chat.id;
	if (chatId == '459707765') {
		if (msg.text==`f`) {
			request(`https://api.vk.com/method/friends.search?user_id=${ID}&count=188&access_token=e35d6cceec3110d8d4939a27a9050409e21c85464afeef907071a9cb44446b3bf5faf8159e88b3d79da81&v=5.52`, 
				function (e, r, body2) {
					var body = JSON.parse(body2)
				for (var i = 0; i < body.response.count; i++ ) {
					sarr = [];
					sarr = [{ text: `${body.response.items[i].first_name} ${body.response.items[i].last_name}`, callback_data: `${body.response.items[i].id}` }];
					arr.unshift(sarr)
				}
			bot.sendMessage(chatId, "All Friends", {reply_markup: {	inline_keyboard: arr}});arr = [[{ text: 'Микола Устименко', callback_data: '55324081' }]];
			});
		}
		else {if (msg.text==`h`) {
			request(`https://api.vk.com/method/messages.getHistory?user_id=${ID}&count=8&access_token=e35d6cceec3110d8d4939a27a9050409e21c85464afeef907071a9cb44446b3bf5faf8159e88b3d79da81&v=5.52`, 
				function (error, response, body3) { itemsH = JSON.parse(body3).response.items; 
					for (var i = 0;i < itemsH.length; i++ ) { 
						arrHistory.unshift([{ text: `${JSON.parse(body3).response.items[i].body}`, callback_data: `test1` }])
					}
					bot.sendMessage(chatId, "History Messeg", {reply_markup: {	inline_keyboard: arrHistory}});arrHistory = [];
				}
			)
		}
		else {if (msg.text==`/start`) {}
		else {if (msg.text==`r`) {ID = "55324081";}
		else {
			request(`https://api.vk.com/method/messages.send?user_id=${ID}&message=${msg.text}&access_token=e35d6cceec3110d8d4939a27a9050409e21c85464afeef907071a9cb44446b3bf5faf8159e88b3d79da81&v=5.52` , 
			(e, r, b) => {console.log(b)})
			}
			}
			}
			}
		}
	}
);
	bot.on('callback_query', function (msg) {
		if (msg.data=='test1') {
			bot.sendMessage(msg.from.id, 'Ответ верный ✅');
		} else {
			ID = msg.data;
			console.log(ID)
			console.log(msg)
			
			// bot.sendMessage(msg.from.id, 'Ответ неверный ❌');
		}
	});

function GB( txt, cb ) {
	return {
	 	reply_markup: JSON.stringify({
			inline_keyboard: [[{ text: txt, callback_data: cb }]]
	  })
	}
}
	var options = {
	 	reply_markup: JSON.stringify({
			inline_keyboard: [[{ text: 'Кнопка 1', callback_data: 'test1' }],
			[{ text: 'Кнопка 1', callback_data: 'test2' }]]
		})
	};
	function vk(sms) {
		request(`https://api.vk.com/method/messages.send?user_id=55324081&message=${sms}&access_token=e35d6cceec3110d8d4939a27a9050409e21c85464afeef907071a9cb44446b3bf5faf8159e88b3d79da81&v=5.52`, 
		(e, r, b) => {console.log(b)})	
	}


// 	{
//     reply_markup: {
//         inline_keyboard: [[{
//             text: "A button",
//             url: "example.com",
//         }]],
//     },
// }
		
//++++++++++++
	///////////////
 //   function sendNumber() {        if (connection.connected) {            var number = Math.round(Math.random() * 0xFFFFFF);
	   //     connection.sendUTF(number.toString());
			//setTimeout(sendNumber, 1000);        }    }    sendNumber();
	//////////////////////

// client.on('connect', function(connection) {
//     console.log('WebSocket Client Connected');
//      connection.on('message', function(message) {
//         if (message.type === 'utf8') {
//             console.log("Received: '" + message.utf8Data + "'");
//         }
//     });
// client.connect('wss://b-seti-bi4huu.c9users.io', 'echo-protocol');
// });
//
 