//
//
//

const fs = require('fs');
const path = require('path');

find_games();

function find_games() {

  let games_folder_path = path.resolve(__dirname, '../../games/');

  fs.readdir(games_folder_path, function(err, files) {

    let games_paths = [];

    files.forEach(function(file) {
      games_paths.push(games_folder_path + '/' + file);
    })

    load_games(games_paths);
  })
}

function load_games(games_paths) {
  console.log(games_paths);
}
