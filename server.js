const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const transactionRouter = require("./backend/routers/transactions");
const accountRouter = require('./backend/routers/account')

const port = 5000;

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/account", accountRouter);
app.use("/transaction", transactionRouter);

const MONGODB_URL =
  "mongodb+srv://vikramsingh70np:E8QjZvZRwdXaxhc6@cluster0.vciaqrw.mongodb.net/dwallet_db?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log("running port 5000");
    });
  })
  .catch((err) => {
    console.log(`${err} did not found`);
  });
