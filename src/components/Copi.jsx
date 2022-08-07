import React from "react";
import "../scss/copi.scss";
import { Link } from "react-router-dom";

const Copi = () => {
  return (
    <div className="container-fluid copyright px-2 py-3">
      <div className="container">
        <p className="text-center mb-0">
          Copyright © | Todos los derechos reservados 2022. inmobiliaria Juan
          Gamalero. Tandil |{" "}
          <Link
            to="https://www.linkedin.com/in/lis-medina
            "
            target="_blank"
            rel="noreferrer noopener"
            className="text-decoration-none"
          >
            Hecho por Lis Medina
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Copi;
