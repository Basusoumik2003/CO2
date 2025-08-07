// const express = require("express");
// const router = express.Router();
// const creditController = require("../controllers/creditController");

// // Update or Insert Credit
// router.post("/update", creditController.updateCredit);

// // Get credit by UID
// router.get("/:uid", creditController.getCreditByUid);

// // (Optional) Get all credits
// router.get("/", creditController.getAllCredits);

// module.exports = router;
const express = require("express");
const router = express.Router();
const {
  initCreditIfNotExists,
  updateCredit,
  getCreditByUid,
  getAllCredits,
} = require("../controllers/creditController");

router.post("/credits/init", initCreditIfNotExists);
router.put("/credits", updateCredit);
router.get("/:uid", getCreditByUid);
router.get("/credits", getAllCredits);

module.exports = router;
