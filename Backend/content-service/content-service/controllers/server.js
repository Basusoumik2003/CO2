const express = require('express');
const connectDB = require('./config/db');
const blogRoutes = require('./routes/blogRoutes');
require('dotenv').config();

const app = express();
connectDB();

app.use(express.json());
app.use('/api/blogs', blogRoutes);

const PORT = process.env.PORT || 5009;
app.listen(PORT, () => {
  console.log(`Blog Service running on port ${PORT}`);
});
