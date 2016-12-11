//
//
//

// main configs
global.init = require('./config.json');

const express = require('express');
const app = express();

// main handers
const io_handler = require('./server/socket/handler');
const http_handler = require('./server/http/handler');
const connect_mongo = require('./bin/connect_mongo');

// create server
const server = require('http').Server(app);
const io = require('socket.io')(server);

// call main handlers
http_handler(app);
io_handler(io);

connect_mongo(function(err, status) {

  if (err) {
    throw err;
  }

  // run the server
  server.listen(global.init.port);
});

// load some usefull codes
require('colors');
require('./server/testing');
require('./server/node_modules/logger');
require('./server/init/games');
