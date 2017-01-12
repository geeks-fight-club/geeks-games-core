//
//
//

const express = require('express');
const router = express.Router();

const Game = require('core/game');

router.get('/game/init/:id', function(req, res, next) {

  let game_schema_id = req.params.id;

  Game.init(game_schema_id, function(err, game) {
    if (err) {
      return next(err);
    }

    console._log(`<= [web] [game_init] -> uuid => ${game.uuid}`);

    res.json({
      uuid: game.uuid,
      game_board_link: `${global.init.web_url}game/board/${game.uuid}`
    });

  });
});

module.exports = router;
