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

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

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
              <div className="text-above-image-product">Texto Arriba de la Imagen</div>
              <img src={productData.imagenURL} alt="Producto 1" className="large-image-product" />
            </div>

            <div className="center-text-container-product">
              <h1 className="title-text-product">{productData.nombreproducto}</h1>
              <p className="explanatory-text-product">{productData.descripcion}</p>
              <p className="explanatory-text-product2">El precio no incluye el envio a domicilio</p>
              <div className="button-container-product">
                <button
                  className={`styled-button-product ${selectedButton === 1 ? 'selected-product' : ''}`}
                  onClick={() => handleButtonClick(1)}
                >
                  1ud
                </button>
                <button
                  className={`styled-button-product ${selectedButton === 2 ? 'selected-product' : ''}`}
                  onClick={() => handleButtonClick(2)}
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
