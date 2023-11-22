import React, { useState, useEffect } from "react";
import "./wallet.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchBalance } from "../../redux/reducers/balanceSlice";

const Wallet = () => {
 
  const dispatch = useDispatch();
  const { balance } = useSelector((state) => state.balance);

  useEffect(() => {
    dispatch(fetchBalance());
  }, [dispatch]);


  return (
    <div className='Wallet-container'>
      <h1>Wallet</h1>
      <div className='Wallet-item-container'>
        <p className='Wallet-item-title'>
          Address:
          <span className='Wallet-item-subtitle'>{`\n${balance[0]?.address}`}</span>
        </p>
        <p className='Wallet-item-title'>
          Balance:
          <span className='Wallet-item-subtitle'>{`\n${balance[0]?.balance}`}</span>
        </p>
      </div>
    </div>
  );
};

export default Wallet;
