import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import jsonData from "../data/data.json";


const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    setData(jsonData.filter((item) => { return item.categoria == categoriaId}))  
  }, [categoriaId]);

  return (
    <>
      <h2>{ greeting }</h2>
      <ItemList list={data} />
    </>
  );
};

export default ItemListContainer;
