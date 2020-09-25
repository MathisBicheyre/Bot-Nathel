const discord = require("discord.js");


function create_channels(gd, name, type, topic, userLimit, position, parent, nsfw, 
     id_role_1, deny_1, allow_1, type_1, 
     id_role_2, deny_2, allow_2, type_2, 
     id_role_3, deny_3, allow_3, type_3, 
     id_role_4, deny_4, allow_4, type_4, 
     id_role_5, deny_5, allow_5, type_5, 
     id_role_6, deny_6, allow_6, type_6,
     id_role_7, deny_7, allow_7, type_7, 
     id_role_8, deny_8, allow_8, type_8, 
     id_role_9, deny_9, allow_9, type_9, 
     id_role_10, deny_10, allow_10, type_10 ) {
     console.log('fonction creation channel')

     gd.channels.create(name, {
          type: type,
          permissionOverwrites: [
               {
                    id: id_role_1,
                    deny: deny_1, //type liste
                    allow: allow_1, //type liste
                    type: type_1,
               },
               {
                    id: id_role_2,
                    deny: deny_2, //type liste
                    allow: allow_2, //type liste
                    type: type_2,
               },
               {
                    id: id_role_3,
                    deny: deny_3, //type liste
                    allow: allow_3, //type liste
                    type: type_3,
               },
               {
                    id: id_role_4,
                    deny: deny_4, //type liste
                    allow: allow_4, //type liste
                    type: type_4,
               },
               {
                    id: id_role_5,
                    deny: deny_5, //type liste
                    allow: allow_5, //type liste
                    type: type_5,
               },
               {
                    id: id_role_6,
                    deny: deny_6, //type liste
                    allow: allow_6, //type liste
                    type: type_6,
               },
               {
                    id: id_role_6,
                    deny: deny_6, //type liste
                    allow: allow_6, //type liste
                    type: type_6,
               },
               {
                    id: id_role_7,
                    deny: deny_7, //type liste
                    allow: allow_7, //type liste
                    type: type_7,
               },
               {
                    id: id_role_8,
                    deny: deny_8, //type liste
                    allow: allow_8, //type liste
                    type: type_8,
               },
               {
                    id: id_role_9,
                    deny: deny_9, //type liste
                    allow: allow_9, //type liste
                    type: type_9,
               },
               {
                    id: id_role_10,
                    deny: deny_10, //type liste
                    allow: allow_10, //type liste
                    type: type_10,
               },
               
          ],
          topic: topic,
          userLimit: userLimit,
          position: position,
          parent: parent,
          nsfw: nsfw,

     });

    
}

exports.create_channels = create_channels
