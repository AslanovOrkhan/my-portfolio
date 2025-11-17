const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// .env faylını yüklə
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL, // Frontend-ə icazə ver
  credentials: true
}));
app.use(express.json()); // JSON data qəbul et
app.use(express.urlencoded({ extended: true })); // Form data qəbul et

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API işləyir! 🚀' });
});

// Routes
const contactRoutes = require('./routes/contact.routes');
app.use('/api/contact', contactRoutes);

// Server başlat
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server ${PORT} portunda işləyir`);
});