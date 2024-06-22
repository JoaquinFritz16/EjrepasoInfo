import React from "react";
import { useState } from "react";
function ElementosListas() {
  const [textoej10, Settextoej10] = useState("");
  const [lista, Setlista] = useState([]);
  const handleText = (e) => {
    Settextoej10(e.target.value);
  };
  const agregarLista = () => {
    Setlista([...lista, textoej10]);
    Settextoej10("");
  };
  return (
    <div>
      <h2>Ingresar a una lista</h2>
      <input type="text" value={textoej10} onChange={handleText}></input>
      <button onClick={agregarLista}>Agregar</button>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default ElementosListas;
