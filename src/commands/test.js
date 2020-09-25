module.exports = {
	name: 'test',
	description: 'juste une fonction de test',
	execute(message) {
        var script = require('../scripts/createroles')
        message.channel.send('votre commande a bien été pris en compte')
        var gd = message.guild
        script.createrole(gd, 'nom trop bien de fou owo', '#00FFFF')
        
	},
};
