import React from 'react'
import styles from "./Navbar.module.css"
import miImagen from '../imagenes/logo.jpg'; 
import { Link } from 'react-router-dom';
import BolsaDecoMpras from "../imagenes/Bolsa.png"


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
      
      <Link to="/carrito" > 
      
          <img src={BolsaDecoMpras} alt="Bolsa" className={styles.BolsaDecoMpras} />
        </Link>
    </ul> 
  </div>
  );

};

export default NavBar;