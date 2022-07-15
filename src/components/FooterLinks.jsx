import React from 'react';
import logo from '../img/logo.jpg';

const FooterLinks = () => {
    return(
      <div className="pt-4 px-20 py-4">
        <div className="container">
          <div className="row">
            <div className="d-none d-sm-block col-12 col-md-2 col-1">
              <a className="text-decoration-none" href="/" title="Nimax piletas">
                <img src={logo} alt="Gamalero Inmoboliaria" />
              </a>
            </div>
            <div className="col-12 col-md-3 mb-3">
              <ul className="list-unstyled">
                <li className="pb-2"><a className="text-decoration-none" href="./">Nosotros</a></li>
                <li className="pb-2"><a className="text-decoration-none" href="./">Distribuidores</a></li>
                <li className="pb-2"><a className="text-decoration-none" href="./">Galería</a></li>
                <li className="pb-2"><a className="text-decoration-none" href="./">Contacto</a></li>
              </ul>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <a className="text-decoration-none" href="tel:2494544221" title="Administración"><i
                      className="fa-solid fa-phone"></i> Llamanos</a>
                </li>
                <li>
                  <a className="text-decoration-none" href="https://goo.gl/maps/EXswAuif3Q6bjLet6">
                    <i className="fas fa-map-marker-alt"></i> Colectora Pugliese 10. Esquina Pozos<br/>Tandil (7000), Buenos
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
