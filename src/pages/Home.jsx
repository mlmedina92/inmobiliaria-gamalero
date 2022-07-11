import portada from '../img/portada.jpg';
import ItemListContainer from '../containers/ItemListContainer';

const Home = () => {
    return (
        <div>
            <section id="banner" className="container-xxl mb-5">
                {/* Banner */}
                <div id="bannerPrincipal" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img src={portada} className="d-block w-100" alt="pileta fibra de vidrio"/>
                        </div>
                        <div className="carousel-item active">
                            <img src={portada} className="d-block w-100" alt="pileta fibra de vidrio"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#bannerPrincipal"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#bannerPrincipal"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                </div>
            </section>
            {/* le paso parametros que luego se leen como props.title y props.data */}
            <ItemListContainer 
                greeting="Nuestras oportunidades"
                data="oportunidades" />
        </div>
    );
}

export default Home;