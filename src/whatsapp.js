import React from 'react';
import whatsappLogo from './Assets/Images/whatsapplogo.png'

function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.location.href = 'https://api.whatsapp.com/send?phone=648530815'; // Reemplaza NUMERO_DE_TELEFONO con el número de teléfono de WhatsApp
  };

  return (
    <a
      href="#"
      onClick={handleWhatsAppClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '50px', // Ajusta el tamaño de la imagen según sea necesario
        height: '50px', // Ajusta el tamaño de la imagen según sea necesario
        backgroundImage: `url(${whatsappLogo})`, // Usa la imagen importada
        backgroundSize: 'cover',
        borderRadius: '50%', // Para hacer la imagen circular, si es necesario
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)', // Sombra sutil
        zIndex: '999',
        cursor: 'pointer', // Cambia el cursor al pasar sobre el botón
      }}
    />
  );
}

export default WhatsAppButton;
