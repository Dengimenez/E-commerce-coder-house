import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './item.module.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import Carritox from "../imagenes/Carritox.png"

const Card = ({ products }) => {
  const [showDetail, setShowDetail] = useState(false);

  const handleShowDetail = () => {
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Link to={`/item/${products.id}`}>
          <img src={products.image} alt={products.title} className={styles.image} />
        </Link>
        <div className={styles.cardContent}>
          <h2>{products.title}</h2>
          <p>${products.price}</p>
          <p>Stock Disponible: {products.stock}</p>
          <div className={styles.btn1}>
          <button onClick={handleShowDetail }><img src={Carritox} alt="" /></button>
          </div>
        </div>
      </div>
      {showDetail && (
        <div className={styles.detailOverlay} onClick={handleCloseDetail}>
          <div className={styles.detailContainer} onClick={(e) => e.stopPropagation()}>
            <ItemDetail item={products} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;