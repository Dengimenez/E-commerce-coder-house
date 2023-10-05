import React from 'react'
import styles from "./ItemListContainer.module.css"

const ItemListContainer = ({greeting}) => {

  return (
    <>
    <h1 className='saludo'>{greeting}</h1>
    </>
  )
}
export default ItemListContainer 