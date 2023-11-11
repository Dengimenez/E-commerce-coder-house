import React, { useEffect, useState } from 'react';
import styles from './Productos.module.css';
import Card from '../Card/Card';
import Categorias from '../Categorias/Categorias';
import Carrito from '../Carrito/Carrito';
import { db } from '../firebase/client';
import { collection, getDocs } from 'firebase/firestore';


const Productos = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [carrito, setCarrito] = useState([]);

  //cambio
  const [allCategories, setAllCategories] = useState([]);
   
  useEffect(() => {
    const fetchProductsFromFirestore = async () => {
      try {
        const productsRef = collection(db, 'products');
        const querySnapshot = await getDocs(productsRef);

        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productsData);
        
        //cambio
      const categoriesFromFirebase = [...new Set(productsData.map((product) => product.category))];
        setAllCategories(categoriesFromFirebase);
        console.log(categoriesFromFirebase);

      } catch (error) {
        console.error('Error fetching products from Firestore:', error);
       
      }
    };

    fetchProductsFromFirestore();
  }, []);

  // funcion para incrementar los botones del carrito 
  const incrementarCantidad = (productId) => {
    const nuevoCarrito = carrito.map((item) => {
      if (item.id === productId) {
        return { ...item, cantidad: item.cantidad + 1 };
      }
      return item;
    });
  
    setCarrito(nuevoCarrito);
  };

//funcion para decrementarcarrito
const decrementarCantidad = (productId) => {
  const nuevoCarrito = carrito.map((item) => {
    if (item.id === productId && item.cantidad > 1) {
      return { ...item, cantidad: item.cantidad - 1 };
    }
    return item;
  });

  setCarrito(nuevoCarrito);
};

  // Función para agregar producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  // Función para quitar producto del carrito
  const quitarDelCarrito = (producto) => {
    if (producto && producto.id) {
      const nuevoCarrito = carrito.filter((item) => item.id !== producto.id);
      setCarrito(nuevoCarrito);
    }
  };

  // Filtra los productos por categoría seleccionada
    const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

//  const categorias = [...new Set(products.map((product) => product.category))];

 return (
    <div>
     {/* <Categorias categorias={categorias} onCategoriaChange={setSelectedCategory} /> */}
     <Categorias categorias={allCategories} onCategoriaChange={setSelectedCategory} /> 
     <Carrito carrito={carrito} onEliminarDelCarrito={quitarDelCarrito} />
     <div className={styles.productList}>
        {filteredProducts.map((product) => (
     <Card
     key={product.id}
     product={product}
     onAgregarAlCarrito={agregarAlCarrito}
     incrementarCantidad={() => incrementarCantidad(product.id)}
     decrementarCantidad={() => decrementarCantidad(product.id)}
     cantidadEnCarrito={product.cantidad} // Asegúrate de ajustar esto según tu estructura de datos
   />
       ))}
     </div>
   </div>
 );
  
};

export default Productos;