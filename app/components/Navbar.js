import React from 'react';
import {Link} from 'react-router';

export default function Navbar(props) {
  return(
    <nav>
      <div id="nav-menu-left">
        <Link to="/experience"><h4>experience</h4></Link>
        <Link to="/projects"><h4>projects</h4></Link>
        <Link to="/skills"><h4>skills</h4></Link>
      </div>
        <img src="/images/nav-logo.png" />
      <div id="nav-menu-right">
        <Link to="/resume"><h4>resume</h4></Link>
        <Link to="/about"><h4>about</h4></Link>
        <Link to="/contact"><h4>contact</h4></Link>
      </div>
    </nav>
  );
}

