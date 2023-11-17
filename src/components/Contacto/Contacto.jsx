import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Contact.module.css";
import NavBar from "../navbar/NavBar";

const Contacto = () => {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  };

  return (
    <div>
      <NavBar/>
    <div className={styles.container}>
      <h1 className={styles["main-title"]}>Contacto</h1>
      <form className={styles.formulario} onSubmit={handleSubmit(enviar)}>
        <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
        <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
        <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
        <button className={styles.enviar} type="submit">
          Enviar
        </button>
      </form>
    </div>
    </div>
  );
};

export default Contacto;