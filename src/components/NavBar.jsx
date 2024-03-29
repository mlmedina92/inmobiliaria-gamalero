import '../scss/navbar.scss';
import React from 'react';
import logo from '../img/logo.png';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

// creo un componente de clase,lo extiendo a partir de react
const NavBar = () => {
  const navLinkClassName = 'nav-link';
  const navLinkClassNameActive = 'nav-link active';

 let handleCollapse =() =>{
    document.getElementById("navbarDropdownMenuLink").click()
   };

  return (
    <nav className="navbar navbar-expand-lg bg-light bg-opacity-75">
      <div className= "container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Gamalero Inmoboliaria" width="209" height="60" loading="lazy"/>
        </NavLink>
        {/* menu mobile */}
        <button className="navbar-toggler bg-light bg-opacity-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarId" aria-controls="navbarId" aria-expanded="false" aria-label="Toggle navigation"><i className="bi bi-list"></i></button>
        {/* Links menú pcipal */}

        <div className="collapse navbar-collapse justify-content-end text-uppercase" id="navbarId">
          <ul className="navbar-nav ms-auto text-start">
            <li className="nav-item">
              <NavLink className={navLinkClassName} activeclassname={navLinkClassNameActive} to='/'>Inicio</NavLink>
            </li>
            <li className="nav-item">
              <Link className={navLinkClassName} activeclassname={navLinkClassNameActive} to="/#oportunidades">Oportunidades</Link>
            </li>
            <li className="nav-item dropdown" id="navbarDropdownMenu">
              <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Ventas</NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><NavLink className="dropdown-item" to='/venta/depto-1a' onClick={handleCollapse}>Deptos. 1 Dormitorio</NavLink></li>
                <li><NavLink className="dropdown-item" to='/venta/depto-2a' onClick={handleCollapse}>Deptos. 2 Dormitorios</NavLink></li>
                <li><NavLink className="dropdown-item" to='/venta/casas' onClick={handleCollapse}>Casas</NavLink></li>
                <li><NavLink className="dropdown-item" to='/venta/lotes' onClick={handleCollapse}>Lotes</NavLink></li>
                <li><NavLink className="dropdown-item" to='/venta/quintas' onClick={handleCollapse}>Quintas</NavLink></li>
                <li><NavLink className="dropdown-item" to='/venta/hoteles' onClick={handleCollapse}>Hoteles</NavLink></li>
                <li><NavLink className="dropdown-item" to='/venta/locales' onClick={handleCollapse}>Locales</NavLink></li>
                <li><NavLink className="dropdown-item" to='/venta/galpones'onClick={handleCollapse}>Galpones</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClassName} activeclassname={navLinkClassNameActive} to='/nosotros'>Nosotros</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClassName} activeclassname={navLinkClassNameActive} to='/contacto'>Contacto</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;