import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/client";
import { Link } from "react-router-dom";
import styles from "./ItemlistContainer.module.css";
import NavBar from '../navbar/NavBar'

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [titulo, setTitulo] = useState("Products");
  const [categoria, setCategoria] = useState(""); 

  useEffect(() => {
    // Obtener productos según la categoría seleccionada
    const obtenerProductos = async () => {
      const productsRef = collection(db, "products");
      const q = categoria ? query(productsRef, where("categoria", "==", categoria)) : productsRef;

      const productsSnapshot = await getDocs(q);
      const productsData = productsSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(productsData);
    };

    obtenerProductos();
  }, [categoria]);

  const handleCategoriaChange = (categoria) => {
    // Actualiza la categoría seleccionada y recargar los productos
    setTitulo(categoria);
    setCategoria(categoria);
  };

  return (
    <div>
      <NavBar/>
      <div className={styles.menu1}>
          <h1 className={styles.PRO}>Productos</h1>
        <div className={styles.dropdown}>
          <label htmlFor="categorias">Selecciona una categoría:</label>
          <select
            id="categorias"
            onChange={(e) => handleCategoriaChange(e.target.value)}
            value={categoria}
          >
            <option value="">Todas las categorías</option>
            <option value="fundas">Fundas</option>
            <option value="mallas">Mallas</option>
            <option value="USB">USB</option>
            <option value="reloj">Reloj</option>
            <option value="soportes">Soportes</option>
            <option value="airpods">Airpods</option>
            <option value="cargadores">Cargadores</option>

          </select>
        </div>
      </div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;