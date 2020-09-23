import React from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <h1 className="title">Kilometros</h1>
      <p className="description">Déjanos conocer cuantos kilometros has recorrido esta semana</p>
      <div className="register_data">
        <Form />
      </div>
    </div>
  );
}

export default App;
