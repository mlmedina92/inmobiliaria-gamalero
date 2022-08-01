import React, {useEffect} from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
    // source reference: https://edupala.com/how-to-implement-react-form-with-validation-example/
    
    const {register, handleSubmit,formState: { errors },} = useForm({
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
            <section className="my-5">
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset>
                            <legend>React hook form:</legend>

                            <div className="formInput">
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

                            <div className="formInput">
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

                            <div className="formInput">
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

                            <div className="formInput">
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

                            <div className="formInput">
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
            </section>
        </>
    );
}