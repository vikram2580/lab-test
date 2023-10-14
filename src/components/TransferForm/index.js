import React from "react";
import { addresses } from "../../constants/contant";
import { faker } from "@faker-js/faker/locale/af_ZA";
import "./TransferForm.css";

const TransferForm = ({ amount, onChange, setReciept }) => {
  const handleSendAmount = (event) => {
    event.preventDefault();
    const transactionHash = `0x${faker.string.alphanumeric(64)}`;
    const blockHash = `0x${faker.string.alphanumeric(64)}`;
    const blockNumber = Math.floor(Math.random() * 100);
    const gasUsed = Math.floor(Math.random() * 10000);

    const reciept = {
      sender: addresses.SENDER_ADDRESS,
      reciever: addresses.RECIVER_ADDRESS,
      amount: amount,
      transactionHash,
      blockHash,
      blockNumber,
      gasUsed,
    };
    setReciept(reciept);
  };

  return (
    <div className='Form-container'>
      <h1 className='Form-title'>Transfer</h1>
      <p className='Form-subtitle'>
        From:
        <span className='From-subtitle-text'>{`\n${addresses.SENDER_ADDRESS}`}</span>
      </p>
      <p className='Form-subtitle'>
        To:
        <span className='From-subtitle-text'>{`\n${addresses.RECIVER_ADDRESS}`}</span>
      </p>
      <form onSubmit={handleSendAmount}>
        <div className="Form-input-container">
            <div>
            <label className="Form-input-label" >{`Amount:\n`}</label>
          <input
            type='number'
            value={amount}
            onChange={(e) => onChange(e?.target?.value)}
            required
            className="Form-input"
          />
          </div>
          <button type='submit' className="Form-button">Send</button>
        </div>
      </form>
    </div>
  );
};

export default TransferForm;
