import React, { useState } from 'react'

const BotonSumar = () => {
  const [rates, setRates] = useState(0);

  //cada vez q lede clik al boton rates va a incrementar uno su valor 
  const sumar = () =>{
    setRates(rates + 1);
  }

  return (  
      <>
        <button onClick={sumar}>Sumar</button>{rates} 

      </>
);
}

export default BotonSumar; 