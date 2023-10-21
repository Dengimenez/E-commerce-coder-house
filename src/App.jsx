import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Productos from './components/Products/Productos';
 import ContactoPage from './components/Contacto/ContactoPage';
 import CardWidget from './components/Cardwidget/Cardwidget';
 import ItemListContainer from './components/ItemListContainer/ItemListContainer';
 import NavBar from './components/navbar/NavBar';
 import Footer from './components/Footer/Footer';
 import Item from './components/Item/item';
 import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
 import './App.css'; 

function App() {
  
   return (
     <div>
       <BrowserRouter>
        <NavBar />
        <Routes>
  <Route path="/productos" element={<Productos />} />
  <Route path="/contacto" element={<ContactoPage />} />
  <Route path="/card" element={<CardWidget />} />
  <Route path="/item-list" element={<ItemListContainer />} />
  <Route path="/item" element={<Item />} />
  <Route path="/productos/:id" element={<ItemDetailContainer />} />
</Routes>

       </BrowserRouter>
       <ItemListContainer greeting = "¡Bienvenidos a nuestro e-commerce de HOLIC !"/>
       
       <Footer/>
     </div>
    
   );
 }

 export default App;
