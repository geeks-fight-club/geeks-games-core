//
//
//

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {

  const base_url = global.init.web_url;

  const data = {
    status: 200,
    methods: [{
      url: base_url + 'game_schemas/list',
      desc: "list of games"
    }, {
      url: base_url + 'player/init',
      desc: "init a player"
    }, {
      url: base_url + 'game/board/{game_id}',
      desc: "watch a game board"
    }],
    docs: 'https://github.com/geeks-fight-club/geeks-games-core'
  };

  res.json(data);
});

module.exports = router;
