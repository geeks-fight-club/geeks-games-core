//
//
//

// main configs
global.init = require('./config.json');
global.init.web_url = `http://${global.init.base_url}:${global.init.port}${global.init.JSON_VIEW_PRE}`

// _id index
global.game_schemas = {};

// uuid index
global.games = {};
global.fighters = {
  by_uuid: {},
  by_socket_id: {}
};

const express = require('express');
const app = express();

// main handers
const io_handler = require('./server/socket/');
const http_handler = require('./server/http/');
const connect_mongo = require('./bin/connect_mongo');

// create server
const server = require('http').Server(app);
const io = require('socket.io')(server);

// call main handlers
http_handler(app);
io_handler(io);

connect_mongo(function(err, status) {

  if (err) {
    console.error("mongo connection error!");
    throw err;
  }

  // run the server
  server.listen(global.init.port);
});

// load some usefull codes
require('colors');
require('./server/testing');
require('./server/node_modules/logger');
require('./server/init/games_loader');
