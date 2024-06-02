import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import image1 from './Assets/Images/aceite.png';
import image2 from './Assets/Images/aceite2.png';
import image3 from './Assets/Images/aceite3.png';
import image4 from './Assets/Images/aceite4.jpg';
import image5 from './Assets/Images/aceite5.png';
import image6 from './Assets/Images/aceite6.png';
import Header from './header';
import Footer from './components/footer';
import WhatsappButton from './components/whatsapp';
import BotonDeslizante from './components/botondeslizante';
import { CartButton, Cart } from './components/cart';
import { db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

function Tienda() {
  const [uuid, setUuid] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            setCart(docSnap.data().items);
          }
        } catch (error) {
          console.error("Error fetching cart: ", error);
        }
      };

      fetchCart();
    }
  }, [uuid]);

  useEffect(() => {
    if (uuid && cart.length > 0) {
      const saveCart = async () => {
        try {
          const docRef = doc(db, 'carts', uuid);
          await setDoc(docRef, { items: cart });
        } catch (error) {
          console.error("Error saving cart: ", error);
        }
      };

      saveCart();
    }
  }, [cart, uuid]);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const [filtro, setFiltro] = useState('todos');

  const handleButtonClick = (path) => {
    console.log(`Navigating to ${path}`);
  };

  const renderProductos = () => {
    let productos = [];
    if (filtro === 'todos' || filtro === 'comestible') {
      productos.push(
        { image: image1, path: '/product1', name: 'Aceite', description: 'Aceite de oliva virgen extra', price: '10€' },
        { image: image2, path: '/product2', name: 'Aceite', description: 'Aceite de oliva virgen extra', price: '20€' },
        { image: image3, path: '/product3', name: 'Aceite', description: 'Aceite de oliva virgen extra', price: '30€' },

      );
    }
    if (filtro === 'todos' || filtro === 'no comestible') {
      productos.push(
        { image: image4, path: '/product4', name: 'Aceite', description: 'Aceite de oliva virgen extra', price: '40€' },
        { image: image5, path: '/product5', name: 'Aceite', description: 'Aceite de oliva virgen extra', price: '50€' },
        { image: image6, path: '/product6', name: 'Aceite', description: 'Aceite de oliva virgen extra', price: '60€' },

      );
    }
    if (filtro === 'todos' || filtro === 'comestible') {
      productos.push(
        { image: image1, path: '/product1', name: 'Aceite', description: 'Aceite de oliva virgen extra', price: '10€' },
        { image: image2, path: '/product2', name: 'Aceite', description: 'Aceite de oliva virgen extra', price: '20€' },
        { image: image3, path: '/product3', name: 'Aceite', description: 'Aceite de oliva virgen extra', price: '30€' },
      );
    }
    if (filtro === 'todos' || filtro === 'no comestible') {
      productos.push(
        { image: image4, path: '/product4', name: 'Aceite', description: 'Aceite de oliva virgen extra', price: '40€' },
        { image: image5, path: '/product5', name: 'Aceite', description: 'Aceite de oliva virgen extra', price: '50€' },
        { image: image6, path: '/product6', name: 'Aceite', description: 'Aceite de oliva virgen extra', price: '60€' },

      );
    }

    return productos.map((producto, index) => (
      <div className="productItem-store" key={index}>
        <Link to={producto.path}>
          <img src={producto.image} alt={`Producto ${index + 1}`} className="productImage-store" />
        </Link>
        <div>
          <p className="productTextStyle1-store">{producto.name}</p>
          <p className="productTextStyle2-store">{producto.description}</p>
          <p className="productTextStyle3-store">{producto.price}</p>
        </div>
        <button className="buttonStyle-store" onClick={() => handleButtonClick(producto.path)}>
          SELECCIONAR OPCIONES
        </button>
      </div>
    ));
  };

  return (
    <div className='tienda'>
    <div className="store-container-store">
      <Header />
      <div className="sidebar-store">
        <h2>ACEITE</h2>
        <ul>
          <li onClick={() => setFiltro('todos')}>Todos</li>
          <li onClick={() => setFiltro('comestible')}>Comestible</li>
          <li onClick={() => setFiltro('no comestible')}>No comestible</li>
        </ul>
      </div>
      <div className="products-container-store">
        {renderProductos()}
      </div>
    </div>
    {isCartOpen && (
        <Cart
          cart={cart}
          closeCart={closeCart}
          increaseQuantity={() => {}}
          decreaseQuantity={() => {}}
          removeItem={() => {}}
        />
      )}
      <CartButton openCart={openCart} />
      <BotonDeslizante />
      <WhatsappButton />
      <Footer />
    </div>
  );
}

export default Tienda;
