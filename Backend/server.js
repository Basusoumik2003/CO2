// backend/server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const authRoutes = require('./routes/auth');
const evRoutes = require('./routes/ev');
const solarRoutes = require('./routes/solar');
const profileRoutes = require('./routes/profile');
const treeRoutes = require('./routes/treeRoutes');
const imageRoutes = require('./routes/imageRoutes');
const creditRoutes = require('./routes/creditRoutes');
const evTransactionRoutes = require('./routes/evTransactionRoutes');
const assetRoutes=require('../backend/routes/asset')


const connectMongo = require('./config/mongo'); // ✅ Mongo connect

dotenv.config();
const app = express();

// ✅ Connect MongoDB
connectMongo();

// ✅ Middlewares
app.use(cors({ origin: 'http://localhost:5173' })); // 
app.use(express.json());


// ✅ Admin routes

// ✅ Other routes
app.use('/api/auth', authRoutes);
app.use('/api/evmasterdata', evRoutes);
app.use('/api/solarpanel', solarRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/tree', treeRoutes);
app.use('/api/image', imageRoutes);
app.use('/api/credits', creditRoutes);
app.use('/api', require('./routes/evTransactionRoutes'));

app.use('/api/assets', assetRoutes);

// ✅ Test endpoint
app.get('/', (req, res) => {
  res.send('API is running...');
});

// ✅ Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
