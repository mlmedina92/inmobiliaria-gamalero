import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="card border rounded">
      <img className="card-img-top" src={item.imagenes} alt={item.zona} />
      <div className="card-body">
        <h3 className="card-title">{item.zona}</h3>
        <p className="card-text d-flex justify-content-between">
          <span>${item.precio}</span>
        </p>
      </div>
      <div className="card-footer p-3">
        <Link to={`/detalle/${item.id}`} className="btn btn-primary">Ver detalles</Link>
      </div>
    </div>
  );
};

export default Item;
