const { getTotalAmountForEmail, getStats } = require('../models/transactionModel');

const getCredits = async (req, res) => {
  try {
    const email = String(req.params.email || '').toLowerCase();
    if (!email) return res.status(400).json({ error: 'Email required in path' });

    const totalAmount = await getTotalAmountForEmail(email);
    const credits = Math.floor(Number(totalAmount || 0));
    return res.json({ email, totalAmount: Number(totalAmount || 0), credits });
  } catch (err) {
    console.error('getCredits error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
};

const adminStats = async (req, res) => {
  try {
    const stats = await getStats();
    const total_credits = Math.floor(Number(stats.total_amount || 0));
    return res.json({
      total_transactions: stats.total_transactions,
      total_amount: Number(stats.total_amount || 0),
      total_credits,
      last_10_users: (stats.last_10_users || []).map(u => ({
        email: u.email,
        latest_timestamp: u.timestamp,
        total_amount: Number(u.amount || 0),
        credits: Math.floor(Number(u.amount || 0))
      }))
    });
  } catch (err) {
    console.error('adminStats error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getCredits, adminStats };
