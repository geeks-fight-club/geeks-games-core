//
//
//

const events = require('./events');

function handler(io, cb) {

  cb = cb || function() {};

  io.on('connect', function(socket) {

    console.log('<= [socket] [connect]');

    events.init(socket, io);
    events.ping(socket);
  });

  io.on('error', function(error) {
    console.log(error);
  });


}

module.exports = handler;
