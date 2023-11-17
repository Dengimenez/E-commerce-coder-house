import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './components/About/About';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from "./components/ItemlistContainer/ItemlistContainer";
import Home from './components/Home/Home';
import Carrito from './components/Carrito/Carrito';
import { CartProvider } from "./context/CartContext"
import LandingPage from "./components/LandingPage/LandingPage"
import Checkout from './components/Checkout/Checkout';
import './App.css';
import Contacto from './components/Contacto/Contacto';

function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/landingpage" />} />
            <Route path='/landingpage' element={<LandingPage />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;