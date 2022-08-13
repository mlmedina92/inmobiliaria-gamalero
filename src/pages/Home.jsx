// import Slider from '../components/Slider';
import React from "react";
import  '../scss/home.scss';
import FeaturedItemListContainer from "../containers/FeaturedItemListContainer";

const Home = () => {
  // const mainSlider = [
  //     {
  //         "title": "slider 1",
  //         "src": portada
  //     },
  //     {
  //         "title": "slider 2",
  //         "src": portada
  //     },
  //     {
  //         "title": "slider 3",
  //         "src": portada
  //     }
  // ];

  return (
    <>
      <section className="mb-5 inicio">
        {/* <Slider */}
        {/* images={mainSlider} /> 
                <img className="img-fluid" src = {portada} alt="Gamalero Inmoboliaria" />
                */}
      </section>

      <section id="oportunidades" className="mb-5 container-fluid">
        {/* llamo al componente ItemListContainer y le paso parametros que luego se leen como props.greeting y props.dataSrc.  */}
        <FeaturedItemListContainer greeting="Nuestras oportunidades" />
      </section>
      <section className="servicios container-fluid">
        <div className="nuestrosServicios">
          <h2>Nuestros servicios</h2>
          <p className="d-block mb-3 ss">Alquileres</p>
          <p className="d-block mb-3 ss">Ventas</p>
          <p className="d-block mb-3 ss">Tasaciones</p>
          <p className="d-block mb-3 ss">Administraciones</p>
        </div>
      </section>
    </>
  );
};

export default Home;
