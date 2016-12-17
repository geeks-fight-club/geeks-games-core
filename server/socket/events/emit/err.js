//
//
//

function error_emit(socket, err, room, cb) {

  cb = cb || function() {};

  let status = err.status || 404;
  let message = err.err.message || "Not Found";

  socket.emit('err', {
    status: status,
    message: message
  });
}

module.exports = error_emit;
