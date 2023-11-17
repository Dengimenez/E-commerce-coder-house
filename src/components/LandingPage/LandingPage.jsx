import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

const LandingPage = () => {
  return (
    <div className={styles.videofunda}>
      <video
        autoPlay
        loop
        muted
        className={styles.video}
      >
        <source src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/Animated_Phone_Case_MockUp_njmeuf.mp4" type="video/mp4" />
        Tu navegador no admite el elemento de video.
      </video>

      <div className={styles.content}>
        <h1>Holic tu tienda✨ </h1>
        <Link to="/home">
          <button className={styles.button}>Ingresar</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;