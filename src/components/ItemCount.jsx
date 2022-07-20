// funcion useEstate: almacenar un estado, guardar una info
import React, {useState} from 'react';

const ItemCount = ({initial, stock, onAddCallback}) => {//esto es desestructuracion de objetos son las props

    // inicializo el estado conn la variable initial q paso como props
    const [quantity, setQuantity] = useState(initial);

    // creo constantes para sumar y restar :

    const add = () =>{
        if(quantity < stock){
            const aux = quantity+1;
            setQuantity(aux);
        }else{
            alert("No hay stock");
        }
    }

    const substract = () =>{
        if(quantity > initial){
            const aux = quantity-1;
            setQuantity(aux);
        }else{
            alert(`La compra mínima es de ${1}`);
        }
    }

  return (
        <>
            <div className="container p-0 text-center">
                <div className="row align-items-center pb-3 m-0">
                    <button onClick={substract} type="button" className="btn btn-primary col-4">-</button>
                    {/* quantity va a ser un estado donde guardar los cambios q voy haciendo  */}
                    <p className="col-4 m-0">{quantity}</p>
                    <button onClick={add} type="button" className="btn btn-primary col-4">+</button>
                </div>
                <div className="row m-0">
                    <button onClick={() => onAddCallback(quantity)} type="button" className="btn btn-primary">Agregar al carrito</button>
                </div>
            </div>
        </>
  )
}

export default ItemCount;
