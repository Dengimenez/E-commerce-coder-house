import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../imagenes/adidas1.jpeg";
import image2 from "../imagenes/adidas2.jpeg";
import image3 from "../imagenes/adidas3.jpeg";
import styles from "./home.module.css"

const Home = () => {
  const images = [
    'URL de la imagen 1',
    'URL de la imagen 2',
    'URL de la imagen 3',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
   
    <div className={`${styles.container} ${styles.carousel}`}>
      <span>
        <h1 className= {styles.titulo}> Unlimited Style </h1>
      </span>
   
      <Slider {...settings}>
  <div>
    <img src={image1} alt="Slide 1" />
  </div>
  <div>
    <img src={image2} alt="Slide 2" />
  </div>
  <div>
    <img src={image3} alt="Slide 3" />
  </div>
</Slider>
    </div>
  );
};

export default Home;