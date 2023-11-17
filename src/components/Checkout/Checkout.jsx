import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link
import { CartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/client';
import styles from './Checkout.module.css';

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState('');

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const { register, handleSubmit , formState: {errors} } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };

    const pedidosRef = collection(db, 'pedidos');

    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
      vaciarCarrito();
    });
  };

  if (pedidoId) {
    return (
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Muchas gracias por tu compra 😁</h1>
        <p>Tu número de pedido es: {pedidoId}</p>
        <p>A la brevedad , recibiras un e-mail con la factura detallada. </p>
        <Link to="/home"> 
          <button className={styles.volverBtn}>Volver al Home</button>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Finalizar compra</h1>
      <form className={styles.formulario} onSubmit={handleSubmit(comprar)}>
        <input
          className={`${styles.input} ${errors.nombre ? styles.error : ''}`}
          type="text"
          placeholder="Ingresá tu nombre"
          {...register('nombre', { required: 'Este campo es obligatorio' })}
        />
        {errors.nombre && <p className={styles.errorMessage}>{errors.nombre.message}</p>}

        <input
          className={`${styles.input} ${errors.email ? styles.error : ''}`}
          type="email"
          placeholder="Ingresá tu e-mail"
          {...register('email', { required: 'Este campo es obligatorio', pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}

        <input
          className={`${styles.input} ${errors.telefono ? styles.error : ''}`}
          type="tel"
          placeholder="Ingresá tu teléfono"
          {...register('telefono', { 
            required: 'Este campo es obligatorio' ,
            pattern: {
              value: /^[0-9]+$/,
              message: 'Ingresa solo números en el teléfono',
            },
          })}
        />
        {errors.telefono && <p className={styles.errorMessage}>{errors.telefono.message}</p>}

        <button className={styles.enviar} type="submit" disabled={Object.keys(errors).length > 0}>
          COMPRAR
        </button>
      </form>
    </div>


  );
};

export default Checkout;