import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import styles from './Carrito.module.css';
import NavBar from '../navbar/NavBar';

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    
    <div> 
      <NavBar/>
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Carrito</h1>

      {carrito.map((prod) => (
        <div className={styles.product} key={prod.id}>
          <br />
          <h3>{prod.titulo}</h3>
          <img src={prod.image} alt={prod.titulo} className={styles.productImage} />
          <p>Precio unit: ${prod.price}</p>
          <p>Precio total: ${prod.price * prod.cantidad}</p>
          <p>Cant: {prod.cantidad}</p>
          <br />
        </div>
      ))}

      {carrito.length > 0 ? (
        <>
          <h2 className={styles.totalPrice}>Precio total: ${precioTotal()}</h2>
          <div className={styles.actions}>
            <button onClick={handleVaciar}>Vaciar</button>
            <Link to="/checkout" className={styles.linkToCheckout}>
              Finalizar compra
            </Link>
          </div>
        </>
      ) : (
        <h2 className={styles.cartt}>El carrito está vacío 🥺</h2>
      )}
    </div>
    </div>
    
    
  );
};

export default Carrito;