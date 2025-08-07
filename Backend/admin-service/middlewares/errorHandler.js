module.exports = (err, req, res, next) => {
  console.error("❌ Global error:", err.stack);
  res.status(500).json({ status: "error", message: "Something went wrong!" });
};
