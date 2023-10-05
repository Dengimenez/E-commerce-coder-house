import React from 'react'
import styles from './Productos.module.css' 
import {Link} from 'react-router-dom'

const Productos = () => {
  return (
    <div className={styles.productos}>
     <Link to="/">
        <button>Volver al Home</button>
    </Link>
    <h1> Aca hay productos </h1>
    </div>
  )
}
export default Productos;