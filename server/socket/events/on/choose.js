//
//
//

const Game = require('core/game');
const Events = require('../');

function init(socket, io, cb) {

  cb = cb || function() {};

  socket.on('choose', function(choose) {

    // TODO better error handling
    if (typeof choose == 'undefined') {

      console._log("=> [socket:choose] [err] low args");

      // emit error
      return;
    }

    console._log(`<= [socket] [choosed] choose -> ${choose}`);

    let game_uuid = global.fighters.by_socket_id[socket.id].game_uuid;
    let user_uuid = global.fighters.by_socket_id[socket.id].user_uuid;

    Game.choose(game_uuid, user_uuid, choose, function(err, end, winner) {

      if (err) {

        // TODO do something...
        return;
      }

      if (end) {
        Events.end(socket, io, game_uuid, winner);
      }

    });
  });
}

module.exports = init;
