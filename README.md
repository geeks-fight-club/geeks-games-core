# programmers-games
`programmers-games` is a game platform for programmers, your codes runs in your computers and act in online games, better codes will win the game.

And you can write **your own!** created games and load them for players to play.

## Strcture of project

### I. [core](https://github.com/geeks-fight-club/geeks-games-core)
core is the main server of the game, It load the games form it's [games](https://github.com/geeks-fight-club/geeks-games-core/tree/master/games) folder and run it for clinets,

core have 2 interfaces:
- `socket` interface for clients to connect to it.
- `json-UI` api for `web-UI` and others to connect it.

### II. [clients](https://github.com/geeks-fight-club/geeks-games-clients)
clients are any programmers codes that want's to play games, we support many programming languages for clients.

### III. [web-UI](https://github.com/geeks-fight-club/geeks-games-web-UI) comming sooon...
`web-UI` is the web interface of the game, user managment, generating games, rankings,...

note that `web-UI` is just a better user interface from `json-UI`.

## Runnig
### server
You need to install [Nodejs](https://nodejs.org) (version >= 6.9.1) and [mongodb](https://mongodb.org).

clone this repo or download `.zip` file ,go in the folder,

then:
```
$  npm install
$  node app.js
```

### client
For running clients you need to choose your languages and install it's dependancy, you have to check [client-API](https://github.com/f-club/geeks-games-clients) repo.

### Technical Details
The basic idea was useing `sockets` for communicating beteen `core` project that run server and judge the result, `clients` thatplay the game and `monitor` that view the game , we use [socket.io](socket.io) in implementing in [Nodejs](http://nodejs.org).

### Contributing
All the projects are under contribute and you can join in every part you want by pull requests.

### TODO
- [ ] cumunicate uuid.
- [ ] cleaner names in db.
- [ ] delete uuid in db and use users `_id` instead.
- [x] map players on map by something else(not players uuid).
- [ ] cpp client.
- [ ] python client.
- [ ] start `web-UI` project.

####LICENCE
[MIT](https://github.com/f-club/programmers-games/blob/master/LICENSE)
