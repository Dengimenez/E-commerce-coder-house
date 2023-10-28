 import React from 'react'
import {useContext} from 'react'
import {cardContext } from '../context/cartContext'

 
const Item = ({producto}) => {
  const {numero, setNumero} = useContext(cardContext)
  return (
    <div>
      <p>{producto.title}</p>
      <p>{producto.description}</p>
      <p>{producto.price}</p>
      <p>{producto.image}</p>
    </div>
  )
}

export default Item
