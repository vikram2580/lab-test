import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import Router from "./router";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/account/addresses`, { method: "GET" })
      .then((response) => response.json())
      .then((res) => {
        const data = res?.addresses;
        setAddresses(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <React.StrictMode>
      <Router
        transactions={transactions}
        setTransactions={setTransactions}
        addresses={addresses}
      />
    </React.StrictMode>
  );
}

export default App;
