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
      url: base_url + 'game_schemas/list/'
    }, {
      url: base_url + 'fighter/init/'
    }, {
      url: base_url + 'game/ring/{game_id}',
    }],
    docs: 'https://github.com/f-club/geeks-games-core'

  };

  res.json(data);
});

module.exports = router;
