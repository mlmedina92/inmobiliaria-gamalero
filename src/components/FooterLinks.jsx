import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.jpg';

const FooterLinks = () => {
    return(
      <div className="pt-4 px-20 py-4">
        <div className="container">
          <div className="row">
            <div className="d-none d-sm-block col-12 col-md-2 col-1">
              <NavLink className="text-decoration-none" to="/" title="Nimax piletas">
                <img src={logo} alt="Gamalero Inmoboliaria" width="60" height="48" />
              </NavLink>
            </div>
            <div className="col-12 col-md-3 mb-3">
              <ul className="list-unstyled">
                <li className="pb-2"><NavLink className="text-decoration-none" to="/" element=''>Inicio</NavLink></li>
                <li className="pb-2"><NavLink className="text-decoration-none" to="/" element='' >Oportunidades</NavLink></li>
                <li className="pb-2"><NavLink className="text-decoration-none" to="/" element=''>Venta</NavLink></li>
                <li className="pb-2"><NavLink className="text-decoration-none" to="/" element=''>Nosotros</NavLink></li>
                <li className="pb-2"><NavLink className="text-decoration-none" to="./  element=''">Contacto</NavLink></li>
              </ul>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <NavLink className="text-decoration-none" to="tel:2494544221" title="Administración"><i
                      className="fa-solid fa-phone"></i> Llamanos</NavLink>
                </li>
                <li>
                  <NavLink className="text-decoration-none" to="https://goo.gl/maps/EXswAuif3Q6bjLet6">
                    <i className="fas fa-map-marker-alt"></i> Colectora Pugliese<br/>Tandil (7000), Buenos
                    Aires,
                    Arg.</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-3">
              <p className="texto-footer">Seguinos en las redes</p>
              <ul className="list-unstyled d-inline-flex">
                <li className="me-3">
                  {/* <a className="text-decoration-none fs-5" href="https://www.youtube.com/channel/UCbtI5mxax1HJuMPHhrPr7Kg" target="_blank"><i className="fa-brands fa-youtube"></i></a> */}
                </li>
                <li className="me-3">
                  {/* <a className="text-decoration-none fs-5" href="https://www.facebook.com/search/top?q=nimax%20piletas"
                    target="_blank"><i className="fa fa-facebook"></i></a> */}
                </li>
                <li className="me-3">
                  {/* <a className="text-decoration-none fs-5" href="https://www.instagram.com/nimaxpiletas/" target="_blank"><i
                      className="fa fa-instagram"></i></a> */}
                </li>
                <li>
                  {/* <a className="text-decoration-none fs-5" target="_blank" href="mailto:nimaxpiletas@gmail.com"
                    title="E-mail"><i className="fas fa-envelope"></i></a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default FooterLinks;
