import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import cartIcon from '../Assets/Images/carticon.png';

function Cart({ cart, closeCart, increaseQuantity, decreaseQuantity, removeItem }) {
  const totalPrice = cart.reduce((total, item) => total + item.precio * item.cantidad, 0);
  const navigate = useNavigate();

  return (
    <div className="cart-panel">
      <div className="cart-header">
        <h2>Tu Cesta</h2>
        <button className="close-cart-button" onClick={closeCart}>Cerrar</button>
      </div>
      {cart.length === 0 ? (
        <p>La cesta está vacía.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.imagenURL} alt={item.nombreproducto} className="cart-item-image" />
              <div className="cart-item-details">
                <span>{item.nombreproducto}</span>
                <span>{item.precio * item.cantidad}€</span>
                <div className="quantity-selector-container">
                  <div className="quantity-selector-cart">
                    <button onClick={() => decreaseQuantity(index)}>-</button>
                    <input type="text" value={item.cantidad} readOnly />
                    <button onClick={() => increaseQuantity(index)}>+</button>
                  </div>
                </div>
                <button onClick={() => removeItem(index)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: {totalPrice}€</h3>
      <button 
        className="finalize-purchase-button" 
        onClick={() => navigate('/finalizarcompra')}
      >
        Finalizar compra
      </button>
    </div>
  );
}

function CartButton({ openCart }) {
  return (
    <div className="cart-button" onClick={openCart}>
      <img src={cartIcon} alt="Carrito" className="cart-icon" />
    </div>
  );
}

export { Cart, CartButton };
