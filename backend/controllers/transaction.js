const Transaction = require("../modals/transactions");
const Balance = require("../modals/balance");

const sendTransaction = async (req, res) => {
  const {
    source,
    destination,
    amount,
    status,
    transactionHash,
    gasUsed,
    timestamp,
  } = req.body;
  const balance = await Balance.findOne({ account: source });
  const dueBalance = balance.balance;
  try {
    const transaction = new Transaction({
      source,
      destination,
      amount,
      status,
      transactionHash,
      gasUsed,
      timestamp,
    });
    if (dueBalance < amount) {
      res.status(500).json({ error: "Insuffiscent balance" });
    } else {
      await transaction.save();
      balance.balance -= amount;
      await balance.save();
      res.json({ message: "Transaction sent successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json({ transactions });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getTransactions, sendTransaction };
