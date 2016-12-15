//
//
//

const fs = require('fs');
const path = require('path');
const db = require('db');
const game_logic = require('core/game/');
const game_schema = require('core/game_schema/');


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
      load_game(game_path, file);
    })
  })
}

function load_game(game_path, game_name) {

  let game = require(game_path);

  if (!game || !game.db_init || !game.init || !game.turn || !game.config) {
    console.log(`not valid game => ${game_name}`);
    return;
  }

  console.open(game);

  let schema = game.db_init;
  schema.path = game_path;

  console.open(schema);

  game_schema.add(schema);
}
