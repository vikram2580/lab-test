import React, { useEffect } from "react";
// import { mockAddress } from "../../constants/contant";
import { Link } from "react-router-dom";
import "./addresses.css";

const Addresses = ({addresses}) => {
  
  
  return (
    <div className='Address-container'>
      <h1>Addresses</h1>
      <div className="Address-list">
      {addresses?.map((item, index) => (
          <ul className="Address-list-item">
            <li key={index} className="list-inline-item">
              
              <Link
                to={`/transfer/${item}`}
                className={`Address-link ${index === 0 ? "Disable-link" : ""}`}
              >
                {item}
              </Link>
            </li>
          </ul>
      ))}
      </div>
    </div>
  );
};

export default Addresses;
