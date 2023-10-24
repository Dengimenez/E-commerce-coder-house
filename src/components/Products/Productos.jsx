import React, { useEffect, useState } from 'react';
import styles from './Productos.module.css';
import Card from '../Card/Card'; 

const Productos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.productos}>
      <div className={styles.productList}>
        {products.map((product) => (
          <Card key={product.id} product={product} /> 
        ))}
      </div>
    </div>
  );
};

export default Productos;


