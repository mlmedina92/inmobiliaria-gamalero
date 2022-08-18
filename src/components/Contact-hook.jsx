import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  // source reference: https://edupala.com/how-to-implement-react-form-with-validation-example/

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      age: 20,
    },
  });

  useEffect(() => {
    console.log("rerender");
  });

  const onSubmit = (data, event) => {
    console.log(data);
    event.target.reset();
  };

  return (
    <>
      <section className="container mb-5">
        <h2 className="mb-3">Contacto</h2>
        <div className="row">
          <div className="col-12 col-sm-6 mb-3 mb-md-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset>
                <legend className="fs-6 mb-3">
                  Completá con tus datos y un asesor te contactará a la
                  brevedad.
                </legend>

                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input
                    className="form-control"
                    placeholder="Ingrese su nombre"
                    {...register("firstName", {
                      required: "This is required",
                    })}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    className="form-control"
                    placeholder="Ingrese su email"
                    type="email"
                    {...register("email", {
                      required: "This is required",
                      pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    })}
                  />
                  <span className="errorMsg">
                    {errors.email && "Please enter valid email address."}
                  </span>
                </div>

                <div className="mb-3">
                  <label className="form-label">Teléfono</label>
                  <input
                    className="form-control"
                    placeholder="Ingrese su teléfono"
                    type="tel"
                    {...register("tel", {
                      required: true,
                    })}
                  />
                </div>

                <div className="mb-3">
                    <label className="form-label">Hacenos tu consulta:</label>
                  <textarea className="form-control">
                  </textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </fieldset>
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
}
