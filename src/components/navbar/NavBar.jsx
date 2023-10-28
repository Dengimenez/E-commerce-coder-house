// import React from 'react'
// import styles from "./Navbar.module.css"
// import CartWidget from '../Cardwidget/Cardwidget';
// import miImagen from '../imagenes/logo.jpg'; 
// import { Link } from 'react-router-dom';
// import Productos from '../Products/Productos';


// const NavBar = () => {
  
//     const arrayCategorias = [
//         "electronics",
//         "jewelery",
//         "mens's clothing",
//         "women's clothing"
//      ]

//   return (
   
//    <div className={styles.contenedor}>

//         <div className={styles.logo}>
//         <Link to="/"> 
//           <img src={miImagen} alt="Logo" />
//         </Link>

//       </div>

//   <ul className={styles.lista}>
//       <a href="/">HOME</a>
//       <a href="/productos">PRODUCTS
//                     <ul>
//                         {arrayCategorias.map((cat, index) => (
//                             <li key={index}>{cat}</li>
//                         ))}
//                     </ul>
//                 </a>
//       <a href="/Contacto">ABOUT US</a>  
//     </ul>

//     <CartWidget/>

//     </div>
    
//    );

// };

// export default NavBar;

import React from 'react';
import styles from "./Navbar.module.css";
import CartWidget from '../Cardwidget/Cardwidget';
import miImagen from '../imagenes/logo.jpg'; 
import { Link } from 'react-router-dom';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const NavBar = () => {
  const arrayCategorias = [
    "electronics",
    "jewelry",
    "men's clothing",
    "women's clothing"
  ];

  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
    )},
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
    )},
    ];

  return (
    <div className={styles.contenedor}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={miImagen} alt="Logo" />
        </Link>
      </div>

      <ul className={styles.lista}>
        <a href="/">HOME</a>
        <Dropdown
          overlay={
            <ul>
              {arrayCategorias.map((cat, index) => (
                <li key={index}>{cat}</li>
              ))}
            </ul>
          }
        >
          <a>
            PRODUCTS <DownOutlined />
          </a>
        </Dropdown>
        
        <a href="/Contacto">ABOUT US</a>
      </ul>

      <CartWidget />
    </div>
  );
};

export default NavBar;
