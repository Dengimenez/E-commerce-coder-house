import React from "react";
import Item from "../Item/item";
import { toCapital } from "../../helpers/toCapital";
import styles from "./ItemList.module.css";

const ItemList = ({ products, titulo, categoria }) => {
  const filteredProducts = categoria
    ? products.filter((prod) => prod.categoria === categoria)
    : products;

  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>{toCapital(titulo)}</h2>
      <div className={styles.products}>
        {filteredProducts.map((prod) => (
          <Item products={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;