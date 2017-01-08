//
//
//

const Game = require('core/game');
const Events = require('../');

function end(socket, io, game_uuid, winner, cb) {

  cb = cb || function() {};
  winner = winner || null;


  if (!socket || !game_uuid) {
    return cb({
      status: 400,
      err: new Error('low args')
    })
  }

  // broad cast end message
  io.sockets.in(game_uuid).emit('end', {
    winner
  });

  // end the game
  Game.end(game_uuid, winner, function(err, result) {

    if (winner) {
      console._log(`*=>[socket] [end] winner -> ${winner}`);
    } else {
      console._log(`*=>[socket] [end] tie!`);
    }
  });
}

module.exports = end;
