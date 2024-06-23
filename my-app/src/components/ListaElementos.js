import React, { useState } from "react";
function ListaElementos() {
  const [inputTexto, setInputTexto] = useState("");
  const [lista, setLista] = useState([]);

  const handleInputChange = (e) => {
    setInputTexto(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLista([...lista, inputTexto]);
    setInputTexto("");
  };

  return (
    <div>
      <h2>Agregar elementos a la lista</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputTexto} onChange={handleInputChange} />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaElementos;
