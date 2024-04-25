import React from 'react';
import whatsappLogo from '../Assets/Images/whatsapplogo.png';

function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.location.href = 'https://api.whatsapp.com/send?phone=648530815';
  };

  return (
    <a
      href="#"
      onClick={handleWhatsAppClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        backgroundImage: `url(${whatsappLogo})`,
        backgroundSize: 'cover',
        borderRadius: '50%',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        zIndex: '999',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease', // Añadimos una transición suave
      }}
      className="whatsappButton" // Añadimos una clase para la selección de estilos
    />
  );
}

export default WhatsAppButton;
