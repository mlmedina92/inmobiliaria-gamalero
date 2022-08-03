import '../scss/navbar.scss';
import React from 'react';
import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import logo from '../img/logo.png';
import { NavLink } from 'react-router-dom';

// creo un componente de clase,lo extiendo a partir de react
const NavBar = () => {
 //funcion para aplicar las clases nativas de react router dom para links activos
  const navLinkClassName = 'nav-link';
  const navLinkClassNameActive = 'nav-link active';


  return (
    <nav className="navbar navbar-expand-lg bg-light bg-opacity-50">
      <div className= "container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Gamalero Inmoboliaria" width="60" height="48"/>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarId" aria-controls="navbarId" aria-expanded="false" aria-label="Toggle navigation"><FontAwesomeIcon icon ={faBars}/></button>
        <div className="collapse navbar-collapse text-uppercase" id="navbarId">
          <ul className="navbar-nav ms-auto text-start">
            <li className="nav-item">
              <NavLink className={navLinkClassName} activeclassname={navLinkClassNameActive} to='/'>Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClassName} activeclassname={navLinkClassNameActive} to="/contacto">Alquileres</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClassName} activeclassname={navLinkClassNameActive} to="/#oportunidades">Oportunidades</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Ventas</NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><NavLink className="dropdown-item" to='/venta/depto-1a'>Deptos. 1 Dormitorio</NavLink></li>
                <li><NavLink className="dropdown-item" to='/venta/depto-2a'>Deptos. 2 Dormitorios</NavLink></li>
                <li><NavLink className="dropdown-item" to='/venta/casas'>Casas</NavLink></li>
                <li><NavLink className="dropdown-item" to='/venta/lotes'>Lotes</NavLink></li>
                <li><NavLink className="dropdown-item" to='/venta/quintas'>Quintas</NavLink></li>
                <li><NavLink className="dropdown-item" to='/venta/hoteles'>Hoteles</NavLink></li>
                <li><NavLink className="dropdown-item" to='/venta/locales'>Locales</NavLink></li>
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