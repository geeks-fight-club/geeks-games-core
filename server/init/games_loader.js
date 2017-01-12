//
//
//

const fs = require('fs');
const path = require('path');
const db = require('db');
const Game_schema = require('core/game_schema');

const GAME_FOLDER_PATH = path.resolve(__dirname, '../../games/');

Game_schema.disable_all(function(err) {

  if (err) {
    throw err;
  }

  find_games();
});

function find_games() {

  console._log("loading games...");

  // find name of each games folder
  fs.readdir(GAME_FOLDER_PATH, function(err, files) {

    // load each game folder/file
    files.forEach(function(file) {

      let game_path = GAME_FOLDER_PATH + '/' + file;

      console._log(`find game => ${file}`);

      // load it
      Game_schema.load(game_path, file);
    })
  })
}
