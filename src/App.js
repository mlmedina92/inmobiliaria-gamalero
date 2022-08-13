import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import FooterLinks from "./components/FooterLinks";
import React from "react";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Whatsapp from "./components/Whatsapp";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Copyright from "./components/Copyright";

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="sticky-top">
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
              element={<ItemDetailContainer />}
            />
          </Routes>
        </main>
        <footer>
          <FooterLinks />
        </footer>
        <Copyright />
        <Whatsapp />
      </BrowserRouter>
    </>
  );
}

export default App;
