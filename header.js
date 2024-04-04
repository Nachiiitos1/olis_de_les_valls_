import React, { useEffect } from 'react';
import './Header.css';

function Header() {
  useEffect(() => {
    const header = document.getElementById('main-header');
    const height = header.clientHeight;
    header.style.height = height + 'px';
  }, []);

  return (
    <header id="main-header" style={{ backgroundColor: '#800000', color: '#fff', padding: '10px 0' }}>
      <div className="container" style={{ width: '80%', margin: '0 auto' }}>
        <h1 style={{ margin: 0 }}>Mi sitio web</h1>
      </div>
    </header>
  );
}

export default Header;
