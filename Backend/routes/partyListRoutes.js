const express = require("express");
const router = express.Router();
const PartyController = require("../controllers/partyListController");

router.get("/party-lists", PartyController.getAllParties);
router.get("/party-lists/threshold", PartyController.getElectoralThreshold);

module.exports = router;
