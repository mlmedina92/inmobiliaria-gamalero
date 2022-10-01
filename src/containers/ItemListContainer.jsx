import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import jsonData from "../data/data.json";
import CustomLoader from "../components/CustomLoader";


const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    setData(jsonData.filter((item) => { return item.categoria == categoriaId}))  
  }, [categoriaId]);
  if(data.length == 0) {
    return (
      <>
        <CustomLoader />
      </>
    );
  } else {
    return (
    <>
      <div className="container">
        <h1 className="my-3">{ greeting }</h1>
        <ItemList list={data} />
      </div>
    </>
   );
  }
};
export default ItemListContainer;
