//
//
//

const fs = require('fs');
const path = require('path');
const db = require('db');
const game_logic = require('core/game');
const game_schema = require('core/game_schema');


game_schema.disable_all();
find_games();

function find_games() {

  console.log("loading games...");

  let games_folder_path = path.resolve(__dirname, '../../games/');

  // find name of each games folder
  fs.readdir(games_folder_path, function(err, files) {

    // load each game folder/file
    files.forEach(function(file) {

      let game_path = games_folder_path + '/' + file;

      console.log(`find game => ${file}`);

      // load it
      game_schema.load(game_path, file);
    })
  })
}
