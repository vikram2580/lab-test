import React from "react";
import "./Reciept.css"

const Reciept = (props) => {
  return (
    <div className="Reciept-container">
      <h1 className="Reciept-title">Reciept</h1>
      <p className="Reciept-subtitle">Transaction Hash:<span className="Reciept-subtitle-text">{`\n${props?.reciept?.transactionHash}`}</span></p>
      <p className="Reciept-subtitle">Block Hash:<span className="Reciept-subtitle-text">{`\n${props?.reciept?.blockHash}`}</span></p>
      <p className="Reciept-subtitle">Block Number:<span className="Reciept-subtitle-text">{`\n${props?.reciept?.blockNumber}`}</span></p>
      <p className="Reciept-subtitle">From:<span className="Reciept-subtitle-text">{`\n${props?.reciept?.sender}`} </span></p>
      <p className="Reciept-subtitle">To:<span className="Reciept-subtitle-text">{`\n${props?.reciept?.reciever}`}</span></p>
      <p className="Reciept-subtitle">Gas Used:<span className="Reciept-subtitle-text">{`\n${props?.reciept?.gasUsed}`}</span></p>
    </div>
  );
};

export default Reciept;
