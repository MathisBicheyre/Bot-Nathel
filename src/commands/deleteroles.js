const { Guild } = require("discord.js")

module.exports = {
        name: 'deleteroles',
        description: 'delete every single role in the discord',
        execute(message) {
    
    // JUST A PONG
            message.channel.send('command done') //<---- this is dumb btw... just have it send an embed message
    //CODE
    
    message.guild.roles.cache.filter(role => role.managed != 1).filter(role => role.name != '@everyone').forEach(role => role.delete()) 
    }}
    

