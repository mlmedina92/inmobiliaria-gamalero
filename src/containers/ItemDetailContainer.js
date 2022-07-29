import React, { useEffect, useState } from 'react'
import ItemDetail from '../components/ItemDetail';

let product = {
    "id": 30,
    "name": "Agua Con Gas 1,5 lts",
    "stock": 100,
    "cost": 140,
    "description": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.",
    "capacity": 1500,
    "image": [
      "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316114/BodegasDelSur/01_1619706181.webp"
    ],
    "sales": 0,
    "createdAt": "2022-04-05T11:13:17.170Z",
    "updatedAt": "2022-04-05T11:13:17.170Z",
    "categoryId": 9,
    "brandId": 95,
    "packingId": 1,
    "category": {
      "name": "Sin Alcohol",
      "id": 9
    },
    "brand": {
      "id": 95,
      "name": "Eco de los Andes"
    },
    "reviews": []
  };

const ItemDetailContainer = ({id}) => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise((resolve) => {
            setTimeout(() => {
                resolve(product);
            },3000);
        });

        getData.then((resp) => setData(resp));
    }, []);
    
  return (
    <>

{/* Button  modal */}
<button type="button" ClassName="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Ver detalles</button>

{/* Modal */}
<div ClassName="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div ClassName="modal-dialog">
    <div ClassName="modal-content">
      <div ClassName="modal-header">
        <h5 ClassName="modal-title" id="exampleModalLabel">Título</h5>
        <button type="button" ClassName="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div ClassName="modal-body">
            {/* si lo q esta antes de &&, osea si data no es un obj vacio ejecuta lo q sigue desp de && */}
            {Object.keys(data).length > 0 && <ItemDetail detail={data}/>}
      </div>
      <div ClassName="modal-footer">
        <button type="button" ClassName="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" ClassName="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>



   
    </>
  )
}

export default ItemDetailContainer