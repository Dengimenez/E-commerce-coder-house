import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/client";
import styles from "./details.module.css";
import NavBar from "../navbar/NavBar";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "products", id);
    getDoc(docRef)
      .then((resp) => {
        setItem({ ...resp.data(), id: resp.id });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div> 
      <NavBar/> 
    <div className={styles.container}>
      {loading ? (
        <p className={styles.loading}>Cargando...</p>
      ) : (
        item && <ItemDetail item={item} />
      )}
    </div>
    </div>
  );
};

export default ItemDetailContainer;