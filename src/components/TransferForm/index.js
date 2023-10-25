import React, { useState } from "react";
import { addresses, mockAddress } from "../../constants/contant";
import { useParams } from "react-router-dom";
import { faker } from "@faker-js/faker/locale/af_ZA";
import "./TransferForm.css";
import Reciept from "../Reciept";

const TransferForm = ({ setTransactions }) => {
  const [amount, setAmount] = useState("");
  const [reciept, setReciept] = useState(null);
  const { address } = useParams();

  const handleInputChange = (value) => {
    setAmount(value);
  };
  const handleSendAmount = (event) => {
    event.preventDefault();
    const transactionHash = `0x${faker.string.alphanumeric(64)}`;
    const blockHash = `0x${faker.string.alphanumeric(64)}`;
    const blockNumber = Math.floor(Math.random() * 100);
    const gasUsed = Math.floor(Math.random() * 10000);

    const reciept = {
      transactionHash,
      blockHash,
      blockNumber,
      from: mockAddress[0],
      to: address,
      amount: amount,
      gasUsed,
    };
    const transactionHistory = {
      transactionHash,
      status: "SUCCESS",
      timeStamp: Date.now(),
      from: mockAddress[0],
      to: address,
      amount: amount + "\nETH",
      gasUsed,
    };
    setReciept(reciept);
    setTransactions((prv) => {
      return [...prv, transactionHistory];
    });
    setAmount("");
  };

  return (
    <div className='Form-container'>
      <h1>Transfer</h1>
      <div className='Form-sub-container'>
        <p className='Form-subtitle'>
          From:
          <span className='From-subtitle-text'>{`\n${mockAddress[0]}`}</span>
        </p>
        <p className='Form-subtitle'>
          To:
          <span className='From-subtitle-text'>{`\n${address}`}</span>
        </p>
        <form onSubmit={handleSendAmount}>
          <div className='Form-input-container'>
            <div>
              <label className='Form-input-label'>{`Amount:\n`}</label>
              <input
                type='number'
                value={amount}
                onChange={(e) => handleInputChange(e?.target?.value)}
                required
                className='Form-input'
              />
            </div>
            <button type='submit' className='Form-button' disabled={reciept}>
              Send
            </button>
          </div>
        </form>
      </div>
      {reciept ? <Reciept reciept={reciept} setReciept={setReciept} /> : ""}
    </div>
  );
};

export default TransferForm;
