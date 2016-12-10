//
//
//

const express = require('express');
const router = express.Router();

const game_init = require('core/game/init');

router.get('/game/init', function(req, res, next) {

  game_init(function(err, game) {

    if (err) {
      return next(err);
    }

    res.json({
      game_uuid: game.uuid,
      fightboard_url: `http://${global.init.base_url}:${global.init.port}/fightboard/${game.uuid}`,
      requred_player: 2
    });

    console.log(`<= [web] [game_init] -> uuid => ${game.uuid}`);

  });
});

module.exports = router;
