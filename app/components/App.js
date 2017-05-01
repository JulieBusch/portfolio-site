import React from 'react';

import Navbar from './Navbar'

export default function AppStart ({ children }) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        { children }
      </div>
    </div>
  );
}
