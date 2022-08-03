import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import FooterLinks from "./components/FooterLinks";
import React from "react";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Copi from "./components/Copi";
import Whatsapp from "./components/Whatsap";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="fixed-top">
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/venta/:categoriaId" element={<ItemListContainer greeting="Ventas"/>} />
            <Route
              path="/detalle/:detalleId"
              element={<ItemDetailContainer greeting="Detalles" />}
            />
          </Routes>
        </main>
        <footer>
          <FooterLinks />
        </footer>
        <Copi />
        <Whatsapp />
      </BrowserRouter>
    </>
  );
}

export default App;
