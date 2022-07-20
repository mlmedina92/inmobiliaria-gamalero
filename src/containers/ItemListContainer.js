import React, {useState, useEffect} from 'react';
import ItemList from '../components/ItemList';

// defino un componente y en home lo llamo y le paso valor por props
const ItemListContainer = (props) => {

    const [data, setData] = useState([]); // aca se van a guardar los datos obtenidos del servidor con promesa

    useEffect(() => {
        //let url = `../data/${props.dataSrc}.json`;
        let url = 'https://bodegasdelsur.herokuapp.com/products';
        fetch(url)
            .then((response) => response.json())
            .then((dataJson) => setData(dataJson.products))
            .catch((error) => alert(error));
    }, []);
    // defino la promeesa que levnata los datos de los produtcos
   /*  const dataPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(`../data/${props.dataSrc}.json`)
                .then( // si se encontro el json
                    (resp) => {
                        if(resp.ok) {
                            debugger;
                            resp.then(function(dataJson) {
                                debugger;
                                resolve(dataJson); //resuelvo la promesa enviando los datos levantados con el fetch
                              });
                        }
                    }
                ).catch( // si no se encontro el json
                    (error) => {
                        reject(error); // Rechaza la prom pq no se encontro el archivo
                    }
                )
        }, 2000); // espera 2segs simulando el tiempo de respuesta del servidor
    });
    dataPromise.then(//aca llamo a ala promesa
         (responseResolve) => { // resolve y te da en el param response el array
             setData(responseResolve);//le asigno a data el arreglo levantado del json 
         },
         (responseReject) => { // reject y responde el mensaje de error
             alert(`Se produjo un error al obtener los datos. Mensaje del error: ${responseReject}`);
         }); */

    return(
        <>
            <h2>{props.greeting}</h2>
            <span>los datos se van a traer de : {props.dataSrc}</span>
            <ItemList list={data} />
        </>
    );
}

export default ItemListContainer;
