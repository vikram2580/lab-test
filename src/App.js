import logo from "./logo.svg";
import "./App.css";
import TransferForm from "./components/TransferForm";
import Recipet from "./components/Reciept";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [reciept, setReciept] = useState(null);

  const handleInputChange = (value) => {
    setAmount(value);
  };
  return (
    <div className='App'>
      <TransferForm
        amount={amount}
        setAmount={setAmount}
        onChange={handleInputChange}
        setReciept={setReciept}
      />
      {reciept ? <Recipet reciept={reciept} /> : ""}
    </div>
  );
}

export default App;
