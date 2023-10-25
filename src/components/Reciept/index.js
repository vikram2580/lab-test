import React from "react";
import "./Reciept.css";
import DeleteIcon from "../assets/Icon/deleteIcon.png";

const Reciept = ({ reciept, setReciept }) => {
  const array = Object.entries(reciept).map(([key, value]) => {
    const label = key[0].toUpperCase() + key.substring(1);
    return { label, value };
  });
  return (
    <div>
      <div className='Reciept-container'>
        <h1 className='Reciept-title'>Reciept</h1>
        {array?.map((item, index) => (
          <p className='Reciept-subtitle'>
            {item?.label}:
            <span
              className='Reciept-subtitle-text'
              key={index}
            >{`\n${item?.value}`}</span>
          </p>
        ))}
        <div onClick={() => setReciept()}>
          {" "}
          <img src={DeleteIcon} className='Delete-icon' />
        </div>
      </div>
    </div>
  );
};

export default Reciept;
