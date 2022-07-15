import portada from '../img/portada.jpg';
import ItemListContainer from '../containers/ItemListContainer';
import Slider from '../components/Slider';

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
                images={mainSlider}
                />

            {/* le paso parametros que luego se leen como props.title y props.data */}
            <ItemListContainer
                greeting="Nuestras oportunidades"
                data="oportunidades"
                />
        </div>
    );
}

export default Home;