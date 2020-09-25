const { MessageEmbed } = require("discord.js");
const Ayoutube = "<:Ayoutube:742872398432436267>";
const Atwitch = "<:Atwitch:742821059492839515>";
const Atwitter = "<:ATwitter:742821486221590659>";
const Alogo = "<:Alogo:742821528818679838>"; 
const Aosu = "<:Aosu:742878400254836792>";

module.exports = {
  name: 'createlinks',
  description: 'Créer le channels #LINKS d\'un tournoi',
  execute(client, message, args) {
    const embed = new MessageEmbed()
			.setColor('#de5b95')
			.setTitle('Osu! Slider Break Tournament')
			.setURL('https://www.youtube.com/watch?v=xIiGdGg8z-I')
			.setAuthor('Nathel Games', 'https://cdn.discordapp.com/attachments/742100437620228177/742794529228456016/logo.png', "https://www.youtube.com/watch?v=xIiGdGg8z-I") 
			.setDescription('L\'OSBT! est le meilleur tournoi jamais organisé avec la meilleur équipe car c un truc de fou fou et ps : Nasobold a pas le droit de s\'inscrire :D, bref ta compris c\'est l\'emplacement de la description')
			.setThumbnail('https://cdn.discordapp.com/attachments/742100437620228177/742803071007981588/original.png')
			.addFields(
				{ name: 'STREAM', value: `[${Atwitch} English Twitch](http://bit.ly/EagleRV)`, inline: true},
				{ name: '\u200b', value: '[:flag_fr: French Twitch](http://bit.ly/EagleRV)', inline: true},
				{ name: '\u200b', value: '\u200b', inline: true},
				)
			.addFields(
				{ name: 'VOD & HIGHLIGHTS', value: `[${Ayoutube} English Youtube](http://bit.ly/EagleRV)`, inline: true},
				{ name: '\u200b', value: '[:flag_fr: French Youtube](http://bit.ly/EagleRV)', inline: true},
				{ name: '\u200b', value: '\u200b', inline: true},
				)
			.addField("TOURNAMENT LINKS", `[${Alogo} Official Website](http://bit.ly/EagleRV)\n[${Atwitter} Twitter](http://bit.ly/EagleRV)\n[${Aosu} Osu! Forum Post](http://bit.ly/EagleRV)`)
			.setImage("https://cdn.discordapp.com/attachments/742100437620228177/742883364121346189/2f982601b674706f83ffd6f08edf6ec8.png")
			.setTimestamp()
			.setFooter('Nathel Bot', "https://cdn.discordapp.com/attachments/742100437620228177/742794529228456016/logo.png");

			message.channel.send(embed);
  }
}
