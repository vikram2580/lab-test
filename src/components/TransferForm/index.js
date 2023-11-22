import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { faker } from "@faker-js/faker/locale/af_ZA";
import "./TransferForm.css";
import Reciept from "../Reciept";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const TransferForm = ({ addresses }) => {
  const { balance } = useSelector((state) => state.balance);

  const [amount, setAmount] = useState();
  const [reciept, setReciept] = useState(null);
  const { address } = useParams();

  const handleInputChange = (value) => {
    setAmount(value);
  };
  const handleSendAmount = async (event) => {
    event.preventDefault();
    const transactionHash = `0x${faker.string.alphanumeric(64)}`;
    const blockHash = `0x${faker.string.alphanumeric(64)}`;
    const blockNumber = Math.floor(Math.random() * 100);
    const gasUsed = Math.floor(Math.random() * 10000);

    const reciept = {
      transactionHash,
      blockHash,
      blockNumber,
      from: balance[0].account,
      to: address,
      amount: amount,
      gasUsed,
    };
    const transactionHistory = {
      transactionHash,
      status: "SUCCESS",
      timestamp: Date.now(),
      source: balance[0].account,
      destination: address,
      amount: parseInt(amount, 10),
      gasUsed,
    };

    try {
      const response = await fetch("http://localhost:5000/transaction/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transactionHistory),
      });
      if (response.ok) {
        const responseData = await response.json();
        setReciept(reciept);
        setAmount("");
        toast.success(responseData?.message);
      } else {
        console.error("Error:", response.statusText);
        toast.error(response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className='Form-container'>
      <h1>Transfer</h1>
      <div className='Form-sub-container'>
        <p className='Form-subtitle'>
          From:
          <span className='From-subtitle-text'>{`\n${balance[0]?.account}`}</span>
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
                disabled={reciept}
              />
            </div>
            <button type='submit' className='Form-button' disabled={reciept}>
              Send
            </button>
            <p>
              {reciept
                ? "***Please delete recipet if you want to send again"
                : ""}
            </p>
          </div>
        </form>
      </div>
      {reciept ? <Reciept reciept={reciept} setReciept={setReciept} /> : ""}
    </div>
  );
};

export default TransferForm;
