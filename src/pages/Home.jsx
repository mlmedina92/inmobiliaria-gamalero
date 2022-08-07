// import portada from '../img/portada.jpg';
import ItemListContainer from '../containers/ItemListContainer';
// import Slider from '../components/Slider';
import React from 'react';

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
        <div>
            <section className="mb-5" id="inicio">


            {/* <Slider */}
                {/* images={mainSlider} /> 
                <img className="img-fluid" src = {portada} alt="Gamalero Inmoboliaria" />
                */}
            </section>
            
            <section id='oportunidades' className="mb-5 container-fluid">
                {/* llamo al componente ItemListContainer y le paso parametros que luego se leen como props.greeting y props.dataSrc.  */}
                <ItemListContainer
                    greeting="Nuestras oportunidades"
                    dataSrc="oportunidades"/>
            </section>
        </div>
    );
}

export default Home;