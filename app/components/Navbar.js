import React from 'react';
import {Link} from 'react-router';

export default function Navbar(props) {
  return(
    <nav>
      <div id="nav-menu-left">
        <h4>experience</h4>
        <Link to="/projects"><h4>projects</h4></Link>
        <h4>skills</h4>
      </div>
        <span>Julie Busch</span>
        <br />
        <span>Software Engineer</span>
      <div id="nav-menu-right">
        <Link to="/resume"><h4>resume</h4></Link>
        <Link to="/about"><h4>about</h4></Link>
        <h4>contact</h4>
      </div>
    </nav>
  );
}
