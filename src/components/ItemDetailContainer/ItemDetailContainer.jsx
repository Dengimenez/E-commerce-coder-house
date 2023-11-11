import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Details.module.css';
import Loading from '../Loading/Loading';
import { db } from '../firebase/client';
import { collection, getDocs } from 'firebase/firestore';

  const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // Obtener la referencia a la colección 'products' en Firebase Firestore
        const productsRef = collection(db, 'products');

        // Realizar la consulta para obtener los detalles del producto específico por su ID
        const querySnapshot = await getDocs(productsRef);
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (doc.id === id) {
            // Si se encuentra el producto con el ID especificado, establecerlo en el estado
            setProducto(data);
          }
        });

        // Marcar la carga como completa
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setIsLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (!producto) {
    return <p>No se encontraron detalles del producto.</p>;
  }

 

  return (
    <div className={styles.container}>
      <img className={styles.image} src={producto.image} alt={producto.title} />
      <h3 className={styles.title}>{producto.title}</h3>
      <p className={styles.description}>{producto.description}</p>
      <p className={styles.price}>${producto.price}</p>
      {/* <p className={styles.additionalText}>Texto adicional debajo de la imagen.</p> */} 
     
    </div>
     
  );
};

export default ItemDetailContainer;
