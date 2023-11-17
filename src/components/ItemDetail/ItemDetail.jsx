import React, { useContext, useState } from "react";
import { toCapital } from "../../helpers/toCapital";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import styles from "./ItemDetail.module.css";


const ItemDetail = ({ item }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
   console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    
    <div className={styles.container}>
      <div className={styles.productoDetalle}>
        <img src={item.image} alt={item.title} />
        <div>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.description}>{item.descrition}</p>
          <p className={styles.categoria}>
            Categoría: {toCapital(item.categoria)}
          </p>
          <p className={styles.price}>${item.price}</p>
          <div className={styles.btn}> 
          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={() => {
              agregarAlCarrito(item, cantidad);
            }}
          />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ItemDetail;