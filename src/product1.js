import React, { useState, useEffect } from 'react';
import Header from './headertienda';
import WhatsappButton from './components/whatsapp';
import BotonDeslizante from './components/botondeslizante';
import Footer from './components/footer';
import { db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Cart, CartButton } from './components/cart';
import QuantitySelector from './components/quantityselector';
import './styles.css';
import { v4 as uuidv4 } from 'uuid'; // Import UUID generation library
import { Link } from 'react-router-dom';
import image2 from "./Assets/Images/aceite2.png"
import image3 from "./Assets/Images/aceite3.png"
import image5 from "./Assets/Images/aceite5.png"
import image4 from "./Assets/Images/aceite4.jpg"

function Product1() {
  const [selectedButton, setSelectedButton] = useState(1);
  const [productData, setProductData] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [uuid, setUuid] = useState(null);

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
    const fetchProductData = async () => {
      try {
        const docRef = doc(db, 'productos', 'DJz9rxWu1prqmYsozY0R');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProductData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      }
    };

    fetchProductData();
  }, []);

  const handleButtonClick = (path) => {
    window.location.href = path;
  };

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

  const addToCart = async () => {
    if (productData) {
      const existingItemIndex = cart.findIndex(
        (item) => item.nombreproducto === productData.nombreproducto && item.precio === (selectedButton === 1 ? productData.precio1 : productData.precio2)
      );

      let newCart;
      if (existingItemIndex >= 0) {
        newCart = [...cart];
        newCart[existingItemIndex].cantidad += quantity;
      } else {
        const item = {
          nombreproducto: productData.nombreproducto,
          precio: selectedButton === 1 ? productData.precio1 : productData.precio2,
          cantidad: quantity,
          imagenURL: productData.imagenURL
        };
        newCart = [...cart, item];
      }
      setCart(newCart);

      try {
        const docRef = doc(db, 'carts', uuid);
        await setDoc(docRef, { items: newCart }, { merge: true });
      } catch (error) {
        console.error("Error updating cart: ", error);
      }
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Esto hará que la página se desplace al inicio
  }, []);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
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
      <Header toggleCart={openCart} />

      <div className="content-container-product">
        {productData ? (
          <>
            <div className="image-text-container-product">
              <img src={productData.imagenURL} alt="Producto 1" className="large-image-product" />
            </div>

            <div className="center-text-container-product">
              <h1 className="title-text-product">{productData.nombreproducto}</h1>
              <p className="explanatory-text-product">{productData.descripcion}</p>
              <p className="explanatory-text-product2">El precio no incluye el envio a domicilio</p>
              <div className="button-container-product">
                <button
                  className={`styled-button-product ${selectedButton === 1 ? 'selected-product' : ''}`}
                  onClick={() => setSelectedButton(1)}
                >
                  1ud
                </button>
                <button
                  className={`styled-button-product ${selectedButton === 2 ? 'selected-product' : ''}`}
                  onClick={() => setSelectedButton(2)}
                >
                  3uds
                </button>
              </div>

              <p className="dynamic-text-product">
                {selectedButton === 1
                  ? `${productData.precio1},00€`
                  : selectedButton === 2
                  ? `${productData.precio2},00€`
                  : "Seleccione un botón para ver el texto."}
              </p>

              <div className="quantity-addtocart-container">
                <div className="quantity-selector">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <input type="text" value={quantity} readOnly />
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <button className='addtocartButton' onClick={addToCart}>Añadir a la cesta</button>
              </div>
            </div>
          </>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
      <div className="custom-container">
        <p className="custom-text">
          Perfil de frutado maduro medio leve. En boca es dulce, con punta de picante suave, un amargo suave y astringencia leve en boca. Aromas secundarios de tipo vegetal, con connotaciones claras de hinojo o tomate, así como toques de almendra, o plátano maduro, que le definen la dulzura agradable en boca. El conjunto resulta un aceite maduro y dulce, suave en boca y nariz.
          <br />
          <br />
          MARIDAJE: Es un aceite ideal tanto para utilizar en la cocina, como para consumir en crudo en un buen pan con tomate, por su sabor dulce y suave. Indicado para aquel consumidor que busca un aceite fino y dulce.
          <br />
          <br />
          VALOR NUTRICIONAL POR 100 g. *POR PORCIÓN DE 14 g.
          <br />
          VALOR ENERGETICO: 900 Kcal / 3.700 Kj 126 Kcal – 518 Kj
          <br />
          PROTEINAS: 0 g. 0 g.
          <br />
          HIDRATOS DE CARBONO: 0 g. 0 g.
          <br />
          GRASAS: 100 g. de las cuales: 14 g. de las cuales:
          <br />
          Saturadas: 13 g. 2 g.
          <br />
          Monoinsaturadas: 79 g. 11 g.
          <br />
          Poliinsaturadas: 8 g. 1 g.
          <br />
          Vitamina E: 20 mg. (200% CDR) 3 mg. (30% CDR)
        </p>
      </div>
      <div className="subtitleStyle1">Los más vendidos</div>

      <div className="productContainer">
        <div className="productItem">
          <Link to="/product2">
            <img src={image2} alt="Producto 2" className="productImage" />
          </Link>
          <div>
            <p className="productTextStyle1">Aceite</p>
            <p className="productTextStyle2">Aceite de oliva virgen extra</p>
          
          </div>
          <button
            className="buttonStyle"
            onClick={() => handleButtonClick('/product2')} 
          >
            SELECCIONAR OPCIONES
          </button>
        </div>
        <div className="productItem">
          <Link to="/product3">
          <img src={image3} alt="Producto 3" className="productImage" />
          </Link>
          <div>
            <p className="productTextStyle1">Aceite</p>
            <p className="productTextStyle2">Aceite de oliva virgen extra</p>
          
          </div>
          <button
            className="buttonStyle"
            onClick={() => handleButtonClick('/product3')}
          >
            SELECCIONAR OPCIONES
          </button>
        </div>
        <div className="productItem">
          <Link to="/product4">
          <img src={image4} alt="Producto 4" className="productImage" />
          </Link>
          <div>
            <p className="productTextStyle1">Aceite</p>
            <p className="productTextStyle2">Aceite de oliva virgen extra</p>
           
          </div>
          <button
            className="buttonStyle"
            onClick={() => handleButtonClick('/product4')}
          >
            SELECCIONAR OPCIONES
          </button>
        </div>
        <div className="productItem">
          <Link to="/product5">
          <img src={image5} alt="Producto 5" className="productImage" />
          </Link>
          <div>
            <p className="productTextStyle1">Aceite</p>
            <p className="productTextStyle2">Aceite de oliva virgen extra</p>
           
          </div>
          <button
            className="buttonStyle"
            onClick={() => handleButtonClick('/product5')}
          >
            SELECCIONAR OPCIONES
          </button>
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
      <BotonDeslizante />
      <WhatsappButton />
      <CartButton openCart={openCart} />
      <div>
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default Product1;
