const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const addressRoutes = require("./routes/addressRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/address", addressRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(5001, () => {
  console.log("user service running at 5001");
});
