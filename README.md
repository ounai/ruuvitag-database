# ruuvitag-database
Collects data from nearby RuuviTags to an SQL database.

Tested & confirmed to work on Raspberry Pi and M1 MacBook Pro.

Uses [node-ruuvitag](https://github.com/pakastin/node-ruuvitag) for interfacing with RuuviTags and [Sequelize](https://sequelize.org) for database access.

## Installation
1. ```npm install ruuvitag-database```
1. [Enable BLE access for noble](https://github.com/abandonware/noble#installation)

## Usage
```js
const initRuuviDB = require('ruuvitag-database');

// SQLite example, requires sqlite3 package to be manually installed
// `npm install sqlite3`
initRuuviDB({
  logging: false,
  dialect: 'sqlite',
  storage: './db.sqlite'
});

// Postgres example, requires pg package to be manually installed
// `npm install pg`
initRuuviDB({
  logging: false,
  dialect: 'postgres',
  host: 'localhost',
  database: 'ruuvitag',
  username: 'postgres',
  password: ''
});
```
