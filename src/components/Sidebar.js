import React, { useState } from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';
// import { StaticImage } from "gatsby-plugin-image"
import logo from '../assets/images/skipsna_logo.png';
export default function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <header id="header" className={`${fullMenu ? '' : 'alt'}`}>
      <h1>
     
        <Link to="/">SKIPSNA
      {/* <div className="image">
          <img src={logo} alt="logo" />
        </div> */}
        </Link>
      </h1>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div>
    </header>
  );
}
