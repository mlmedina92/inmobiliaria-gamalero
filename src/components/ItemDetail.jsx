import React from "react";
import { useNavigate } from "react-router-dom";
import '../scss/itemDetail.scss';


const ItemDetail = ({ detail }) => {
  let history = useNavigate();// Hooks para manejar historial de navegacion

  return (
    <div className="container m-4">
      <div className="row g-0">
        <div className="col-md-7">
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
                      index == 0 ?
                       "active carousel-item text-center" 
                       : "carousel-item text-center"
                    }
                  >
                    <img
                      src={imagen}
                      className="d-inline-block"
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
        <div className="col-md-5 ps-md-3">
          <h1>{detail.titulo}</h1>
          <p>Detalles: {detail.detalles}</p>
          <p className="d-flex justify-content-between">
            <strong>Zona: {detail.zona}</strong>
            <strong>{detail.precio}</strong>
          </p>
          <a href="#" onClick={() => history(-1)} className="text-primary">
            Volver atrás
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
