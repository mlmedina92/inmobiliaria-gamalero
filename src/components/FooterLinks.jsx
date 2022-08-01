import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';

const FooterLinks = () => {
    return(
      <div className="pt-4 px-20 py-4">
        <div className="container">
          <div className="row">
            <div className="d-none d-sm-block col-12 col-md-2 col-1">
              <NavLink className="text-decoration-none" to="/">
                <img src={logo} alt="Gamalero Inmoboliaria" width="60" height="48" />
              </NavLink>
            </div>
            <div className="col-12 col-md-3 mb-3">
              <ul className="list-unstyled">
                <li className="pb-2"><NavLink className="text-decoration-none" to="/" >Inicio</NavLink></li>
                <li className="pb-2"><NavLink className="text-decoration-none" to="/nosotros" >Nosotros</NavLink></li>
                <li className="pb-2"><NavLink className="text-decoration-none" to="/contacto">Contacto</NavLink></li>
              </ul>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <a className="text-decoration-none" href="tel:2494287779" title="Administración" target='_blank' rel='noopener noreferrer'><i
                      className="fa-solid fa-phone"></i> Administracion. Llamanos</a>
                </li>
                <li>
                  <a className="text-decoration-none" href="tel:249" title="Administración" target='_blank' rel='noopener noreferrer'><i
                  className="fa-solid fa-phone"></i> ventas . llamada : 2494460909    --- whatsap 2494328146</a>
                </li>
                <li>
                  <a className="text-decoration-none" href="https://goo.gl/maps/EXswAuif3Q6bjLet6" target='_blank' rel='noopener noreferrer'>
                  <i className="bi bi-geo-alt-fill"></i> Belgrano 1271<br/>Tandil (7000), Buenos
                    Aires,
                    Arg.</a>
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
                  <a className="text-decoration-none fs-5" href="https://www.facebook.com/juan.gamalero.7"
                    target="_blank" rel='noopener noreferrer'><i className="bi bi-facebook"></i></a>
                </li>
                <li className="me-3">
                  <a className="text-decoration-none fs-5" href="https://www.instagram.com/inmobiliariagamalero/" target="_blank" rel='noopener noreferrer'><i className="bi bi-instagram"></i></a>
                </li>
                <li>
                    <a className="text-decoration-none fs-5" target="_blank" href="mailto:inmobiliariagamalero@gmail.com" rel='noopener noreferrer'
                    title="E-mail"><i className="bi bi-envelope"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default FooterLinks;
