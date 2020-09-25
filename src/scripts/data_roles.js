const discord = require("discord.js");


function role_data(msg, gd) {
     console.log('fonction role_data')

// IMPORTS AND VARS
var script = require('./createroles')
var roles_id = []
     

// données imaginaires
          var IN_NATHEL = false
          var TEAM = true
          var MAPSET_MANAGER = true
          var CAST_MANAGER = true
          var REF_MANAGER = true
          var SCHEDULER = true
          var Acronym = 'O!NT' + ' '

//DEFINITION OF THE ROLES
          //HOST
          let host_name = "HOST"
          let host_color = "#de0000"
          let host_hoist = 1
          let host_position = 1
          let host_mentionable = 1
          let host_permissions = ['ADMINISTRATOR']
          let host_reason = "Rôle reservé à l'unique HOST du tournoi"

          script.createrole(msg, gd, host_name, host_color, host_hoist, host_position, host_mentionable, host_permissions, host_reason)
          
          //CO-HOSTS   
          let co_host_name = "CO-HOST"
          let co_host_color = "#e74f4f"
          let co_host_hoist = 1
          let co_host_position = 2
          let co_host_mentionable = 1
          let co_host_permissions = ['ADMINISTRATOR']
          let co_host_reason = "Rôle reservé aux CO-HOST du tournoi"

          script.createrole(msg, gd, co_host_name, co_host_color, co_host_hoist, co_host_position, co_host_mentionable, co_host_permissions, co_host_reason)
          
          //MAPSET MANAGER - if there is one
          if (MAPSET_MANAGER === true) {

                    let MAPSET_MANAGER_name = "Mapsetting Manager"
                    let MAPSET_MANAGER_color = "#49ba10"
                    let MAPSET_MANAGER_hoist = 1
                    let MAPSET_MANAGER_position = 3
                    let MAPSET_MANAGER_mentionable = 1
                    let MAPSET_MANAGER_permissions = null
                    let MAPSET_MANAGER_reason = "Rôle reservé au gérant de tout les mapsetters du tournoi"
          
                    script.createrole(msg, gd, MAPSET_MANAGER_name, MAPSET_MANAGER_color, MAPSET_MANAGER_hoist, MAPSET_MANAGER_position, MAPSET_MANAGER_mentionable, MAPSET_MANAGER_permissions, MAPSET_MANAGER_reason)

          }
          //REF MANAGER - if there is one
          if (REF_MANAGER === true) {

                    let REF_MANAGER_name = "Refereeing Manager"
                    let REF_MANAGER_color = "#094aea"
                    let REF_MANAGER_hoist = 1
                    let REF_MANAGER_position = 4
                    let REF_MANAGER_mentionable = 1
                    let REF_MANAGER_permissions = null
                    let REF_MANAGER_reason = "Rôle reservé au gérant de tout les arbitres du tournoi"
          
                    script.createrole(msg, gd, REF_MANAGER_name, REF_MANAGER_color, REF_MANAGER_hoist, REF_MANAGER_position, REF_MANAGER_mentionable, REF_MANAGER_permissions, REF_MANAGER_reason)

          }

          //CAST MANAGER - if not in nathel and if there is one
          if (CAST_MANAGER === true && IN_NATHEL === false) {

                    let CAST_MANAGER_name = "Casting Manager"
                    let CAST_MANAGER_color = "#ea8a09"
                    let CAST_MANAGER_hoist = 1
                    let CAST_MANAGER_position = 5
                    let CAST_MANAGER_mentionable = 1
                    let CAST_MANAGER_permissions = null
                    let CAST_MANAGER_reason = "Rôle reservé au gérant de tout les casters du tournoi"
          
                    script.createrole(msg, gd, CAST_MANAGER_name, CAST_MANAGER_color, CAST_MANAGER_hoist, CAST_MANAGER_position, CAST_MANAGER_mentionable, CAST_MANAGER_permissions, CAST_MANAGER_reason)

          }
          //SCHEDULER - if there is one
          if (SCHEDULER === true) {

                    let SCHEDULER_name = "Scheduler"
                    let SCHEDULER_color = "09ea7d"
                    let SCHEDULER_hoist = 1
                    let SCHEDULER_position = 6
                    let SCHEDULER_mentionable = 1
                    let SCHEDULER_permissions = null
                    let SCHEDULER_reason = "Rôle reservé aux schedulers du tournoi"
          
                    script.createrole(msg, gd, SCHEDULER_name, SCHEDULER_color, SCHEDULER_hoist, SCHEDULER_position, SCHEDULER_mentionable, SCHEDULER_permissions, SCHEDULER_reason)

          }
          //<Acronym> REFEREE
          let referee_name = Acronym + "Referee"
          let referee_color = null
          let referee_hoist = 0
          let referee_position = 7
          let referee_mentionable = 1
          let referee_permissions = null
          let referee_reason = "Rôle reservé aux arbitres du tournoi tournoi"

          script.createrole(msg, gd, referee_name, referee_color, referee_hoist, referee_position, referee_mentionable, referee_permissions, referee_reason)
          
          //<Acronym> MAPSETTER
          let mapsetter_name = Acronym + "Mapsetter"
          let mapsetter_color = null
          let mapsetter_hoist = 0
          let mapsetter_position = 8
          let mapsetter_mentionable = 1
          let mapsetter_permissions = null
          let mapsetter_reason = "Rôle reservé aux mapsetters du tournoi"

          script.createrole(msg, gd, mapsetter_name, mapsetter_color, mapsetter_hoist, mapsetter_position, mapsetter_mentionable, mapsetter_permissions, mapsetter_reason)
          
          //<Acronym> STREAMER If not in nathel
          if (IN_NATHEL === false) {

                    let streamer_name = Acronym + "Streamer"
                    let streamer_color = null
                    let streamer_hoist = 0
                    let streamer_position = 9
                    let streamer_mentionable = 1
                    let streamer_permissions = null
                    let streamer_reason = "Rôle reservé aux streamers du tournoi, en cas d'abonnement"
          
                    script.createrole(msg, gd, streamer_name, streamer_color, streamer_hoist, streamer_position, streamer_mentionable, streamer_permissions, streamer_reason)
          }

          //<Acronym> COMMENTATOR If not in nathel
          if (IN_NATHEL === false) {

                    let commentator_name = Acronym + "Commentator"
                    let commentator_color = null
                    let commentator_hoist = 0
                    let commentator_position = 9
                    let commentator_mentionable = 1
                    let commentator_permissions = null
                    let commentator_reason = "Rôle reservé aux streamers du tournoi, en cas d'abonnement"
          
                    script.createrole(msg, gd, commentator_name, commentator_color, commentator_hoist, commentator_position, commentator_mentionable, commentator_permissions, commentator_reason)
          }

          //STAFF
          let staff_name = "Staff"
          let staff_color = "#e6f200"
          let staff_hoist = 1
          let staff_position = 10
          let staff_mentionable = 0
          let staff_permissions = null
          let staff_reason = "Rôle reservé à tout les membre du staff du tournoi"

          script.createrole(msg, gd, staff_name, staff_color, staff_hoist, staff_position, staff_mentionable, staff_permissions, staff_reason)
          
          //Captains if TeamVS competition
          if (TEAM === true) {

                    let CAST_MANAGER_name = Acronym + "Captains"
                    let CAST_MANAGER_color = "#9d00c4"
                    let CAST_MANAGER_hoist = 1
                    let CAST_MANAGER_position = 11
                    let CAST_MANAGER_mentionable = 0
                    let CAST_MANAGER_permissions = null
                    let CAST_MANAGER_reason = "Rôle reservé à tout les capitaines d'équipe du tournoi, en cas de tournoi TEAMVS"
          
                    script.createrole(msg, gd, CAST_MANAGER_name, CAST_MANAGER_color, CAST_MANAGER_hoist, CAST_MANAGER_position, CAST_MANAGER_mentionable, CAST_MANAGER_permissions, CAST_MANAGER_reason)
          }

          //<Acronym> Participant
          let participant_name = Acronym + "Participant"
          let participant_color = "#db4aff"
          let participant_hoist = 1
          let participant_position = 12
          let participant_mentionable = 1
          let participant_permissions = null
          let participant_reason = "Rôle reservé à tout les joueurs"

          script.createrole(msg, gd, participant_name, participant_color, participant_hoist, participant_position, participant_mentionable, participant_permissions, participant_reason)
                    
          
    
}

exports.role_data = role_data
