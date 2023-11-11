  import React from 'react';
  import { Link } from 'react-router-dom';
  import styles from './Card.module.css';

  const Card = ({ product, onAgregarAlCarrito, incrementarCantidad, decrementarCantidad, cantidadEnCarrito }) => {
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
          <p>Stock Disponible: {product.stock}</p>
             <div>
            <button onClick={decrementarCantidad}>-</button>
            <span>{cantidadEnCarrito}</span>
            <button onClick={incrementarCantidad}>+</button>
          <button onClick={() => onAgregarAlCarrito(product)}>
            AGREGAR AL CARRITO
            <br />
          </button>
          </div>    
        </div>
      </div>
    </div>
  );
  };

  export default Card;

