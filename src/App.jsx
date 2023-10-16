import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Productos from './components/Products/Productos';
 import ContactoPage from './components/Contacto/ContactoPage';
 import CardWidget from './components/Cardwidget/Cardwidget';
 import ItemListContainer from './components/ItemListContainer/ItemListContainer';
 import NavBar from './components/navbar/NavBar';
 import Footer from './components/Footer/Footer';
 import './App.css'; 

function App() {
   return (
     <div>
  
       <BrowserRouter>
          <Routes>
          <Route path="/" element={<NavBar />} />
           <Route path="/productos" element={<Productos />} /> 
           <Route path="/Contacto" element={<ContactoPage />} /> 
           <Route path="/card" element={<CardWidget />} /> 
           <Route path="/ItemListContainer" element={<ItemListContainer/>} />
           <Route path="/Footer" element={<Footer/>} />
          </Routes>
       </BrowserRouter>
       <ItemListContainer greeting = "¡Bienvenidos a nuestro e-commerce de HOLIC !"/>
       <Footer/>
     </div>
    
   );
 }

 export default App;
