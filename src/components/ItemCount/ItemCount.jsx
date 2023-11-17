import React from 'react'
import style from "./ItemCount.module.css"

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

  return (
    <div>

        <div className={style.ItemCount}>
          
            <button onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <button className={style.agregar} onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount