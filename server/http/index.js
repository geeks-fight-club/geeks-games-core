//
//
//

const bodyParser = require('body-parser');

const json_init_game = require('./json-ui/game_init');
const json_init_gamer = require('./json-ui/gamer_init');
const json_index = require('./json-ui/index');

const web_index = require('./web-ui/index');

function handler(app, cb) {

  cb = cb || function() {};

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));

  app.get('/', function(req, res, next) {
    res.redirect(global.init.WEB_VIEW_PRE);
  });


  app.use(global.init.WEB_VIEW_PRE, web_index);
  app.use(global.init.JSON_VIEW_PRE, json_index);
  app.use(global.init.JSON_VIEW_PRE, json_init_game);
  app.use(global.init.JSON_VIEW_PRE, json_init_gamer);
}

module.exports = handler;
