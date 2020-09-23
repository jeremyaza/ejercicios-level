import React, { useState } from "react";
import "./../App.css";
import "./../index.css";
import { useForm } from "react-hook-form";
import Message from "./Message";

function Form() {
  const { register, errors, handleSubmit } = useForm();
  const [isOpen, setIsOpen] = useState(false);

  /*const [sendMsg, setMsg] = useState({
    msg: "",
    emoji: "",
    title: "",
  });*/

  const [title, setTitle] = useState("");
  const [emoji, setEmoji] = useState("");
  const [msg, setMsg] = useState("");

  const changeTitle = (title) => {
    setTitle(title);
  };
  const changeEmoji = (emoji) => {
    setEmoji(emoji);
  };
  const changeMsg = (msg) => {
    setMsg(msg);
  };

  /*const changeContentModal = (text) => {
    setMsg(text);
  };*/

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();

    if (data.kilometros >= 4) {
      //console.log("Felicidades");
      changeTitle("¡Felicidades!");
      changeEmoji("🎊");
      changeMsg(data.name + " " + data.correo);
      setIsOpen(!isOpen);
    } else {
      //console.log("Sigue caminando");
      changeTitle("Debes de caminar más");
      changeEmoji("💪");
      changeMsg(data.name + " " + data.correo);
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
                <p className="ctnt_modal">{msg}</p>
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
