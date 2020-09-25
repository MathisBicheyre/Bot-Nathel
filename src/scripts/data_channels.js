const discord = require("discord.js");


function data_channels(gd) {
     console.log('fonction creation channel')

//IMPORT 
var createchan = require('./create_channels')

//DEFINITIONS DES CHANNELS
     //CATEGORIE 1 : INFORMATION
     let information_name = ''
     let information_type = 'text'
     let information_topic = ''
     let information_userLimit = null
     let information_position = null
     let information_parent = null
     let information_nsfw = false
     let information_id_role_1 = null
     let information_deny_1 = ['','','','','']
     let information_allow_1 = ['','','','','']
     let information_type_1 = 'role'
     
     
     createchan.create_channels(information_gd, information_name, information_type, information_topic, information_userLimit, information_position, information_parent, information_nsfw, 
          information_id_role_1, information_deny_1, information_allow_1, information_type_1, 
          information_id_role_2, information_deny_2, information_allow_2, information_type_2, 
          information_id_role_3, information_deny_3, information_allow_3, information_type_3, 
          information_id_role_4, information_deny_4, information_allow_4, information_type_4, 
          information_id_role_5, information_deny_5, information_allow_5, information_type_5, 
          information_id_role_6, information_deny_6, information_allow_6, information_type_6,
          information_id_role_7, information_deny_7, information_allow_7, information_type_7, 
          information_id_role_8, information_deny_8, information_allow_8, information_type_8, 
          information_id_role_9, information_deny_9, information_allow_9, information_type_9, 
          information_id_role_10, information_deny_10, information_allow_10, information_type_10
          )
     //CHANNEL 1 : ANNOUNCEMENT

     createchan.create_channels(announcement_gd, announcement_name, announcement_type, announcement_topic, announcement_userLimit, announcement_position, announcement_parent, announcement_nsfw, 
          announcement_id_role_1, announcement_deny_1, announcement_allow_1, announcement_type_1, 
          announcement_id_role_2, announcement_deny_2, announcement_allow_2, announcement_type_2, 
          announcement_id_role_3, announcement_deny_3, announcement_allow_3, announcement_type_3, 
          announcement_id_role_4, announcement_deny_4, announcement_allow_4, announcement_type_4, 
          announcement_id_role_5, announcement_deny_5, announcement_allow_5, announcement_type_5, 
          announcement_id_role_6, announcement_deny_6, announcement_allow_6, announcement_type_6,
          announcement_id_role_7, announcement_deny_7, announcement_allow_7, announcement_type_7, 
          announcement_id_role_8, announcement_deny_8, announcement_allow_8, announcement_type_8, 
          announcement_id_role_9, announcement_deny_9, announcement_allow_9, announcement_type_9, 
          announcement_id_role_10, announcement_deny_10, announcement_allow_10, announcement_type_10
          )

     //CHANNEL 2 : STREAM-ANNOUNCEMENT

     createchan.create_channels(stream_announcement_gd, stream_announcement_name, stream_announcement_type, stream_announcement_topic, stream_announcement_userLimit, stream_announcement_position, stream_announcement_parent, stream_announcement_nsfw, 
          stream_announcement_id_role_1, stream_announcement_deny_1, stream_announcement_allow_1, stream_announcement_type_1, 
          stream_announcement_id_role_2, stream_announcement_deny_2, stream_announcement_allow_2, stream_announcement_type_2, 
          stream_announcement_id_role_3, stream_announcement_deny_3, stream_announcement_allow_3, stream_announcement_type_3, 
          stream_announcement_id_role_4, stream_announcement_deny_4, stream_announcement_allow_4, stream_announcement_type_4, 
          stream_announcement_id_role_5, stream_announcement_deny_5, stream_announcement_allow_5, stream_announcement_type_5, 
          stream_announcement_id_role_6, stream_announcement_deny_6, stream_announcement_allow_6, stream_announcement_type_6,
          stream_announcement_id_role_7, stream_announcement_deny_7, stream_announcement_allow_7, stream_announcement_type_7, 
          stream_announcement_id_role_8, stream_announcement_deny_8, stream_announcement_allow_8, stream_announcement_type_8, 
          stream_announcement_id_role_9, stream_announcement_deny_9, stream_announcement_allow_9, stream_announcement_type_9, 
          stream_announcement_id_role_10, stream_announcement_deny_10, stream_announcement_allow_10, stream_announcement_type_10
          )
     //CHANNEL 3 : TWITTER-FEEDBACK

     createchan.create_channels(twitter_feedback_gd, twitter_feedback_name, twitter_feedback_type, twitter_feedback_topic, twitter_feedback_userLimit, twitter_feedback_position, twitter_feedback_parent, twitter_feedback_nsfw, 
          twitter_feedback_id_role_1, twitter_feedback_deny_1, twitter_feedback_allow_1, twitter_feedback_type_1, 
          twitter_feedback_id_role_2, twitter_feedback_deny_2, twitter_feedback_allow_2, twitter_feedback_type_2, 
          twitter_feedback_id_role_3, twitter_feedback_deny_3, twitter_feedback_allow_3, twitter_feedback_type_3, 
          twitter_feedback_id_role_4, twitter_feedback_deny_4, twitter_feedback_allow_4, twitter_feedback_type_4, 
          twitter_feedback_id_role_5, twitter_feedback_deny_5, twitter_feedback_allow_5, twitter_feedback_type_5, 
          twitter_feedback_id_role_6, twitter_feedback_deny_6, twitter_feedback_allow_6, twitter_feedback_type_6,
          twitter_feedback_id_role_7, twitter_feedback_deny_7, twitter_feedback_allow_7, twitter_feedback_type_7, 
          twitter_feedback_id_role_8, twitter_feedback_deny_8, twitter_feedback_allow_8, twitter_feedback_type_8, 
          twitter_feedback_id_role_9, twitter_feedback_deny_9, twitter_feedback_allow_9, twitter_feedback_type_9, 
          twitter_feedback_id_role_10, twitter_feedback_deny_10, twitter_feedback_allow_10, twitter_feedback_type_10
          )
     //CHANNEL 4 : LINKS

     createchan.create_channels(links_gd, links_name, links_type, links_topic, links_userLimit, links_position, links_parent, links_nsfw, 
          links_id_role_1, links_deny_1, links_allow_1, links_type_1, 
          links_id_role_2, links_deny_2, links_allow_2, links_type_2, 
          links_id_role_3, links_deny_3, links_allow_3, links_type_3, 
          links_id_role_4, links_deny_4, links_allow_4, links_type_4, 
          links_id_role_5, links_deny_5, links_allow_5, links_type_5, 
          links_id_role_6, links_deny_6, links_allow_6, links_type_6,
          links_id_role_7, links_deny_7, links_allow_7, links_type_7, 
          links_id_role_8, links_deny_8, links_allow_8, links_type_8, 
          links_id_role_9, links_deny_9, links_allow_9, links_type_9, 
          links_id_role_10, links_deny_10, links_allow_10, links_type_10
          )
     //CATEGORIE 2 : HUB

     createchan.create_channels(ababa_gd, ababa_name, ababa_type, ababa_topic, ababa_userLimit, ababa_position, ababa_parent, ababa_nsfw, 
          ababa_id_role_1, ababa_deny_1, ababa_allow_1, ababa_type_1, 
          ababa_id_role_2, ababa_deny_2, ababa_allow_2, ababa_type_2, 
          ababa_id_role_3, ababa_deny_3, ababa_allow_3, ababa_type_3, 
          ababa_id_role_4, ababa_deny_4, ababa_allow_4, ababa_type_4, 
          ababa_id_role_5, ababa_deny_5, ababa_allow_5, ababa_type_5, 
          ababa_id_role_6, ababa_deny_6, ababa_allow_6, ababa_type_6,
          ababa_id_role_7, ababa_deny_7, ababa_allow_7, ababa_type_7, 
          ababa_id_role_8, ababa_deny_8, ababa_allow_8, ababa_type_8, 
          ababa_id_role_9, ababa_deny_9, ababa_allow_9, ababa_type_9, 
          ababa_id_role_10, ababa_deny_10, ababa_allow_10, ababa_type_10
          )

    
}

exports.data_channels = data_channels
