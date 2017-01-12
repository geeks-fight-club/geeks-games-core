//
//
//

const express = require('express');
const router = express.Router();

const Game = require('core/game');

router.get('/game/board/:uuid', function(req, res, next) {

  let game_uuid = req.params.uuid;

  Game.get_map(game_uuid, function(err, map) {
    if (err) {
      return next(err);
    }

    res.json({
      map
    });

  });
});

module.exports = router;
