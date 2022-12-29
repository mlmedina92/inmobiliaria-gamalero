import portada from "../img/portada.jpg";
import Juan from "../img/juan.jpg";

const Nosotros = () => {
  return (
    <>
      <section id="nosotros" className="container py-3 py-md-5">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <h4 className="mb-3 text-center">Nosotros</h4>
            <p>
              Entendemos el negocio como <strong>una consecuencia de un eficiente servicio</strong> en el
              cual todos ganan. Nuestro servicio se basa en la{" "}
              <strong>confianza y profesionalismo</strong>.
            </p>
            <p>Inmobiliaria Gamalero fue fundada hace 4 años por Juan Pablo
              Gamalero, un profesional de la industria de bienes raíces en
              Tandil con más de 10 años de experiencia en el mercado
              inmobiliario residencial y comercial de la Ciudad.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              className="img-fluid" src={portada}  alt="Local de gamalero"
              loading="lazy" height="" width="" />
          </div>
        </div>
      </section>

      <section id="juan" className="container py-3 py-md-5">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-3 mb-3 mb-md-0 text-center">
            <img
              className="img-fluid"
              src={Juan}
              alt="Juan"
              loading="lazy"
              height="134"
              width="134"
            />
          </div>
          <div className="col-12 col-md-9 mb-3 mb-md-0">
            <h4 className="mb-3 text-center">
              Juan Pablo Gamalero - Martillero y Corredor Público.
            </h4>

            <p>
              Juan Pablo Gamalero ha cursado sus estudios en el Colegio San
              José, desde el nivel inicial hasta el nivel polimodal graduándose
              como Bachiller Modalidad Humanidades y Ciencias Sociales.
              Posteriormente se graduó como Martillero y Corredor Público en la
              Facultad de Ciencias Jurídicas y Sociales de la Universidad FASTA.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nosotros;
