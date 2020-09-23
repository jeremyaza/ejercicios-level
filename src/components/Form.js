import React from "react";
import "./../App.css";
import "./../index.css";
import { useForm } from "react-hook-form";

function Form() {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();

    if (data.kilometros >= 4) {
      console.log("Felicidades");
    } else {
      console.log("Sigue caminando");
    }
  };

  return (
    <div id="content_form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="content_input">
          <label>Nombre</label>
          <input
            className="register"
            type="text"
            name="name"
            placeholder="Ingrese su nombre"
            ref={register({
              required: { value: true, message: "Campo requerido" },
            })}
          />
          <span className="errors">{errors?.name?.message}</span>
        </div>
        <div className="content_input">
          <label>Correo</label>
          <input
            className="register"
            type="email"
            name="correo"
            placeholder="Ingrese su correo"
            ref={register({
              required: { value: true, message: "Campo requerido" },
            })}
          />
          <span className="errors">{errors?.correo?.message}</span>
        </div>
        <div className="content_input">
          <label>Kilometros</label>
          <input
            className="register"
            type="number"
            name="kilometros"
            placeholder="Ingrese sus kilometros"
            ref={register({
              required: {
                value: true,
                message: "Campo requerido",
              },
              max: {
                value: 20,
                message: "No más de 100km",
              },
              min: {
                value: 0,
                message: "Mínimo 1 km",
              },
            })}
          />
          <span className="errors">{errors?.kilometros?.message}</span>
        </div>
        <input type="submit" value="Verificar" id="send" />
      </form>
    </div>
  );
}

export default Form;
