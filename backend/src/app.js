require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

// Ensure DB & tables exist
require('./config/db');

const stripeRoutes = require('./routes/stripeRoutes');
const creditRoutes = require('./routes/creditRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/stripe-webhook', stripeRoutes);
app.use('/api/credits', creditRoutes);

// Serve frontend build if exists
const frontendDist = path.join(__dirname, '..', '..', 'frontend', 'dist');
if (require('fs').existsSync(frontendDist)) {
  app.use('/', express.static(frontendDist));
  app.get('*', (req, res) => res.sendFile(path.join(frontendDist, 'index.html')));
} else {
  app.get('/', (req, res) => res.json({ message: 'Backend running. Visit /api/admin/stats' }));
}

app.listen(PORT, () => console.log(`Backend listening on http://localhost:${PORT}`));
