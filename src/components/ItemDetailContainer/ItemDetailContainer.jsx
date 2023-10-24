import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Details.module.css';
import Loading from '../Loading/Loading';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProducto(data);
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
      <p className={styles.additionalText}>Texto adicional debajo de la imagen.</p>
    </div>
  );
};

export default ItemDetailContainer;