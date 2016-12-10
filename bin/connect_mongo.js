//
//
//

const mongoose = require('mongoose');

module.exports = connect_mongo;

function connect_mongo(cb) {

  cb = cb || function() {};

  mongoose.Promise = global.Promise;
  mongoose.connect(global.init.db_url);

  let db = mongoose.connection;

  db.on('error', function(err) {
    console.log('Error : Mongodb ' + err);
    cb(err);
  });

  db.once('open', function() {
    cb(null, true);
  });
}
