//
//
//

class tik_tak_toe {

  constructor(game_id) {
    this.game_id = game_id;
    this.map = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
  }

  get_map() {
    return this.map;
  }
}
