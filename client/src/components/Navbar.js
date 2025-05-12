import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#tours">Our Tours</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
