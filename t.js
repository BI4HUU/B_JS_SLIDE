const TelegramBot = require('node-telegram-bot-api');
const token = '434685864:AAGdf1N6ikpQAlJFhzRKpjE6ZMtJogAf6F8';
const bot = new TelegramBot(token, {polling: true});
  
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
var text = msg.text;
if (msg.text==`vk`) {
  bot.sendMessage(chatId, `SUPER${text}`);}
});