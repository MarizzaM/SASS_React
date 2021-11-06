
import React from "react";

import '../Styles/Navbar.css';

function Navbar() {
    return (
      <div className="navbar">
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/lessons">Lessons</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;