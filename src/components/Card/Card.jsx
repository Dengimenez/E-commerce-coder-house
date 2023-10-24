import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ product }) => {
  if (!product) {
    return null;
  }

  return (
    <div className={styles.container}>
    <div className={styles.card}>
      <Link to={`/productos/${product.id}`}>
        <img src={product.image} alt={product.title} className={styles.image} />
      </Link>
      <div className={styles.cardContent}>
        <h2>{product.title}</h2>
        <p>${product.price}</p>
      
      </div>
    </div>
    </div>
  );
};

export default Card;
