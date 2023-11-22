const mongoose = require("mongoose");

const balanceSchema = new mongoose.Schema({
  account: { type: String },
  balance: { type: Number },
});

const Balance = mongoose.model("Balance", balanceSchema);

module.exports = Balance;
