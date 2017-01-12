//
//
//

const events = require('./events');

function handler(io, cb) {

  cb = cb || function() {};

  io.on('connect', function(socket) {

    console._log('<= [socket] [connect]');

    events.init(socket, io);
    events.choose(socket, io);
  });

  io.on('error', function(error) {
    console._error(error);
  });
}

module.exports = handler;
