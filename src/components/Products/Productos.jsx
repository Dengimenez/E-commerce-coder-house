// import React, { useEffect } from 'react'
import React, { useEffect, useState } from 'react';
import styles from './Productos.module.css';
import { Link } from 'react-router-dom';
import Item from '../Item/item';
import Card from '../Card/Card';


const Productos = () => {
  
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=20')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch((error) => console.error(error));
  }, []);

  


  return (
    <div className={styles.productos}>
      <Link to="/">
        <button>Volver al Home</button>
      </Link>
      <div className={styles.productList}>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
      
    </div>
  );
};

export default Productos;


