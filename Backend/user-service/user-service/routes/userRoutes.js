const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/save", userController.saveProfile);
router.get("/byuid/:uid", userController.getProfileByUserId);
router.get("/all", userController.getAllProfiles);

module.exports = router;
