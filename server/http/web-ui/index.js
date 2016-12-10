//
//
//

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {

  const data = '<h1>Programming games</h1><p>Web view is under construct please use <a href="/json/">JSON UI</a></p> <p> Note : for better use of JSON UI, install JSONview extention.</p>'
  res.send(data);

});

module.exports = router;
