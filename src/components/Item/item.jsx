//  import React from 'react'
 
const Item = ({producto}) => {
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
