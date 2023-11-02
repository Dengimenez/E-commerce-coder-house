import React, { useEffect, useState } from 'react';
import styles from './Productos.module.css';
import Card from '../Card/Card';
import Categorias from '../Categorias/Categorias';  
import Carrito from '../Carrito/Carrito';

const Productos = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch((error) => console.error(error));
  }, []);

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

  const categorias = [...new Set(products.map((product) => product.category))];

  return (
    <div> 
      <Categorias categorias={categorias} onCategoriaChange={setSelectedCategory} /> 
      <Carrito carrito={carrito} onEliminarDelCarrito={quitarDelCarrito} /> 
      <div className={styles.productList}>
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} onAgregarAlCarrito={agregarAlCarrito} />
        ))}
      </div>
    </div>
  );
};

export default Productos;


