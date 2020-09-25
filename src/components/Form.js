import React, { useState } from "react";
import "./../App.css";
import "./../index.css";
import { useForm } from "react-hook-form";
import Message from "./Message";

function Form() {
  //Validate form
  const { register, errors, handleSubmit } = useForm();

  //Modal
  const [isOpen, setIsOpen] = useState(false);

  //Change data in modal
  const [title, setTitle] = useState("");
  const [emoji, setEmoji] = useState("");
  const [msg, setMsg] = useState({
    name: "",
    email: "",
  });

  const changeTitle = (title) => {
    setTitle(title);
  };
  const changeEmoji = (emoji) => {
    setEmoji(emoji);
  };
  const changeMsg = (_name, _email) => {
    setMsg({ name: _name, email: _email });
  };

  //Data of the form
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();

    if (data.kilometros >= 4) {
      changeTitle("¡Felicidades!");
      changeEmoji("🎊");
      changeMsg(data.name, data.correo);
      setIsOpen(!isOpen);
    } else {
      changeTitle("Debes de caminar más");
      changeEmoji("💪");
      changeMsg(data.name, data.correo);
      setIsOpen(!isOpen);
    }
  };

  const toggleMessage = () => {
    setIsOpen(!isOpen);
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
              maxLength: {
                value: 20,
                message: "No más de 20 carácteres",
              },
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
              maxLength: {
                value: 30,
                message: "No más de 30 carácteres",
              },
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
            min="0"
            ref={register({
              required: {
                value: true,
                message: "Campo requerido",
              },
              max: {
                value: 20,
                message: "No más de 20km",
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
        {isOpen && (
          <Message
            emoji={<span>{emoji}</span>}
            content={
              <>
                <h2 className="title_modal">{title}</h2>
                <br></br>
                <p className="ctnt_modal">{msg.name}</p>
                <p className="ctnt_modal">{msg.email}</p>
              </>
            }
            handleClose={toggleMessage}
          />
        )}
      </form>
    </div>
  );
}

export default Form;
