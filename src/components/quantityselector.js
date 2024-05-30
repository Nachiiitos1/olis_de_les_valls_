import React from 'react';
import '../styles.css';

const QuantitySelector = ({ quantity, setQuantity }) => {
  return (
    <div className="quantity-selector">
      <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
      <input type="text" value={quantity} readOnly />
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  );
};

export default QuantitySelector;

