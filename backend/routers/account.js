const express = require("express");
const { getBalance, getAddresses } = require("../controllers/account");

const router = express.Router();

router.get("/balance", getBalance);
router.get("/addresses", getAddresses);

module.exports = router;
