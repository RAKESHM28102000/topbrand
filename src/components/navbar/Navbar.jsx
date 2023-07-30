import React, { useState } from 'react';
import { FaSearch} from 'react-icons/fa';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='navbar'>
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <div> <h1>NBM</h1></div>
        <ul className="app__navbar-links">
        <li className="app__flex p-text">
            <a href="#home">Home</a>
          </li>
          <li className="app__flex p-text">
            <a href="#service">About us</a>
          </li>
          <li className="app__flex p-text">
            <a href='#contact'>Contact us</a>
          </li>
       
       
      </ul>
      </div>
     
      <div className='icon'>
        <FaSearch/>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;