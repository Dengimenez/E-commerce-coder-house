import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../imagenes/banner.jpeg";
import styles from "./home.module.css"

const Home = () => {
  const images = [
    'URL de la imagen 1',
  ];

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 700,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
  //   <div className={`${styles.container} ${styles.carousel}`}>
      
  //     { <span>
  //       <h1 className= {styles.titulo}> Unlimited Style </h1>
  //     </span> }
   
  //      <Slider {...settings}> 
   
   <div className={styles.banner}>
    <img src={image1} alt="banner" />
    <h1>HOLA BIENVENIDOS </h1>
   
    <div className={styles.pagos}>     
         <h3>
            ENVIOS A TODO EL PAIS
        </h3>
        <h3>
            TODOS LOS MEDIOS DE PAGO 
        </h3>
        
        <h3>
            CUOTAS SIN INTERES
        </h3>

        <p>
            Entregas en CABA y GBA
        </p>
        
        
        <p>
            Tarjetas de crédito , débito y transferencia 
        </p>

       
        <p>
            3 a 6 con todas las tarjetas de credito
        </p>
       
    </div>
    </div>

 
  );
  
};

export default Home;