//
//
//

const game_logic = require('core/game');

function handler(io, cb) {

  cb = cb || function() {};

  io.on('connect', function(socket) {

    console.log('<= [socket] [connect]');

    socket.on('init', function(game) {

      console.log(`<= [socket] [init] / game_uuid => ${game.game_uuid} / user_uuid => ${game.gamer_uuid}`);

      game_logic.add_gamer(game.game_uuid, game.gamer_uuid, function(err, user) {

        if (err) {
          return error_emit(err);
        }

        socket.emit('confirm');
        console.log(`=> [socket] [confirm] / game_uuid => ${game.game_uuid} / user_uuid => ${game.gamer_uuid}`);
      });
    });



    function error_emit(err) {
      let status = err.status;
      let message = err.err.message;

      socket.emit('err', {
        status: status,
        message: message
      });
    }


    function info_emit(message) {
      socket.emit('info', {
        message: message
      });
    }

  });

}

module.exports = handler;
