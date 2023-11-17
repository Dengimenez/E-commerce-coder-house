import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import styles from './CartWidget.module.css';
import BolsaDecoMpras from "../imagenes/Bolsa.png";

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <Link className={styles.menuLink} to="/carrito">
        {/* Muestra la imagen en lugar de la palabra "Carrito" */}
        <img src={BolsaDecoMpras} alt="Carrito" className={styles.iconoCarrito} />
        <span className={styles.numerito}>{cantidadEnCarrito()}</span>
      </Link>
    </div>
  );
}

export default CartWidget;