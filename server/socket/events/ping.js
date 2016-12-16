//
//
//

function ping_emit(socket, cb) {

  cb = cb || function() {};

  if (!socket) {
    return cb({
      status: 400,
      err: new Error('low args')
    });
  }

  socket.emit('ping');
}

module.exports = ping_emit;