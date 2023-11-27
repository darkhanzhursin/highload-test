const express = require("express");
const router = express.Router();
const controller = require("../controllers/balanceController");

router.put("/:id", controller.updateBalance);

module.exports = router;
