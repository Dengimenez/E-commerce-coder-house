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
      

      </div>

    <ul className={styles.lista}>
      <a href="/">HOME</a>
      <a href="/productos">PRODUCTS</a>
      <a href="/Contacto">ABOUT US</a> 
    </ul>

    <CartWidget/>
    
  </div>
  );

};

export default NavBar;