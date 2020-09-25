// IMPORTS
const discord = require("discord.js");
const fs = require('fs')


//Create role function
function createrole(msg, gd, name, color, hoist, position, mentionable, permissions, reason) {
               
     let fichier = fs.readFileSync('data/data.json')
     let personne = JSON.parse(fichier)
     console.log(personne)
        
     let donnees = JSON.stringify(personne)
     fs.writeFileSync('data/data.json', donnees)
     
//     console.log('fonction create role')
//     gd.roles.create({
//           data: {
//                name: name,
//                color: color,
//                hoist: hoist,
//                position: position,
//                mentionable: mentionable,
//                permissions: permissions
//           },
//           reason: reason
//      }).then(role => msg.channel.send(`${role.name}'s id is ${role.id}`))
//         
}

exports.createrole = createrole
