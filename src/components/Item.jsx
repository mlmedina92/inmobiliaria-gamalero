import React from "react";
import { Link } from "react-router-dom";
import "../scss/item.scss";

const Item = ({ item }) => {
  return (
    <Link
      to={`/detalle/${item.id}`}
      className="text-decoration-none"
    >
      <div
        className="card border rounded"
      >
      <div className="card-img-col"
      style={{ backgroundImage: `url(${item.portada})` }} >

      </div>
        <div className="card-body d-flex flex-column justify-content-between">
          <p className="card-title">{item.titulo}</p>
          <p className="card-text d-flex justify-content-between">
            <strong className="price">{item.precio}</strong>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
