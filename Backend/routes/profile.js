const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

// === Profile routes ===
router.post("/saveProfile", profileController.saveProfile);
router.get("/profiles", profileController.getAllProfiles);
router.get("/:uid", profileController.getProfileByUserId);

// === Address routes ===
router.post("/addAddress", profileController.addAddress);
router.get("/addresses/:p_id", profileController.getAddressesByProfile);
router.put("/updateAddress/:id", profileController.updateAddress);
router.delete("/deleteAddress/:id", profileController.deleteAddress);

module.exports = router;
