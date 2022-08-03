import Equipo from "../components/Equipo";
import portada from "../img/portada.jpg";

const Nosotros = () => {
  return (
    <div>
      <section id="nosotros" className="mb-5">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <h2 className="mb-3">Nosotros</h2>
              <p>
                Entendemos el negocio como una consecuencia de un eficiente
                servicio en el cual todos ganan.Nuestro servicio se basa en la
                confianza y profesionalismo.
              </p>
              <p>
                Entendemos el negocio como una consecuencia de un eficiente
                servicio en el cual todos ganan.Nuestro servicio se basa en la
                confianza y profesionalismo.
              </p>
              <p>Diez años de experiencia avalan nuestro trabajo.</p>
            </div>
            <div className="col-12 col-md-6">
              <img className="w-100" src={portada} alt="Local de Nimax" />
            </div>
          </div>
        </div>
        <Equipo />
      </section>
    </div>
  );
};

export default Nosotros;
