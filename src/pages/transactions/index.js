import React from "react";
import "./transactions.css";
import moment from "moment/moment";

const Transactions = ({ transactions }) => {
    
  return (
    <div className='Transactions-container'>
      <h1>Transaction History</h1>
      {transactions?.length ? (
        transactions?.map((it) => {
          return (
            <div className='Transactions-item-container'>
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
                  it.timeStamp
                )}`}</span>
              </p>
              <p className='Transactions-item-subtitle'>
                From:
                <span className='Transactions-item-subtitle-text'>
                  {`\n${it.from}`}{" "}
                </span>
              </p>
              <p className='Transactions-item-subtitle'>
                To:
                <span className='Transactions-item-subtitle-text'>{`\n${it.to}`}</span>
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
