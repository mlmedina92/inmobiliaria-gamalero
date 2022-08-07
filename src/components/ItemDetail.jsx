import React from "react";

const ItemDetail = ({ detail }) => {
  return (
    <div className="card border rounded">
      <div className="row g-0">
        <div className="col-md-4">
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
                      index === 0 ? "active carousel-item" : "carousel-item"
                    }
                  >
                    <img
                      src={imagen}
                      className="d-block w-100"
                      alt={detail.zona}
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
        <div className="col-md-8">
          <div className="card-body">
            {/* <h4>{detail.brand.name}</h4> */}
            <h3 className="card-title">{detail.zona}</h3>
            {/* <p className='card-text'>{detail.description}</p> */}
            {/* <p className="card-text d-flex justify-content-between">
              <span>Stock: {detail.stock}</span>
              <span>${detail.cost}</span>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
