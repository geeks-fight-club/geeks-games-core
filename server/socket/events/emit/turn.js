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

      // if not ends from chooser
      if (n != 100) {
        console._log('game ends for cycle end!');
        Events.end(socket, io, game_uuid);
      }

      // stop the timer
      return clearInterval(cycle);
    }

    Game.choose_player(game_uuid, function(err, choosed, game_ends) {


      if (game_ends) {
        n = 100;
        return;
      }

      console._log(`turn -> ${n}`);

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


        // call gamer to play the game
        io.to(user_socket_id).emit('turn', game.map);
        console._log(`=> [socket] [choose]`);
      })
    })

    n++;
  }
}

module.exports = turn;
