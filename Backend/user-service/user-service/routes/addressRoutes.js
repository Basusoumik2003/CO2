const express = require("express");
const router = express.Router();
const addressController = require("../controllers/addressController");

router.post("/create", addressController.createAddress);
router.put("/update/:address_id", addressController.updateAddress);
router.get("/all/:pro_id", addressController.getAddressesByProfile);
router.get("/:address_id", addressController.getAddressById);

module.exports = router;
