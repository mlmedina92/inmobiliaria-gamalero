import React from "react";
import Juan from "../img/juan.png";
const Equipo = () => {
  return (
    <div className="card my-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={Juan} className="img-fluid rounded-start" alt="Gamalero" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              Juan Pablo Gamalero - Martillero y Corredor Público.
            </h5>
            <p className="card-text"></p>
            <p className="card-text">
              <small className="text-muted">
                Juan Pablo Gamalero ha cursado sus estudios en el Colegio San
                José, desde el nivel inicial hasta el nivel polimodal
                graduándose como Bachiller Modalidad Humanidades y Ciencias
                Sociales. Posteriormente se graduó como Martillero y Corredor
                Publico en la Facultad de Ciencias Jurídicas y Sociales de la
                Universidad FASTA.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipo;
