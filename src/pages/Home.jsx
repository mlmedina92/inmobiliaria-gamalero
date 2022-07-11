import portada from '../img/portada.jpg';
import ItemListContainer from '../components/ItemListContainer';

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
            <section id="nosotros" className="mb-5">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-md-6 mb-3 mb-md-0">
                            <h2 className="mb-3">Nosotros</h2>
                            <p>Entendemos el negocio como una consecuencia de un eficiente servicio en el cual todos ganan.Nuestro servicio se basa en la confianza y profesionalismo.</p>
                            <p>Entendemos el negocio como una consecuencia de un eficiente servicio en el cual todos ganan.Nuestro servicio se basa en la confianza y profesionalismo.</p>
                            <p>Diez años de experiencia avalan nuestro trabajo.</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <img className="w-100" src={portada} alt="Local de Nimax"/>
                        </div>
                    </div>
                </div>
            </section>
            {/* le paso parametros que luego se leen como props.title y props.data */}
            <ItemListContainer 
                title="Nuestras oportunidades"
                data="oportunidades" />
        </div>
    );
}

export default Home;