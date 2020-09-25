module.exports = {
  name: 'createlive',
  description: 'Définie le channel de l\'annoncement automatique des lives de la chaine twitch',
  execute(client, message, args) {
    const user_mention = message.mentions.users.first();
    message.channel.send(`Voici le tag de la personne mentionné : ${user_mention.tag}.`)
  }
}
