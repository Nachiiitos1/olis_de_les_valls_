import React from 'react';

function Header() {
  return (
    <header style={headerStyle}></header>
  );
}

const headerStyle = {
  backgroundColor: 'purple',
  width: '80%',
  margin: '0 auto', // Centrar horizontalmente
  height: '100px' // Ajusta la altura según sea necesario
};

export default Header;