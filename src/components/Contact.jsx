import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const formSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "inmo_gama",
        "contacto_inmo-gamalero",
        form.current,
        "_foHohnEONQliAi_t"
      )
      .then(
        (result) => {
          alert("Mensaje enviado con éxito");
        },
        (error) => {
          alert("Hubo un error: " + error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={formSubmit}>
      <legend className="fs-6 mb-3">
        Completá con tus datos y un asesor te contactará a la brevedad.
      </legend>
      <div className="mb-3">
        <label className="form-label" for="name">
          Nombre:
        </label>
        <input
          className="form-control required"
          type="text"
          id="name"
          name="name"
          placeholder="Ingrese su nombre"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label" for="tel">
          Teléfono:
        </label>
        <input
          className="form-control required"
          type="tel"
          id="tel"
          name="tel"
          placeholder="Ingrese su teléfono"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label" for="email">
          E-mail:
        </label>
        <input
          className="form-control"
          type="email"
          id="email"
          name="email"
          required
          placeholder="Ingrese su e-mail"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" for="message">
          Hacenos tu consulta:
        </label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          rows="4"
          cols="50"
        ></textarea>
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Contact;
