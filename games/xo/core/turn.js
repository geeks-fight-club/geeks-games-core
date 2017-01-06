//
//
//

function turn(choose, map, data, logs, player, cb) {

  cb = cb || function() {};

  let end = false;
  let err = null;

  // debugging logs
  console.log(`choose : ${choose}`);
  console.log(`map :`);
  console.open(map);
  // console.log(`data :`);
  // console.open(data);
  // console.log(`logs :`);
  // console.open(logs);
  // console.log(`player : ${player}`);


  // is this choose ok?
  if (map[choose] != 0) {
    return cb('invalid choose!');
  }

  // choose
  map[choose] = player;

  // did he/she win?

  if ((map[0] == player && map[1] == player && map[2] == player) ||
    (map[0] == player && map[3] == player && map[6] == player) ||
    (map[2] == player && map[5] == player && map[8] == player) ||
    (map[6] == player && map[7] == player && map[8] == player) ||
    (map[0] == player && map[4] == player && map[8] == player) ||
    (map[2] == player && map[4] == player && map[6] == player)) {

    // win
    end = true;
  }

  // not win, lets contine the game
  cb(err, map, end, data);
}

module.exports = turn;
