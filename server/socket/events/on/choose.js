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

      console.log("=> [socket:choose] [err] low args");
      // emit error
      return;
    }

    console.log(`<= [socket] [choosed]`);

    let game_uuid = global.fighters.by_socket_id[socket.id].game_uuid;
    let user_uuid = global.fighters.by_socket_id[socket.id].user_uuid;

    Game.choose(game_uuid, user_uuid, choose);
  });
}

module.exports = init;
