const { insertTransaction } = require('../models/transactionModel');

const handleStripeWebhook = async (req, res) => {
  try {
    const body = req.body;
    let email = '';
    let amount = 0;
    let timestamp = Math.floor(Date.now() / 1000);

    if (body.email && body.amount !== undefined) {
      email = String(body.email).toLowerCase();
      amount = Number(body.amount);
      timestamp = body.timestamp || timestamp;
    } else if (body.data && body.data.object) {
      const obj = body.data.object;
      email = (obj.receipt_email || obj.email || '').toLowerCase();
      amount = obj.amount ? Number(obj.amount) : 0;
      timestamp = body.created || obj.created || timestamp;
    }

    if (!email || isNaN(amount)) {
      return res.status(400).json({ error: 'Invalid payload' });
    }

    const transaction = await insertTransaction(email, amount, timestamp);
    return res.status(200).json({ ok: true, transaction });
  } catch (err) {
    console.error('Webhook error:', err);
    res.status(500).json({ error: 'Server error while saving transaction.' });
  }
};

module.exports = { handleStripeWebhook };
