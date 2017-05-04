import React from 'react';
import {Link} from 'react-router';

export default function (props) {
  return (
    <div className="container">
      <div className="home">
        <p>
          This part of the site is still in progress! For more info, head on over to my <Link to="/resume">resume!</Link>
        </p>
      </div>
    </div>
  );
}
