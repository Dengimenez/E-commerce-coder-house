import React from 'react'
import styles from "./Contacto.module.css"
import remeron from "../imagenes/fundas.jpeg"


const ContactoPage = () => {
return (
    <div className={styles.aboutUs}>
      
      <div className={styles.foto}>
      <img src={remeron} alt="foto" />
      </div>

    <div className={styles.about}>
      <h1>About Holic </h1>
      <h2>HOLIC emerge creando una nueva experiencia</h2>
      <p> La nueva colección compone el balance perfecto.
        HOLIC presenta una exquisita selección de prendas atemporales y se posiciona como referente 
        para la mujer contemporanea.

        Los tejidos nobles de temporada, confeccionados en hilados naturales, aportan suavidad y 
        distinción a las prendas de verano.
        Desarrollando un concepto transformador y colocando a lo esencial dentro de la cadena de valor, 
        RISE se origina para vestir al hombre consciente. </p>
      </div>
    </div>

  )
}

export default ContactoPage;