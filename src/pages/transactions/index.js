import React, { useState, useEffect } from "react";
import "./transactions.css";
import moment from "moment/moment";

const Transactions = ({}) => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/transaction/history`, { method: "GET" })
      .then((response) => response.json())
      .then((res) => {
        const data = res?.transactions;
        setTransactions(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='Transactions-container'>
      <h1>Transaction History</h1>
      {transactions?.length ? (
        transactions?.map((it, index) => {
          return (
            <div key={it?._id} className='Transactions-item-container'>
              <p className='Transactions-item-subtitle'>
                Transaction Hash:
                <span className='Transactions-item-subtitle-text'>{`\n${it.transactionHash}`}</span>
              </p>
              <p className='Transactions-item-subtitle'>
                Status:
                <span className='Transactions-item-subtitle-text'>{`\n${it.status}`}</span>
              </p>
              <p className='Transactions-item-subtitle'>
                Time Stamp:
                <span className='Transactions-item-subtitle-text'>{`\n${moment(
                  it.timestamp
                )}`}</span>
              </p>
              <p className='Transactions-item-subtitle'>
                From:
                <span className='Transactions-item-subtitle-text'>
                  {`\n${it.source}`}{" "}
                </span>
              </p>
              <p className='Transactions-item-subtitle'>
                To:
                <span className='Transactions-item-subtitle-text'>{`\n${it.destination}`}</span>
              </p>
              <p className='Transactions-item-subtitle'>
                Gas Used:
                <span className='Transactions-item-subtitle-text'>{`\n${it.gasUsed}`}</span>
              </p>
              <p className='Transactions-item-subtitle'>
                Amount:
                <span className='Transactions-item-subtitle-text'>{`\n${it.amount}`}</span>
              </p>
            </div>
          );
        })
      ) : (
        <h4>No Transaction History Found</h4>
      )}
    </div>
  );
};

export default Transactions;
