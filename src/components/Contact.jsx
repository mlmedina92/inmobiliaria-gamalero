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
    <>
      <section className="container mb-5">
        <h1 className="my-3">Contacto</h1>
        <div className="row">
          <div className="col-12 col-sm-6 mb-3 mb-md-0">
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
          </div>

          <iframe
            className="col-12 col-sm-6"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.728712483118!2d-59.12734248509393!3d-37.32525331401972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911feb12d6f2a7%3A0x7c7782182607d86f!2sBelgrano%201271%2C%20B7001%20Tandil%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1659908266511!5m2!1ses-419!2sar"
            height="450"
            // style="border:0;"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="mapa"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
