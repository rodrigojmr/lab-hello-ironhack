import React from 'react';
import '../index.css';

function Nav() {
  return (
    <div className="navbar">
      <img
        src="/images/ironhack-logo.svg"
        alt="Ironhack Logo"
        className="logo"
      />
      <img src="/images/menu-top.svg" className="menu" />
    </div>
  );
}

export default Nav;
