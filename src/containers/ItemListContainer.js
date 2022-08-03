import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
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

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const getData = new Promise((res) => {
      setTimeout(() => {
        res(inmuebles);
      }, 3000);
    });
    if (categoriaId) {
      getData.then((res) =>
        setData(res.filter((inmueble) => inmueble.category === categoriaId))
      );
    } else {
      getData.then((res) => setData(res));
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
