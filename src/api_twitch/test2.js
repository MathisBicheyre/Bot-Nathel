( async () => {
// Importations //
var token_request  = require('./api.js')
var tokenA = await token_request.mafonction()
const axios = require("axios")
console.log(tokenA)
// Variables //
const url = "https://api.twitch.tv/helix/games/top"
const token = tokenA
const options = {
  headers: {
      'client_id' : 'l31z7q3rno57veu2nh6tfkho1zyl16'}
}

// API REQUEST 

const qs = new URLSearchParams({client_id: 'l31z7q3rno57veu2nh6tfkho1zyl16' });
const res = await axios.get(`https://api.twitch.tv/helix/games/top?${qs}`).catch((err) => console.error(err));

return res || null;


})()



