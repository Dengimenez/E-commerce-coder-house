import React from 'react'
import styles from "./Contacto.module.css"
import { Link } from 'react-router-dom';

const ContactoPage = () => {

    // const imageUrl = 'https://png.pngtree.com/png-clipart/20210308/original/pngtree-brown-cartoon-puppy-clipart-puppy-clipart-png-image_5731312.jpg';
    
    return (
    <div className={styles.denu}>
    <Link to="/">
        <button>Volver al Home</button>
    </Link>
    
      <p> Aca se muestran los contactos de la pagina </p>
      {/* <img src={imageUrl} alt="#" /> */}
      
    </div>
  )
}

export default ContactoPage;