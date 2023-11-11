const express = require("express");
const cors = require("cors");
const { getAddress } = require("./accounts");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.get("/account/addresses", (req, res) => {
  const addresses = getAddress();
  res.json({ addresses });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});
