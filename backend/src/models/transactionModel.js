const db = require('../config/db');

const insertTransaction = (email, amount, timestamp) => {
  return new Promise((resolve, reject) => {
    const credits = Math.floor(amount);
    db.run(
      `INSERT INTO transactions (email, amount, credits, timestamp) VALUES (?, ?, ?, ?)`,
      [email, amount, credits, timestamp],
      function (err) {
        if (err) reject(err);
        else resolve({ id: this.lastID, email, amount, credits, timestamp });
      }
    );
  });
};

const getTotalAmountForEmail = (email) => {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT SUM(amount) as total_amount FROM transactions WHERE email = ?`,
      [email],
      (err, row) => {
        if (err) reject(err);
        else resolve(row.total_amount || 0);
      }
    );
  });
};

const getStats = () => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT * FROM transactions ORDER BY id DESC LIMIT 10`,
      [],
      (err, recent) => {
        if (err) return reject(err);
        db.get(
          `SELECT COUNT(*) as total_transactions, SUM(amount) as total_amount FROM transactions`,
          [],
          (err2, summary) => {
            if (err2) return reject(err2);
            resolve({
              total_transactions: summary.total_transactions || 0,
              total_amount: summary.total_amount || 0,
              last_10_users: recent
            });
          }
        );
      }
    );
  });
};

module.exports = { insertTransaction, getTotalAmountForEmail, getStats };
