const express = require("express");
const router = express.Router();
const { ethContract, polyContract } = require("../services/blockchainService");

// Tree master
router.post("/add-tree", async (req, res) => {
  try {
    const { tid, uid, treeName, botanicalName, plantingDate, location, imageHashId, createdDate } = req.body;
    const tx = await ethContract.addTreeAsset(tid, uid, treeName, botanicalName, plantingDate, location, imageHashId, createdDate);
    await tx.wait();
    res.send({ success: true, txHash: tx.hash });
  } catch (e) {
    res.status(500).send({ success: false, error: e.message });
  }
});

// EV master (simplified fields)
router.post("/add-ev", async (req, res) => {
  try {
    const { eid, uid, category, manufacturer, model, purchaseYear, energyConsumed, primaryChargingType, range, gridEmissionFactor, createdDate } = req.body;
    const tx = await ethContract.addEVAsset(eid, uid, category, manufacturer, model, purchaseYear, energyConsumed, primaryChargingType, range, gridEmissionFactor, createdDate);
    await tx.wait();
    res.send({ success: true, txHash: tx.hash });
  } catch (e) {
    res.status(500).send({ success: false, error: e.message });
  }
});

// Solar master
router.post("/add-solar", async (req, res) => {
  try {
    const { suid, uid, installedCapacity, installationDate, energyGenerationValue, inverterType, gridEmissionFactor, createdDate } = req.body;
    const tx = await ethContract.addSolarAsset(suid, uid, installedCapacity, installationDate, energyGenerationValue, inverterType, gridEmissionFactor, createdDate);
    await tx.wait();
    res.send({ success: true, txHash: tx.hash });
  } catch (e) {
    res.status(500).send({ success: false, error: e.message });
  }
});

// Tree update
router.post("/add-tree-update", async (req, res) => {
  try {
    const { tid, height, imageHashId, dbh, createdDate } = req.body;
    const tx = await polyContract.addTreeUpdate(tid, height, imageHashId, dbh, createdDate);
    await tx.wait();
    res.send({ success: true, txHash: tx.hash });
  } catch (e) {
    res.status(500).send({ success: false, error: e.message });
  }
});

// EV update
router.post("/add-ev-update", async (req, res) => {
  try {
    const { eid, distance } = req.body;
    const tx = await polyContract.addEVUpdate(eid, distance);
    await tx.wait();
    res.send({ success: true, txHash: tx.hash });
  } catch (e) {
    res.status(500).send({ success: false, error: e.message });
  }
});

// Solar update
router.post("/add-solar-update", async (req, res) => {
  try {
    const { suid, avgMonthlyOutput, panelEfficiency, createdDate } = req.body;
    const tx = await polyContract.addSolarUpdate(suid, avgMonthlyOutput, panelEfficiency, createdDate);
    await tx.wait();
    res.send({ success: true, txHash: tx.hash });
  } catch (e) {
    res.status(500).send({ success: false, error: e.message });
  }
});

module.exports = router;
