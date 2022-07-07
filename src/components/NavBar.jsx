import '../scss/navbar.scss';
import React from 'react';
import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import CartWidget from './CartWidget';
import logo from '../img/logo.jpg';

// creo un componente de clase,lo extiendo a partir de react
class NavBar extends React.Component {
  // funcion del comp que valida la url activa y retorna las clases 
  getNavLinkClass = (path) => {
    return window.location.pathname === path ? 'nav-link active' : 'nav-link';
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light bg-opacity-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" width="60" height="48"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarId" aria-controls="navbarId" aria-expanded="false" aria-label="Toggle navigation"><FontAwesomeIcon icon ={faBars}/></button>
          <div className="collapse navbar-collapse" id="navbarId">
            <ul className="navbar-nav ms-auto text-start">
              <li className="nav-item">
                <a className={this.getNavLinkClass('/')} aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className={this.getNavLinkClass('/alquileres')} href="/alquileres">Alquileres</a>
              </li>
              <li className="nav-item">
                <a className={this.getNavLinkClass('/oportunidades')} href="/alquileres">Oportunidades</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Ventas</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="/depto-1a">Departamento 1 ambiente</a></li>
                  <li><a className="dropdown-item" href="/depto-2a">Departamento 2 ambientes</a></li>
                  <li><a className="dropdown-item" href="/casas">Casas</a></li>
                  <li><a className="dropdown-item" href="/lotes">Lotes</a></li>
                  <li><a className="dropdown-item" href="/lotes">Quintas</a></li>
                  <li><a className="dropdown-item" href="/lotes">Hoteles</a></li>
                  <li><a className="dropdown-item" href="/locales">Locales</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className={this.getNavLinkClass('/nosotros')} href="/nosotros">Nosotros</a>
              </li>
              <li className="nav-item">
                <a className={this.getNavLinkClass('/contacto')} href="/contacto">Contacto</a>
              </li>
              <li className="nav-item">
                <CartWidget/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;