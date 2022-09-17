import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {


  return (
    <div className="card border rounded">
      <img className="card-img-top img-fluid" src={item.portada} alt={item.titulo} loading="lazy"/>
      <div className="card-body">
        <h3 className="card-title">{item.titulo}</h3>
        <p className="card-text d-flex justify-content-between">
          <span>{item.precio}</span>
        </p>
      </div>
      <div className="card-footer p-3">
        <Link to={`/detalle/${item.id}`} className="btn btn-primary">Ver detalles</Link>
      </div>
    </div>
  );
};

export default Item;
