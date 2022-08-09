import React from 'react';
import  '../scss/servicios.scss';

const Servicios = () => {
  return (
       
            <div className='col-6 mb-4 px-1 contenedorServicios'>
                <h2 className="mt-3 nuestrosServicios">Nuestros servicios</h2>
                    <p className="d-block mb-3 ss">Alquileres</p> 
                    <p className="d-block mb-3 ss">Ventas</p>    
                    <p className="d-block mb-3 ss">Tasaciones</p>  
                    <p className="d-block mb-3 ss">Administraciones</p>                      
        </div>
  )
}

export default Servicios