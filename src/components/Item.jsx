import React from "react";
import { Link } from "react-router-dom";
import '../scss/item.scss';



const Item = ({ item }) => {

  return (
    <div className="card border rounded">
      <img className="card-img-top img-fluid" src={item.portada} alt={item.titulo} loading="lazy"/>
      <div className="card-body d-flex flex-column justify-content-between">
        <p className="card-title">{item.titulo}</p>
        <p className="card-text d-flex justify-content-between">
          <strong className="price">{item.precio}</strong>
          <Link to={`/detalle/${item.id}`} className="text-primary text-decoration-none"><i className="bi bi-eye"></i> Ver</Link>
        </p>
      </div>
    </div>
  );
};

export default Item;
