import '../scss/navbar.scss';
import React from 'react';
import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import logo from '../img/logo.jpg';
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
              <NavLink className={({isActive}) => isActive ? navLinkClassNameActive : navLinkClassName} to='/'>Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? navLinkClassNameActive : navLinkClassName} to="/contacto">Alquileres</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? navLinkClassNameActive : navLinkClassName} to="/#oportunidades">Oportunidades</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Ventas</NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><NavLink className="dropdown-item" to='/depto-1a'>Deptos. 1 Dormitorio</NavLink></li>
                <li><NavLink className="dropdown-item" to='/depto-2a'>Deptos. 2 Dormitorios</NavLink></li>
                <li><NavLink className="dropdown-item" to='/casas'>Casas</NavLink></li>
                <li><NavLink className="dropdown-item" to='/lotes'>Lotes</NavLink></li>
                <li><NavLink className="dropdown-item" to='/lotes'>Quintas</NavLink></li>
                <li><NavLink className="dropdown-item" to='/lotes'>Hoteles</NavLink></li>
                <li><NavLink className="dropdown-item" to='/locales'>Locales</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? navLinkClassNameActive : navLinkClassName} to='/nosotros'>Nosotros</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? navLinkClassNameActive : navLinkClassName} to='/contacto'>Contacto</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;