//
//
//

const fs = require('fs');
const path = require('path');
const db = require('db');
const game_logic = require('core/game');


game_logic.disable_all();
find_games();

function find_games() {

  let games_folder_path = path.resolve(__dirname, '../../games/');

  // find name of each games folder
  fs.readdir(games_folder_path, function(err, files) {

    // load each game folder/file
    files.forEach(function(file) {
      let game_path = games_folder_path + '/' + file;
      load_game(game_path);
    })
  })
}

function load_game(games_path) {
  console.log(games_path);

}
