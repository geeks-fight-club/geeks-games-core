//
//
//

function info_emit(socket, message, cb) {

  cb = cb || function() {};

  socket.emit('info', {
    message: message
  });

}

module.exports = info_emit;
