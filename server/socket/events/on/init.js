//
//
//

const Game = require('core/game');
const Events = require('../');

function init(socket, io, cb) {

  cb = cb || function() {};

  socket.on('init', function(game) {

    // TODO better error handling
    if (!game || !game.game_uuid || !game.gamer_uuid) {
      console._log("=> [socket] [err] low args");
      // emit error
      return;
    }

    console._log(`<= [socket] [init] / game_uuid => ${game.game_uuid} / user_uuid => ${game.gamer_uuid}`);

    Game.add_gamer(game.game_uuid, game.gamer_uuid, function(err, status) {

      if (err) {
        console._log(`=> [socket] [err] / err => ${err.err.message} / game_uuid => ${game.game_uuid} / user_uuid => ${game.gamer_uuid}`);
        return Events.err(socket, err);
      }

      // start the game!
      // TODO this n should get from game configs
      if (status.users_n == 2) {

        Events.start(socket, io, game.game_uuid);
      }


      // store datas in RAM
      global.players.by_socket_id[socket.id] = {
        game_uuid: game.game_uuid,
        user_uuid: game.gamer_uuid
      };

      global.players.by_uuid[game.gamer_uuid] = {
        socket_id: socket.id,
        game_uuid: game.game_uuid
      };

      socket.join(game.game_uuid);
      socket.emit('confirm');

      if (status.add) {
        console._log(`=> [socket] [confirm] / game_uuid => ${game.game_uuid} / user_uuid => ${game.gamer_uuid}`);
      }

      if (status && status.exists) {
        console._log(`=> [socket] [confirm] [exists] / game_uuid => ${game.game_uuid} / user_uuid => ${game.gamer_uuid}`);
        Events.info(socket, null, 'you reconnect to this game.');
      }
    });
  });
}

module.exports = init;
