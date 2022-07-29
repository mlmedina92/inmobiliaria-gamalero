import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import FooterLinks from './components/FooterLinks';
import React from 'react';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Venta from './pages/Venta';


function App() {
  return (
    <>
    <BrowserRouter>
      <header className="sticky-top">
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/venta' element={<Venta/>}/>

        </Routes>
      </main>
      <footer>
        <FooterLinks />
      </footer>
    </BrowserRouter>
    </>
    );
}

export default App;
