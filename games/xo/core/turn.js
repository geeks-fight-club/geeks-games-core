//
//
//

let SAMPLES = ['X', 'O'];

function turn(choose, map, data, logs, players, player_index, cb) {

  cb = cb || function() {};

  let end = false;
  let err = null;


  let player = players[player_index];

  // debugging logs
  // console.log(`choose : ${choose}`);
  // console.log(`map :`);
  // console.open(map);
  // console.log(`data :`);
  // console.open(data);
  // console.log(`logs :`);
  // console.open(logs);
  // console.log(`player : ${player}`);


  // is this choose ok?
  if (map[choose] != 0) {
    return cb('invalid choose!');
  }

  // set choose in map
  map[choose] = SAMPLES[players.indexOf(player)];


  // did he/she win?
  if ((map[0] != 0 && map[0] == map[1] && map[1] == map[2]) ||
    (map[0] != 0 && map[0] == map[3] && map[3] == map[6]) ||
    (map[2] != 0 && map[2] == map[5] && map[5] == map[8]) ||
    (map[6] != 0 && map[6] == map[7] && map[7] == map[8]) ||
    (map[0] != 0 && map[0] == map[4] && map[4] == map[8]) ||
    (map[1] != 0 && map[1] == map[4] && map[4] == map[7]) ||
    (map[3] != 0 && map[3] == map[4] && map[4] == map[5]) ||
    (map[2] != 0 && map[2] == map[4] && map[4] == map[6])) {

    // win
    end = true;
  }

  // not win, lets contine the game
  cb(err, map, end, data);
}

module.exports = turn;
