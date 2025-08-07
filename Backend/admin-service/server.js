const express = require("express");
const cors = require("cors");
const assetRoutes = require("./routes/assetRoutes");
const pendingCount=require("./routes/pendingCount")

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/assets", assetRoutes);
app.get("/api/assets/pending-count", pendingCount);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Admin service running on port ${PORT}`);
});
