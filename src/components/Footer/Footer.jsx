import React from 'react';
import styles from "./Footer.module.css";
import maIl from "../Logos/Mail.png"; 
import linkedinLogo from "../Logos/Github.png"; 

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.leftSection}>
        <small className={styles.small}>© 2023 <b>HOLIC</b> - Todos los Derechos Reservados.</small>
      </div>
      <div className={styles.centerSection}>
        <h2>CREADO POR DENISE GIMENEZ</h2>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.socialLinks}>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={maIl} alt="Instagram" className={styles.socialIcon} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className={styles.socialIcon} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;