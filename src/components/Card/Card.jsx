import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <Link to={`/card/${product.id}`}>Ver más</Link>
      </div>
    </div>
  );
};

export default Card;
