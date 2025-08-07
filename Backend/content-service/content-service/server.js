require('dotenv').config({ path: __dirname + '/.env' }); // <-- force local .env

const express = require('express');
const connectDB = require('./config/db');
const blogRoutes = require('./routes/blogRoutes');

const cors = require("cors");

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/blogs', blogRoutes);

const PORT = process.env.PORT || 5009;
app.listen(PORT, () => {
  console.log(`Blog Service running on port ${PORT}`);
});
