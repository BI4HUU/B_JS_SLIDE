var request = require('request');
request(
    'https://api.vk.com/method/friends.search?user_id=55324081&count=88&access_token=e35d6cceec3110d8d4939a27a9050409e21c85464afeef907071a9cb44446b3bf5faf8159e88b3d79da81&v=5.52'
, function (error, response, body) {
  console.log(body); 
});











// var VK = require('vksdk');
// var vk = new VK({
//   'appId'     : 6228675,
//   'appSecret' : 'YbaujsgvpC1CqdLTrCS1'
// });

// vk.setToken('e35d6cceec3110d8d4939a27a9050409e21c85464afeef907071a9cb44446b3bf5faf8159e88b3d79da81');

// vk.request('friends.search', {
//     'count' : 66,
    
    
    
// }, function(_o) {
//     console.log(_o);
// });
// vk.requestServerToken();

// vk.on('serverTokenReady', function(_o) {
//     console.log(_o);
// });












// var VK = require('vkapi');
// var vk = new VK({'mode' : 'sig'});

// vk.setToken( { token :'3fb4abd274586f95e9a90b6250040678724ae9ad06600a98302f8b53d3be66659885aaf5363a08c5f1293' });
// vk.request('getProfiles', {'uids' : '55324081'});
// vk.on('done:getProfiles', function(_o) {
//     console.log(_o);
// });


// let Vkapi = require('node-vkapi');
//     var vkapi = new Vkapi({accessToken:  '3fb4abd274586f95e9a90b6250040678724ae9ad06600a98302f8b53d3be66659885aaf5363a08c5f1293',
//     appId:'6228675'});
// // var vkapi = VK();
// vkapi.call('users.get', {
//   user_ids: '55324081',
//   fields:   'nickname,first_name',
  
// })
//   .then(users => console.dir(users[0]))
//   .catch(error => console.error(error));