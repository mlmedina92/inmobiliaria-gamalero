// funcion useEstate: almacenar un estado, guardar una inf


import React, {useState} from 'react';

const ItemCount = (initial, stock, onAdd) => {

    // inicializo el estado conn la variable initial q paso como props
    const [quantity,setQuantity] = useState(initial)

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
            alert(`La compra mínima es de ${initial}`);
        }
    }    

  return (
        <>
            <div>
                <div>
                    <button onClick={substract}>-</button>
                    {/* quantity va a ser un estado donde guardar los cambios q voy haciendo  */}
                    <p>{quantity}</p> 
                    <button onClick={add}>+</button>
                </div>
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>
        </>
  )
}

export default ItemCount;