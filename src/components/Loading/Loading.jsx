import React from "react";
import loadingGif from '../imagenes/Icons.gif';
import styles from './Loading.module.css';

const Loading = () => {
    return (
        <div className={styles.container}>
            <img src={loadingGif} alt='Loading'/>
        </div>
    );
};

export default Loading;