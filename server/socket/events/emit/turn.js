//
//
//
//
//
//

const Game = require('core/game');
const Events = require('../');
const db = require('db');

function turn(socket, io, game_uuid, cb) {

  cb = cb || function() {};

  if (!socket || !io || !game_uuid) {
    return cb({
      status: 400,
      err: new Error('low args')
    })
  }


  let cycle = setInterval(game_turn, 1000);

  let n = 0;

  function game_turn() {

    // if game ends
    // n should be game.logs.length
    if (n > 8) {
      console.log('game ends for cycle end!');
      return clearInterval(cycle);
    }

    console.log(`turn -> ${n}`);

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

        // console.log(`turn_user -> ${game.turn_user}`);

        // call gamer to play the game
        io.to(user_socket_id).emit('turn', game.map);
        console.log(` => [socket] [choose]`);
      })
    })


    // get the data and to game and update map and data in db

    n++;
    // console.log("turn -> " + n++ + " -> " + new Date());
  }
}

module.exports = turn;
