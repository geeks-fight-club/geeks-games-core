//
//
//

const HOST = 'http://localhost';
const PORT = '7777';

const GAME_UUID = 'b06640d0-e64e-49c5-9d24-c56e54cab561';
const GAMER_UUID = '18cfc1f6-9bb1-4747-8f67-9491612b3d15';

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

  socket.on('join_wait', function() {
    console.log(' => [join_wait] waiting for other to join...');
  });

  socket.on('info', function(info) {
    console.log(` => [info] ${info.message}`);
  });


  // socket.on('start', function(map, uuid) {
  //   user_uuid = user.uuid;
  //   communicate_uuid = uuid;
  // });

  socket.on('err', function(err) {
    console.log(` => [error] -> status => ${err.status} / message => ${err.message}`);
  });
});


socket.on('disconnect', function() {
  console.log(' => [disconnect] :/');
});
