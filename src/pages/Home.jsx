import portada from '../img/portada.jpg';
import ItemListContainer from '../containers/ItemListContainer';
import Slider from '../components/Slider';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import React from 'react';

const Home = () => {

    const mainSlider = [
        {
            "title": "slider 1",
            "src": portada
        },
        {
            "title": "slider 2",
            "src": portada
        },
        {
            "title": "slider 3",
            "src": portada
        }
    ];

    return (
        <div>
            <Slider
                images={mainSlider} />

            <ItemDetailContainer />

            {/* llamo al componente ItemListContainer y le paso parametros que luego se leen como props.greeting y props.dataSrc.  */}
            <ItemListContainer
                greeting="Nuestras oportunidades"
                dataSrc="oportunidades"/>
        </div>
    );
}

export default Home;