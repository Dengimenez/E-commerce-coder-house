import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productos from './components/Products/Productos';
import ContactoPage from './components/Contacto/ContactoPage';
import NavBar from './components/navbar/NavBar';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './components/Home/Home'
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/detail" element={<ItemDetailContainer />} />
          <Route path="/productos/:id" element={<ItemDetailContainer />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
