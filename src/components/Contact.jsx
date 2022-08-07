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
        <h2 class="mb-3">Contacto</h2>
        <div className="row">
          <div class="col-12 col-sm-6 mb-3 mb-md-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset>
                <legend className="fs-6 mb-3">
                  Completá con tus datos y un asesor te contactará a la
                  brevedad.
                </legend>

                <div className="formInput mb-3">
                  <label>Name</label>
                  <input
                    {...register("firstName", {
                      required: "This is required",
                      minLength: {
                        value: 5,
                        message: "Please enter more than 4 character",
                      },
                    })}
                  />
                  <span className="errorMsg">{errors.firstName?.message}</span>
                </div>

                <div className="formInput mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "This is required",
                      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    })}
                  />
                  <span className="errorMsg">
                    {errors.email && "Please enter valid email address."}
                  </span>
                </div>

                <div className="formInput mb-3">
                  <label>Age</label>
                  <input
                    type="number"
                    {...register("age", {
                      required: true,
                      pattern: /^[0-9]*$/,
                    })}
                  />

                  <span className="errorMsg">
                    {errors.age && "Please enter age and valid number."}
                  </span>
                </div>

                <div className="formInput mb-3">
                  <label>password</label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/,
                    })}
                  />
                  <span className="errorMsg">
                    {errors.password &&
                      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!"}
                  </span>
                </div>

                <div className="formInput mb-3">
                  <label>Gender</label>
                  <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                  </select>
                </div>
                <button type="submit">Submit</button>
              </fieldset>
            </form>
          </div>

          <iframe
            className="col-12 col-sm-6"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.728712483118!2d-59.12734248509393!3d-37.32525331401972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911feb12d6f2a7%3A0x7c7782182607d86f!2sBelgrano%201271%2C%20B7001%20Tandil%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1659908266511!5m2!1ses-419!2sar" 
            height="450"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="mapa"
          ></iframe>
        </div>
      </section>
    </>
  );
}
