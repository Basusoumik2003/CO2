// backend/server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
//const blogRoutes=require('./content-service/content-service/routes/blogRoutes')
// const authRoutes = require('./routes/auth');
const evRoutes = require('./routes/ev');
const solarRoutes = require('./routes/solar');
// const profileRoutes = require('./routes/profile');
const treeRoutes = require('./routes/treeRoutes');
// const imageRoutes = require('./routes/imageRoutes');
// const creditRoutes = require("./routes/creditRoutes");
// const connectMongo = require('./config/mongo'); // ✅ Mongo connect import
// const evTransactionRoutes = require('./routes/evTransactionRoutes');
const setupDatabase = require('./setup-db');

dotenv.config();
const app = express();

// Setup database tables
setupDatabase()
  .then(() => console.log('✅ Database tables ready'))
  .catch(err => console.error('❌ Database setup failed:', err));

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Routes
//app.use('/api/blogs',blogRoutes);
// app.use( evTransactionRoutes);
// app.use('/api/evtransaction',evTransactionRoutes);
// app.use('/api/auth', authRoutes);
app.use('/api/evmasterdata', evRoutes);
app.use('/api/solarpanel', solarRoutes);
// app.use('/api/profile', profileRoutes);
app.use('/api/tree', treeRoutes); // ✅ Add tree routes if needed
// app.use('/api/image', imageRoutes); // ✅ Add image routes
// app.use("/api/credits", creditRoutes);
// Test endpoint
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT,'0.0.0.0', () => console.log(`✅ Backend running on port ${PORT}`));