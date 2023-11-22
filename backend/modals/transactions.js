const mongoose = require("mongoose");

// Define a Transaction schema
const transactionSchema = new mongoose.Schema({
  source: { type: String, required: true },
  destination: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true },
  gasUsed: { type: Number },
  transactionHash: { type: String },
  timestamp: { type:Number },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
