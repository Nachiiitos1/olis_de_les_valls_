import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import md5 from 'md5';
import { v4 as uuidv4 } from 'uuid';
import './styles.css';
import Header from './header';
import Footer from './components/footer';

function FinalizarCompra() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    direccion: '',
    tarjeta: '',
    caducidad: '',
    cvc: ''
  });

  const [cart, setCart] = useState([]);
  const [uuid, setUuid] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedUuid = localStorage.getItem('uuid');
    if (!storedUuid) {
      const newUuid = uuidv4();
      localStorage.setItem('uuid', newUuid);
      setUuid(newUuid);
    } else {
      setUuid(storedUuid);
    }
  }, []);

  useEffect(() => {
    if (uuid) {
      const fetchCart = async () => {
        try {
          const docRef = doc(db, 'carts', uuid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const items = docSnap.data().items;
            setCart(items);
            calculateTotalPrice(items);
          }
        } catch (error) {
          console.error("Error fetching cart: ", error);
        }
      };

      fetchCart();
    }
  }, [uuid]);

  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    setTotalPrice(total);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const encryptedCard = md5(formData.tarjeta);

    const pedido = {
      ...formData,
      tarjeta: encryptedCard,
      cart: cart
    };

    try {
      await addDoc(collection(db, 'pedidos'), pedido);
      alert('Pedido realizado con éxito');
    } catch (error) {
      console.error('Error al guardar el pedido: ', error);
    }
  };

  const updateCartInFirestore = async (updatedCart) => {
    if (uuid) {
      try {
        const cartRef = doc(db, 'carts', uuid);
        await setDoc(cartRef, { items: updatedCart });
      } catch (error) {
        console.error('Error updating cart in Firestore: ', error);
      }
    }
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].cantidad += 1;
    setCart(updatedCart);
    calculateTotalPrice(updatedCart);
    updateCartInFirestore(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].cantidad -= 1;
    if (updatedCart[index].cantidad <= 0) {
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
    calculateTotalPrice(updatedCart);
    updateCartInFirestore(updatedCart);
  };

  return (
    <div className="checkout-container">
      <Header />
      <div className="basket-section">
        <h2>Tu Cesta</h2>
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
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="order-summary">
        <h2>Tu pedido</h2>
        <table>
          <tbody>
            <tr>
              <td>Producto</td>
              <td>Subtotal</td>
            </tr>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{item.nombreproducto}</td>
                <td>{item.precio * item.cantidad}€</td>
              </tr>
            ))}
            <tr>
              <td>Subtotal</td>
              <td>{totalPrice}€</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{totalPrice}€</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="checkout-form">
        <h2>Finalizar compra</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
          <input type="text" name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="direccion" placeholder="Dirección" value={formData.direccion} onChange={handleChange} required />
          <input type="text" name="tarjeta" placeholder="Tarjeta de crédito/débito" value={formData.tarjeta} onChange={handleChange} required />
          <input type="text" name="caducidad" placeholder="Caducidad (DD/MM)" value={formData.caducidad} onChange={handleChange} required />
          <input type="text" name="cvc" placeholder="CVC" value={formData.cvc} onChange={handleChange} required />
          <button type="submit">Realizar pedido</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default FinalizarCompra;
