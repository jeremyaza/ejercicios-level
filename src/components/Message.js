import "./../index.css";
import React from "react";

const Message = (props) => {
  return (
    <div className="content_modal">
      <div className="modal">
        <div className="header">{props.emoji}</div>
        <div className="content">{props.content}</div>
        <div className="actions"><button onClick={props.handleClose}>Aceptar</button></div>
      </div>
    </div>
  );
};

export default Message;
