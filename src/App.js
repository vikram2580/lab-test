import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Router from "./router";

function App() {
  const [transactions, setTransactions] = useState([]);

  return (
    <div >
      <Router transactions={transactions} setTransactions={setTransactions} />
    </div>
  );
}

export default App;
