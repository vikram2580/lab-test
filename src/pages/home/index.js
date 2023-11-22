import React, { useEffect } from "react";
import "./home.css";
import LargeLogo from "../../components/assets/Icon/logo2.png";

const Home = () => {
  return (
    <div className='Home-container'>
      <div className='Home-item-container'>
        <h1 style={{ fontSize: "4em" }}>Welcome to</h1>
        <img src={LargeLogo} className='Home-item-logo' />
      </div>
    </div>
  );
};

export default Home;
