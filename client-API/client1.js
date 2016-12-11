//
//
//

const HOST = 'http://localhost';
const PORT = '7777';

const GAME_UUID = '27b1c94a-80fd-4d1e-b936-1782b9f616f3';
const GAMER_UUID = '18cfc1f6-9bb1-4747-8f67-9491612b3d14';

const socket = require('socket.io-client')(HOST + ':' + PORT);

let communicate_uuid;

console.log('\n GAME_UUID => ' + GAME_UUID);
console.log(' GAMER_UUID => ' + GAMER_UUID + '\n');

console.log(' connecting...');

socket.on('connect', function(io) {

  console.log(' <= [connect]');
  console.log(' <= [init]');

  // send identifer data to server
  socket.emit('init', {
    game_uuid: GAME_UUID,
    gamer_uuid: GAMER_UUID
  });

  socket.on('confirm', function() {
    console.log(' => [confirm]');
  });

  socket.on('info', function(info) {
    console.log(` => [info] -> ${info.message}`);
  });

  socket.on('err', function(err) {
    console.log(` => [error] -> status => ${err.status} / message => ${err.message}`);
  });
});


socket.on('disconnect', function() {
  console.log(' => [disconnect] :/');
});
