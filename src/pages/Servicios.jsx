import React from 'react';
import llave from '../img/llave.jpg';
import  '../scss/servicios.scss';

const Servicios = () => {
  return (
    <section className="servicios mb-5 container-fuid">
        <div className="row">
            <div className='col-6'>
                <img className="img-fluid" src = {llave} alt="Gamalero Inmoboliaria" />
            </div>
            <div className='col-6'>
                <h2>Nuestros servicios</h2>
                <ul className="list-unstyled">
                    <li>Alquileres</li> 
                    <li>Ventas</li>    
                    <li>Tasaciones</li>  
                    <li>Administraciones</li>                      
                </ul>    
            </div> 
        </div>
</section>  )
}

export default Servicios