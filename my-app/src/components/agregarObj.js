import React from "react";
import {useState} from "react";
function AgregarObj() {
  const [listaItems, setListaItems] = useState([]);
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleCantidadChange = (e) => {
    setCantidad(e.target.value);
  };

  const handleCategoriaChange = (e) => {
    setCategoria(e.target.value);
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newItem={
        nombre: nombre,
        cantidad: cantidad,
        categoria: categoria
    };
    setListaItems([...listaItems, newItem]);
    setNombre("");
    setCantidad("");
    setCategoria("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={handleNombreChange}></input>
        <br></br>
        <label>Cantidad:</label>
        <input
          type="number"
          value={cantidad}
          onChange={handleCantidadChange}
        ></input>
        <br></br>
        <label>Categoria:</label>
        <select value={categoria} onChange={handleCategoriaChange}>
          <option value="">Selecciona una categoría</option>
          <option value="Lacteo">Lácteo</option>
          <option value="Despensa">Despensa</option>
          <option value="Higiene">Higiene</option>
          <option value="Bebida">Bebida</option>
          <option value="Limpieza">Limpieza</option>
          <option value="Otro">Otro</option>
        </select>
        <br></br>
        <button type="submit">Agregar</button>
      </form>
      <h2>Lista de Items</h2>
      <ul>
        {listaItems.map((item, index) => (
          <li key={index}>
            Nombre: {item.nombre}, Cantidad: {item.cantidad}, Categoria:{" "}
            {item.categoria}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default AgregarObj;
