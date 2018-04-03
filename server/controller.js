const axios = require('axios')

// var characters = ["Jon Snow", "Daenerys Targaryen", "Sandor Clegane", "Eddard Stark", "Ygritte", 
//                   "Davos Seaworth", "Drogo", "Tormund", "Theon Greyjoy", "Margaery Tyrell"];


let players = [];
let score = 0;
let id = 0;


module.exports = {
    boy: (request, response) => {
        response.status(200).send(stars)
    },

    // girl: (request, response) => {
    //     response.status(200).send(stars)
    // },

    read: (request, response) => {
        response.status(200).send(players)
    },

    create: (request, response) => {
        let player = {
            name: request.body.name,
            id: id,
            score: 0
        } 
        players.push(player)
        id++
        console.log(players)
        response.status(200).send(players)
    },

    update: (request, response) => {
        let index = null;
        console.log(request.body)
        players.forEach((player, i) => {
            console.log('player',player, request.body )
            if(player.name === (request.body.name)) index = i; 
        })
        console.log("player", players[index])
        players[index] = {
            name: request.body.name,
            id: players[index].id,
            score: request.body.score 
        }
        console.log(players)
       
        response.status(200).send(players);
    },

    delete: (request, response) => {
        if(request.params.name){
            players.forEach((player, i) => {
                if(player.name === (request.params.name)) {
                    players.splice(i, 1)
                }
        })
                
    }
                response.status(200).send(players);
    }
}
