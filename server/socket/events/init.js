//
//
//

const game_logic = require('core/game');
const events = require('./');

function init(socket, cb) {

  cb = cb || function() {};

  socket.on('init', function(game) {

    console.log(`<= [socket] [init] / game_uuid => ${game.game_uuid} / user_uuid => ${game.gamer_uuid}`);

    game_logic.add_gamer(game.game_uuid, game.gamer_uuid, function(err, status) {

      if (err) {
        return events.err(socket, err);
      }

      if (status && status.add) {
        socket.emit('confirm');
        console.log(`=> [socket] [confirm] / game_uuid => ${game.game_uuid} / user_uuid => ${game.gamer_uuid}`);
        return;
      }

      if (status && status.exists) {
        socket.emit('confirm');
        console.log(`=> [socket] [confirm] / game_uuid => ${game.game_uuid} / user_uuid => ${game.gamer_uuid}`);
        events.info(socket, 'you reconnect to this game.')
        console.log(`=> [socket] [exists] / game_uuid => ${game.game_uuid} / user_uuid => ${game.gamer_uuid}`);
        return;
      }

    });
  });
}

module.exports = init;
