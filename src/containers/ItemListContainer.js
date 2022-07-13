import { ItemListContainerData } from '../data/ItemListContainerData';
import Item from '../components/Item';
import React, {useState} from 'react';

// defino un componente y en home lo llamo y le paso valor por props
const ItemListContainer = (props) => {

    const [data, setData] = useState([]); // aca se van a guardar los datos obtenidos del servidor con promesa

    // promeesa que levnata los datos de los produtcos
    const dataPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ItemListContainerData);
            // reject("mensaje de error"); si no se encuentran los datos o falla algo
        }, 1000); // espera 1seg simulando el tiempo de respuesta del servidor
    });
     dataPromise.then(
         (response) => { // resolve y te da en el param response el array
             setData(response);
         },
         (response) => { // reject y responde el mensaje de error
             alert(`Se produjo un error al obtener los datos. Mensaje del error: ${response}`);
         });

    return(
        <>
            <h2>{props.greeting}</h2>
            <span>los datos se van a traer de : {props.data}</span>
            <ul>
            {/* hago un map del arreglo de ItemListContainerData */}
                {data.map((item, index) => {
                return (
                    <li key={index}>
                        {/* por c/ objeto literal item del arreglo se crea un compomnente Item y se le pasa por props el objeto entero  */}
                        <Item
                            item={item}
                        />
                    </li>
                );
                })}
            </ul>
        </>
    );
}

export default ItemListContainer;
