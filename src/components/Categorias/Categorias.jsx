import React from 'react';
import styles from './Categories.module.css'; 

const Categorias = ({ categorias, onCategoriaChange }) => {
  return (
    <div className={styles.container}> 
      <h2 className={styles.titulo}>Categorias</h2>
      <select className={styles.select} onChange={(e) => onCategoriaChange(e.target.value)}>
        <option value="">Todas las categorías</option>
        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categorias;