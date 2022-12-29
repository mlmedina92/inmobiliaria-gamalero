import React from "react";
import "../scss/itemDetail.scss";

const ItemDetail = ({ detail }) => {
  return (
    <>
      <div className="container py-4">
        <div className="row g-0">
          <div className="col-12 col-md-7 mb-4 mb-md-0">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel">
              <div className="carousel-inner">
                {detail.imagenes.map((imagen, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        index == 0
                          ? "active carousel-item text-center"
                          : "carousel-item text-center"
                      }>
                      <img
                        src={imagen}
                        className="d-inline-block img-fluid"
                        alt={detail.zona}
                        loading="lazy" />
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
                <i className="bi bi-arrow-left-circle-fill fs-4"></i>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <i className="bi bi-arrow-right-circle-fill fs-4"></i>
              </button>
            </div>
          </div>
          <div className="col-12 col-md-5 ps-md-3">

            <h1>{detail.titulo}</h1>
            <p>{detail.detalles}</p>
            <p className="d-flex justify-content-between">
              <strong>Zona: {detail.zona}</strong>
              <strong>{detail.precio}</strong>
            </p>
          </div>

        </div>

      </div>
    </>
  );
};

export default ItemDetail;
