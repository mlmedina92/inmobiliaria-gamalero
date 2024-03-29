import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import jsonData from "../data/data.json";
import CustomLoader from "../components/CustomLoader";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    setData(jsonData.find((item) => { return item.id == detalleId}))
  }, [detalleId]);


  if(Object.keys(data).length === 0) {//retorna lista de keys de un obj. 
    return (
      <>
        <CustomLoader />
      </>
    );
  } else {
    return (
    <>
      {/* si lo q esta antes de &&, osea si data no es un obj vacio ejecuta lo q sigue desp de && */}
      {Object.keys(data).length > 0 && <ItemDetail detail={data} />}
    </>
   );
  }
};

export default ItemDetailContainer;
