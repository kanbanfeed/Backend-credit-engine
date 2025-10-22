const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

const dbPath = path.join(dataDir, 'credits.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error('DB connection error:', err);
  else console.log('Connected to SQLite DB:', dbPath);
});

// create transactions table
db.run(`
CREATE TABLE IF NOT EXISTS transactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  amount REAL NOT NULL,
  credits INTEGER NOT NULL,
  timestamp TEXT NOT NULL
)
`, (err) => {
  if (err) console.error('Table creation error:', err);
  else console.log('transactions table ready');
});

module.exports = db;
