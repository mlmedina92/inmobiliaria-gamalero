import portada from "../img/portada.jpg";
import Juan from "../img/juan.jpg";

const Nosotros = () => {
  return (
    <>
      <section id="nosotros" className="container-fluid py-5">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <h2 className="mb-3">Nosotros</h2>
            <p className="lead">
              Entendemos el negocio como{" "}
              <strong>una consecuencia de un eficiente servicio</strong> en el
              cual todos ganan. Nuestro servicio se basa en la{" "}
              <strong>confianza y profesionalismo</strong>.
            </p>
            <p className="lead">
              Inmobiliaria Gamalero fue fundada hace 4 años por Juan Pablo
              Gamalero, un profesional de la industria de bienes raíces en
              Tandil con más de 10 años de experiencia en el mercado
              inmobiliario residencial y comercial de la Ciudad.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img className="w-100" src={portada} alt="Local de gamalero" />
          </div>
        </div>
      </section>

      <section id="juan" className="container-fluid py-5">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-6">
            <img className="w-100" src={Juan} alt="Local de gamalero" />
          </div>
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <h2 className="mb-3">
              Juan Pablo Gamalero - Martillero y Corredor Público.
            </h2>

            <p className="lead">
              Juan Pablo Gamalero ha cursado sus estudios en el Colegio San
              José, desde el nivel inicial hasta el nivel polimodal graduándose como Bachiller Modalidad Humanidades y Ciencias Sociales.
              Posteriormente se graduó como Martillero y Corredor Público en la Facultad de Ciencias Jurídicas y Sociales de la Universidad FASTA.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nosotros;
