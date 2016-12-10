//
//
//

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {

  const base_url = `http://${global.init.base_url}:${global.init.port}${global.init.JSON_VIEW_PRE}`;

  const data = {
    status: 200,
    methods: [{
      url: base_url + 'game/init/'
    }, {
      url: base_url + 'gamer/init/'
    }, {
      url: base_url + 'game/scoreboard/{game_id}',
    }],
    docs: 'https://github.com/f-club ...comming soon'

  };

  res.json(data);
});

module.exports = router;
