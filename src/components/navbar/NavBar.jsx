import React from 'react';
import styles from "./Navbar.module.css";
import miImagen from '../imagenes/logo.jpg';
import { Link } from 'react-router-dom';
import BolsaDecoMpras from "../imagenes/Bolsa.png";
import CartWidget from '../CartWidget/CartWidget'; 

const NavBar = () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.logo}>
        <Link to="/home">
          <img src={miImagen} alt="Logo" />
        </Link>
      </div>
      <ul className={styles.lista}>
        <a href="/home">HOME</a>
        <a href="/productos">PRODUCTS</a>
        <a href="/about">ABOUT US</a>
        <CartWidget /> {/* Agrega el componente CartWidget aquí */}
      </ul>
    </div>
  );
};

export default NavBar;