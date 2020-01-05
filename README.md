# Battleship Challenge 
## React/Socket.IO/Express/MySQL 


## Quick Start

``` bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

## Goal
Build a 2-player, client-server battleship game, with each player playing from their own browser window.

- [x] The frontend must be written in React
- [x] Gameplay must be asynchronous.  Once a player loads the page, all further gameplay should take place without the page reloading.
- [ ] The state of the game must be persisted in a SQL-based database (Postgres, MySQL, SQLite, etc) on the server end.
- [x] The server must be in Ruby, Javascript, Golang or Python (frameworks within these langauges are fine)

- Presentable
- 2 players, 5 ships each.
- Must include win detection
- Well-organized and formatted code.

* No need to worry about user authentication on the server.  That is, if your client-side code tells your server that it's player 1, it's fine for the server to just trust it.
* Don't bother with replay-ability.  If you can only play one game with this system, and have to wipe the database to start over, that's fine.
* Don't worry about security at all - all information at the API level can be public.
* Ships should be placed randomly by your code, as opposed to the players being able to place them manually.
* No more than 8 hours



### Authors

@jmpaul

### Version

1.0.0

### License

This project is licensed under the MIT License