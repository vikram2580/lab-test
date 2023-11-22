const { faker } = require("@faker-js/faker");
const Balance = require("../modals/balance");

//Get all account addresses
const getAddresses = async (req, res) => {
  try {
    const addresses = [];
    for (let i = 0; i < 10; i++) {
      const mockAddress = faker?.finance?.ethereumAddress();
      addresses.push(mockAddress);
    }
    res.json({ addresses });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Get account balance
const getBalance = async(req, res) => {
  try {
    const balance = await Balance.find();
    res.json({ balance });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAddresses, getBalance };