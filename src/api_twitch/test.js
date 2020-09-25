

const axios = require("axios");

const cache = {
  token: null,
  lastValidation: null
}


module.exports = {
  
    getAcessToken: async function (client) {

  const qs = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: 'l31z7q3rno57veu2nh6tfkho1zyl16',
    client_secret: '8dmddwqnjjm36r2kvlrwuuuzwmhz5k',
  });

  const res = await axios.post(`https://id.twitch.tv/oauth2/token?${qs}`).catch((err) => console.error(err));
  cache.token = res.data.access_token;
  cache.lastValidation = Date.now();
  return res.data.access_token || null;

  }
}


