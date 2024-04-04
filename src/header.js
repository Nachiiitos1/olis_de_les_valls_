import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Header1() {
  return (
    <header id="main-header" style={{ backgroundColor: '#800000', color: '#fff', padding: '5px 0', height: '40px', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '80%', margin: '0 auto' }}>
        <h1 style={{ margin: 0 }}>Mi sitio web</h1>
      </div>
    </header>
  );
}

function Header2() {
  return (
    <header id="second-header" style={{ backgroundColor: '#333', color: '#fff', padding: '10px 0', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '80%', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
    </header>
  );
}

export { Header1, Header2 };

