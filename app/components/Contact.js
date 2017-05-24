import React from 'react';

export default function About (props) {
  return (
    <div className="container">
      <div id="contact">
        <h2>Feel free to get in touch!</h2>
        heyjuliebusch@gmail.com
          <br />
          <br />
        <div className="row iconRow">
          <div className="icon">
            <a href="https://github.com/JulieBusch"><img src="/images/github.png" /></a>
          </div>
          <div className="icon">
            <a href="https://linkedin.com/in/julie-busch"><img src="/images/linkedin.png" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

