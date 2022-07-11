// funcion useEstate: almacenar un estado, guardar una inf


import React, {useEstate} from 'react';

const ItemCount = (initial, stock, onAdd) => {

    // inicializo el estado conn la variable initial q paso como props
    const [counter,setCounter] = useEstate(initial);

    // creo constantes para sumar y restar :

    const add = () =>{
        if(counter < stock){
            const aux = counter++;
            setCounter(aux);
        }
    }

    const substract = () =>{
        if(counter > initial){
            const aux = counter--;
            setCounter(aux);
        }
    }    


  return (
        <>
            <div>
                <div>
                    <button onClick={ substract }>-</button>
                    {/* counter va a ser un estado donde guardar los cambios q voy haciendo  */}
                    <p>{counter}</p> 
                    <button onClick={ add }>+</button>
                </div>
                <button onClick={ onAdd }>Agregar al carrito</button>

            </div>
        </>
  )
}

export default ItemCount;