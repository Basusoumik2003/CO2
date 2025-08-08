const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Contact Service Routes
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5015;
app.listen(PORT, () => {
  console.log(`🚀 Contact service running at http://localhost:${PORT}`);
});
