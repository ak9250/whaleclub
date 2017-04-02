const WhaleClub = require('whaleclub');

const API_KEY = '';
const wc = new WhaleClub("");
//wc.markets().then(console.log);

// uncomment the call you want to test

 //wc.markets().then(console.log);
//wc.price(['SPX500-USD']).then(console.log);
// wc.priceTurbo(['AAPL']).then(console.log);
// wc.balance().then(console.log);
// wc.transactions().then(console.log);
     wc.newPosition({
   direction: 'long',
   market: 'BTC-USD',
   leverage: 10,
   size: 1 * 1e8, // 1 btc
 }).then(console.log);   
//wc.getPosition(100).then(console.log);
// wc.updatePosition(100, {stop_loss: 90, take_profit: 110}).then(console.log);
//wc.closePosition("2MYtkvzGncuqj9vkk").then(console.log); 
// wc.cancelPosition(100).then(console.log);
// wc.splitPosition(100, 20).then(console.log);
// wc.listPositions().then(console.log);
// wc.contracts().then(console.log);
  /* wc.newTurboPosition({
   direction: 'short',
   market: 'BTC-USD',
   type: '1min',
   size: 1000000// 1 btc
 }).then(console.log);   
 */
