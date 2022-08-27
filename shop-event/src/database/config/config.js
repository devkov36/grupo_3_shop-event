require('dotenv').config();

module.exports = {
  "development": {
    "username": "root",
    "password":  process.env.PASSWORD_DB || '',
    "database": "shopevent_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "shopevent_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "shopevent_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
