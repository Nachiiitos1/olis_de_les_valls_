import React from 'react';
import './Header.css';

function Header() {
  return (
    <header id="main-header" style={{ backgroundColor: '#800000', color: '#fff', padding: '5px 0', height: '38px' }}>
      <div className="container" style={{ width: '80%', margin: '0 auto' }}>
        <h1 style={{ margin: 0 }}>Mi sitio web</h1>
      </div>
    </header>
  );
}

export default Header;
