//
//
//

const express = require('express');
const router = express.Router();
const randomstring = require('randomstring');
const Player = require('core/player');

router.get('/player/init', function(req, res, next) {

  let random_name = "player_"
  random_name += randomstring.generate({
    length: 4,
    charset: 'numeric'
  });

  let user = {
    username: req.body.username || random_name
  };

  Player.add(user, function(err, player, exists) {

    if (err) {
      return next(err);
    }

    if (player) {
      return res.json({
        username: player.username,
        uuid: player.uuid
      });
    }

    res.status(409).json(exists);
  })

});

module.exports = router;
