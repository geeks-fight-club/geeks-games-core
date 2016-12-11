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

      game_logic.add_gamer(game.game_uuid, game.gamer_uuid, function(err, status) {

        if (err) {
          return error_emit(err);
        }

        if (status && status.add) {
          socket.emit('confirm');
          console.log(`=> [socket] [confirm] / game_uuid => ${game.game_uuid} / user_uuid => ${game.gamer_uuid}`);
          return;
        }

        if (status && status.exists) {
          socket.emit('confirm');
          console.log(`=> [socket] [confirm] / game_uuid => ${game.game_uuid} / user_uuid => ${game.gamer_uuid}`);
          info_emit('reconnect to this game.')
          console.log(`=> [socket] [exists] / game_uuid => ${game.game_uuid} / user_uuid => ${game.gamer_uuid}`);
          return;
        }


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
