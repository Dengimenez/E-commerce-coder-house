import React from 'react';
import styles from './Carrito.module.css';
import quitarCarrito from '../imagenes/delete.gif'; 

const Carrito = ({ carrito, onEliminarDelCarrito }) => {
  const handleEliminarClick = (producto) => {
    onEliminarDelCarrito(producto);
    
  };

  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.price, 0);
  };

  return (
    <div className={styles.carrito}>
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map((producto) => (
          <li key={producto.id} className={styles.producto}>
            {producto.title} - ${producto.price} 
            <img
              src={quitarCarrito}
              alt="Icono de Eliminar"
              className={styles.quitarButton}
              onClick={() => handleEliminarClick(producto)}
            />
          </li>
        ))}
      </ul>
      <p>Total: ${calcularTotal()}</p>
    </div>
  );
};

export default Carrito;