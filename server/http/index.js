//
//
//

const bodyParser = require('body-parser');
const json_ui = require('./json-ui/');

function handler(app, cb) {

  cb = cb || function() {};

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));

  app.get('/', function(req, res, next) {
    res.redirect(global.init.JSON_VIEW_PRE);
  });


  app.use(global.init.JSON_VIEW_PRE, json_ui.index);
  app.use(global.init.JSON_VIEW_PRE, json_ui.game_schemas_list);
  app.use(global.init.JSON_VIEW_PRE, json_ui.game_init);
  app.use(global.init.JSON_VIEW_PRE, json_ui.gamer_init);
}

module.exports = handler;
