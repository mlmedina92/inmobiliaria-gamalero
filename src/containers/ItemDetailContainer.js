import React, { useEffect, useState } from "react";
import {getFirestore , doc, getDoc} from 'firebase/firestore';
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ greeting }) => {
  const [data, setData] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'propiedades', detalleId);
    getDoc(queryDoc)
      .then(res => setData({id: res.id, ...res.data()}))
  }, [detalleId]);

  return (
    <>
      <h2>{ greeting }</h2>
      {/* si lo q esta antes de &&, osea si data no es un obj vacio ejecuta lo q sigue desp de && */}
      {Object.keys(data).length > 0 && <ItemDetail detail={data} />}
    </>
  );
};

export default ItemDetailContainer;
