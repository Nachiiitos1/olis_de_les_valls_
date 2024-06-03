
import React, { useState, useEffect } from 'react';
import Header from './header';
import videoSource from './Assets/Images/VideoOlivos2.mp4';
import WhatsappButton from './components/whatsapp';
import image1 from './Assets/Images/aceite.png';
import image2 from './Assets/Images/aceite2.png';
import receta1 from './Assets/Images/receta1.jpg';
import imagenvideo from './Assets/Images/iconosVideo.png';
import BotonDeslizante from './components/botondeslizante';
import Footer from './components/footer';
import './styles.css';
import { CartButton, Cart } from './components/cart';
import { db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import logo from "./Assets/Images/logofondo.png"


function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [uuid, setUuid] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Esto hará que la página se desplace al inicio
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

  const handleButtonClick = (path) => {
    window.location.href = path;
  };
  const increaseQuantity = async (index) => {
    const newCart = [...cart];
    newCart[index].cantidad += 1;
    setCart(newCart);

    try {
      const docRef = doc(db, 'carts', uuid);
      await setDoc(docRef, { items: newCart }, { merge: true });
    } catch (error) {
      console.error("Error updating cart: ", error);
    }
  };

  const decreaseQuantity = async (index) => {
    const newCart = [...cart];
    if (newCart[index].cantidad > 1) {
      newCart[index].cantidad -= 1;
    } else {
      newCart.splice(index, 1);
    }
    setCart(newCart);

    try {
      const docRef = doc(db, 'carts', uuid);
      await setDoc(docRef, { items: newCart }, { merge: true });
    } catch (error) {
      console.error("Error updating cart: ", error);
    }
  };
  const removeItem = async (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);

    try {
      const docRef = doc(db, 'carts', uuid);
      await setDoc(docRef, { items: newCart }, { merge: true });
    } catch (error) {
      console.error("Error updating cart: ", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="videoBackground">
        <video autoPlay loop muted className="videoStyle">
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       
        <div className="textOverlay">
          <h1 className="textStyle1 fade-in">olis mas</h1>
          <h1 className="textStyle2 fade-in">de les valls</h1>
        </div>
        <div className="imageOverlay">
          <img src={imagenvideo} alt="Icono de video" className="videoIcon" />
        </div>
      </div>

      <div className="subtitleStyle1">Los más vendidos</div>

      <div className="productContainer">
        <div className="productItem">
          <Link to="/product1">
          <img src={image1} alt="Producto 1" className="productImage" />
          </Link>
          <div>
            <p className="productTextStyle1">Aceite</p>
            <p className="productTextStyle2">Aceite de oliva virgen extra</p>
            <p className="productPriceStyle">6€</p>
          </div>
          <button
            className="buttonStyle"
            onClick={() => handleButtonClick('/product1')}
          >
            SELECCIONAR OPCIONES
          </button>
        </div>
        <div className="productItem">
          <Link to="/product2">
          <img src={image2} alt="Producto 2" className="productImage" />
          </Link>
          <div>
            <p className="productTextStyle1">Aceite</p>
            <p className="productTextStyle2">Aceite de oliva virgen extra</p>
            <p className="productPriceStyle">30€</p>
          </div>
          <button
            className="buttonStyle"
            onClick={() => handleButtonClick('/product2')}
          >
            SELECCIONAR OPCIONES
          </button>
        </div>
      </div>

      <div className="buttonContainer">
        <a href="/tienda" className="verMasButton">Ver más</a>
      </div>

      <div className="newsContainer">
        <div className="subtitleStyle2">Noticias y Recetas</div>
        <div className="newsItemsContainer">
          <div className="newsItem">
            <Link to="/Noticies">
            <img src={receta1} alt="Noticia 1" className="newsImage" />
            </Link>
            <div>
              <p className="newsTextStyle1">Título de la noticia 1</p>
              <p className="newsTextStyle2">Descripción de la noticia 1</p>
              <button className="newsButtonStyle">LEER MÁS</button>
            </div>
          </div>
          <div className="newsItem">
            <Link to="/Noticies">
            <img src={receta1} alt="Noticia 2" className="newsImage" />
            </Link>
            <div>
              <p className="newsTextStyle1">Título de la noticia 2</p>
              <p className="newsTextStyle2">Descripción de la noticia 2</p>
              <button className="newsButtonStyle">LEER MÁS</button>
            </div>
          </div>
          <div className="newsItem">
            <Link to="/Noticies">
            <img src={receta1} alt="Noticia 3" className="newsImage" />
            </Link>
            <div>
              <p className="newsTextStyle1">Título de la noticia 3</p>
              <p className="newsTextStyle2">Descripción de la noticia 3</p>
              <button className="newsButtonStyle">LEER MÁS</button>
            </div>
          </div>
        </div>
      </div>

      {isCartOpen && (
        <Cart
          cart={cart}
          closeCart={closeCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
        />
      )}
      <CartButton openCart={openCart} />
      <BotonDeslizante />
      <WhatsappButton />
      <Footer />
    </div>
  );
}

export default Home;
