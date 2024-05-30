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
import { db } from './firebase';
import { collection, query, where, getDocs } from "firebase/firestore";

const MostrarProductoPorNombre = ({ nombreProducto }) => {
  const [producto, setProducto] = useState(null);
  console.log({ nombreProducto });

  useEffect(() => {
    if (nombreProducto) {
      const fetchProduct = async () => {
        try {
          const productosRef = collection(db, 'productos');
          const q = query(productosRef, where('nombreproducto', '==', nombreProducto));
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0];
            setProducto({ ...doc.data(), id: doc.id });
          } else {
            setProducto(null); // No se encontró el producto
          }
        } catch (error) {
          console.error("Error fetching product: ", error);
        }
      };

      fetchProduct();
    }
  }, [nombreProducto]);

  return (
    <div>
      {producto ? (
        <div key={producto.id}>
          <h2>{producto.nombre_producto}</h2>
          <img src={producto.imagenURL} alt={producto.nombre_producto} />
        </div>
      ) : (
        <p>No se encontró el producto con el nombre "{nombreProducto}".</p>
      )}
    </div>
  );
};

export default MostrarProductoPorNombre;

