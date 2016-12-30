//
//
//
//
//
//

const Game = require('core/game');
const Events = require('../');
const db = require('db');
// const Cp = require('core/clock');

function turn(socket, io, game_uuid, cb) {

  cb = cb || function() {};

  // TODO check func params and cb err

  let cycle = setInterval(game_turn, 1000);

  let n = 0;

  function game_turn() {

    // if game ends
    // n is game.logs.length
    if (n > 8) {
      console.log('game ends!');
      return clearInterval(cycle);
    }

    Game.choose_player(game_uuid, function(err) {

      // TODO s
      // call turn of user and give him/her map
      db.games.findOne({
        uuid: game_uuid
      }).lean().exec(function(err, game) {

        if (err) {
          return cb({
            status: 404,
            err: err
          })
        }

        let user_uuid = game.fighters[game.turn_user];
        let user_socket_id = global.fighters.by_uuid[user_uuid].socket_id;

        console.log(`turn_user -> ${game.turn_user}`);

        io.to(user_socket_id).emit('turn', {});
      })
    })


    // get the data and to game and update map and data in db

    // change turn_user of game


    console.log("turn -> " + n++ + " -> " + new Date());
  }
}

module.exports = turn;
