import React from 'react'
import styles from "./Navbar.module.css"
import CartWidget from '../Cardwidget/Cardwidget';
import miImagen from '../imagenes/logo.jpg'; 
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (

<div className={styles.contenedor}>

      <div className={styles.logo}>
      <Link to="/"> 
          <img src={miImagen} alt="Logo" />
        </Link>
      {/* <img src={miImagen} alt="Logo" /> */}

      </div>

    <ul className={styles.lista}>
      <a href="/">Inicio</a>
      <a href="/productos">Productos</a>
      <a href="/Contacto">Contacto</a> 
    </ul>

    <CartWidget/>
    
  </div>
  );

};

export default NavBar;