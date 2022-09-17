import React from "react";
import { useNavigate } from "react-router-dom";


const ItemDetail = ({ detail }) => {
  let history = useNavigate();// Hooks para manejar historial de navegacion

  return (
    <div className="card border rounded">
      <div className="row g-0">
        <div className="col-md-6">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {detail.imagenes.map((imagen, index) => {
                return (
                  <div
                    key={index}
                    className={
                      index == 0 ? "active carousel-item" : "carousel-item"
                    }
                  >
                    <img
                      src={imagen}
                      className="d-block w-100 "
                      alt={detail.zona}
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h3 className="card-title">{detail.titulo}</h3>
            <p className="card-text">Detalles: {detail.detalles}</p>
            <p className="card-text d-flex justify-content-between">
              <strong>Zona: {detail.zona}</strong>
              <strong>{detail.precio}</strong>
              <button onClick={() => history(-1)} className="rounded-pill btn btn-primary col-3">
            Volver atrás
          </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
