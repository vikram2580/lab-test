const express = require("express");

const {
  getTransactions,
  sendTransaction,
} = require("../controllers/transaction");
const router = express.Router();

router.get("/history", getTransactions);
router.post("/send", sendTransaction);

module.exports = router;
