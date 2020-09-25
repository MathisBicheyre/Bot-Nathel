module.exports = {
	name: 'init',
	description: 'Initialization du serveur discord du tournoi',
	execute(message) {

// JUST A PONG
        message.channel.send('votre commande a bien été pris en compte')
//IMPORTS AND VARIABLES
        var gd = message.guild
        var script_role = require('../scripts/data_roles')
        var script_channels = require('../scripts/data_channels')


//Création des roles
        script_role.role_data(message, gd)
//Création des channels
        //script_channels.data_channels(gd)
//Tests

        }
}
