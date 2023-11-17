import React from 'react';
import Slider from 'react-slick';
import Footer from "../Footer/Footer"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../imagenes/banner1.jpeg";
import image2 from "../imagenes/banner2.jpeg";
import image3 from "../imagenes/banner.jpeg";
import styles from "./home.module.css"
import NavBar from '../navbar/NavBar';

const Home = () => {
  const images = [
    'URL de la imagen 1',
    'URL de la imagen 2',
    'URL de la imagen 3',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
  };

  return (
    <div> 
    <div> 
        <NavBar/>
      <div className={`${styles.container} ${styles.carousel}`}>
        <span>
          <h1 className={styles.titulo}> HOLIC SHOP ✨ </h1>
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
     
    </div>
     <Footer/>
     </div>
  );
};

export default Home;