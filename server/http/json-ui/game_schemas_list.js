//
//
//

const express = require('express');
const router = express.Router();

const Game_schema = require('core/game_schema');

router.get('/game_schemas/list', function(req, res, next) {

  let view = {
    __v: false,
    path: false,
    disable: false
  }

  Game_schema.list(view, function(err, game_schemas) {

    game_schemas.forEach(function(game_schema) {
      game_schema.create_link = global.init.web_url + `game/init/${game_schema._id}`;
    });

    res.json(game_schemas);
  })

});

module.exports = router;
