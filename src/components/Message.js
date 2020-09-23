import React from "react";
import "./../index.css";

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
