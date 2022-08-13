import Equipo from "../components/Equipo";
import portada from "../img/portada.jpg";

const Nosotros = () => {
  return (
      <section id="nosotros" className="container-fluid py-5">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <h2 className="mb-3">Nosotros</h2>
            <p>
              Entendemos el negocio como una consecuencia de un eficiente
              servicio en el cual todos ganan.Nuestro servicio se basa en la
              confianza y profesionalismo.
            </p>
            <p>
              Inmobiliaria Gamalero fue fundada hace 4 años por Juan Pablo
              Gamalero, un profesional de la industria de bienes raíces en
              Tandil con más de 10 años de experiencia en el mercado
              inmobiliario residencial y comercial de la Ciudad.
            </p>
            <p>Diez años de experiencia avalan nuestro trabajo.</p>
          </div>
          <div className="col-12 col-md-6">
            <img className="w-100" src={portada} alt="Local de gamalero" />
          </div>
        </div>
        <div>
          <Equipo />
        </div>
      </section>
  );
};

export default Nosotros;
