const express = require("express");
require("dotenv").config();
const cors = require("cors");
const assetRoutes = require("./routes/assets");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", assetRoutes);

app.listen(5030, () => console.log("Backend running on port 5030"));
