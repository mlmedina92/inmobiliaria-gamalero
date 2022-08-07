import React, { useState, useEffect } from "react";
import { getFirestore , collection , getDocs, query, where } from "firebase/firestore";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'propiedades');
      if (categoriaId) {
        const queryFillter = query(queryCollection , where('categoria', '==' , categoriaId))
      getDocs(queryFillter)
        .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
      } else {
        getDocs(queryCollection)
          .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
        }
  }, [categoriaId]);

  return (
    <>
      <h2>{ greeting }</h2>
      <ItemList list={data} />
    </>
  );
};

export default ItemListContainer;
