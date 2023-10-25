import React ,{ useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "../assets/Icon/hamburger.png";
import Brand from "../assets/Icon/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className='container'>
        <div className='logo'>
          <img src={Brand} />
        </div>
        <div className='menu-icon' onClick={handleShowNavbar}>
        <img src={Hamburger} />

        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/wallet'>Wallet</NavLink>
            </li>
            <li>
              <NavLink to='/addresses'>Addresses</NavLink>
            </li>
            <li>
              <NavLink to='/transactions'>Transactions</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
