const sqlite3 = require('sqlite3').verbose();
const path = require('path');
require('dotenv').config();

const DB_FILE = process.env.DATABASE_FILE || path.join(__dirname, '..', '..', 'data', 'credits.db');

const db = new sqlite3.Database(DB_FILE, (err) => {
  if (err) {
    console.error('SQLite connection error:', err.message);
  } else {
  }
});

module.exports = db;
