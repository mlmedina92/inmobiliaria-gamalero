import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";

const inmuebles = [
    {
    id: 1,
    img: "http://gpi-blog.s3.amazonaws.com/wp-content/uploads/2014/03/casa.jpg",
    category: "casas",
    title: "casa",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/originals/48/74/ab/4874ab26bb66155535855421184a5247.jpg",
    category: "depto-1a",
    title: "depto1",
  },
  {
    id: 3,
    img: "http://gpi-blog.s3.amazonaws.com/wp-content/uploads/2014/03/casa.jpg",
    category: "casas",
    title: "casa",
  },
];

const ItemDetailContainer = ({ greeting }) => {
  const [data, setData] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(inmuebles);
      }, 3000);
    });

    getData.then((res) =>
      setData(res.find((inmueble) => inmueble.id === parseInt(detalleId)))
    );
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
