import React from "react";
import './wallet.css'
import { mockAddress } from "../../constants/contant";

const Wallet = ({addresses}) => {
  return (
    <div className="Wallet-container">
    <h1>Wallet</h1>
    <div className="Wallet-item-container">
    <p className="Wallet-item-title">Address:<span className="Wallet-item-subtitle">{`\n${addresses[0]}`}</span></p>
    <p className="Wallet-item-title">Balance:<span className="Wallet-item-subtitle">{`\n${"9999.555554 ETH"}`}</span></p>
    </div>
    </div>
  );
};

export default Wallet;
