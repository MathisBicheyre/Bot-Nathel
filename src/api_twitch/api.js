const axios = require("axios");

const cache = {
  token: null,
  lastValidation: null
}

module.exports.mafonction = async () => {

    async function getAcessToken(client) {
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

    async function getRefrehToken(client) {
    const currentTimestamp = Date.now();
    if(cache.token !== null) {
        if(cache.lastValidation + 60 * 60 * 1000 < currentTimestamp) {
            await axios.get('https://id.twitch.tv/oauth2/validate', {
                headers: {
                    'Client-ID': 'l31z7q3rno57veu2nh6tfkho1zyl16',
                    Authorization: 'Bearer' + cache.token
                }
            }).catch(() => getAcessToken(client))
        } else {
            return cache.token
        }
    } else {
        return getAcessToken(client);
    }
    }

    const data = await getAcessToken();
    return data;

}

