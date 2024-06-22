import React from "react";
import { useState } from "react";
function OperacionMatematica() {
  const [numero1, Setnumero1] = useState(0);
  const [numero2, Setnumero2] = useState(0);
  const [operacion, Setoperacion] = useState("suma");
  const [resultado, Setresultado] = useState(0);
  const handleChangenumber1 = (e) => {
    Setnumero1(Number(e.target.value));
  };
  const handleChangenumber2 = (e) => {
    Setnumero2(Number(e.target.value));
  };
  const handleChangeOperacion = (e) => {
    Setoperacion(e.target.value);
  };
  const calcularResultado = (e) => {
    e.preventDefault();
    switch (operacion) {
      case "suma":
        Setresultado(numero1 + numero2);
        break;
      case "resta":
        Setresultado(numero1 - numero2);
        break;
      case "multiplicacion":
        Setresultado(numero1 * numero2);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <h1>Operaciones Matematicas</h1>
      <input
        type="number"
        value={numero1}
        onChange={handleChangenumber1}
      ></input>
      <input
        type="number"
        value={numero2}
        onChange={handleChangenumber2}
      ></input>
      <select value={operacion} onChange={handleChangeOperacion}>
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
        <option value="multiplicacion">Multiplicacion</option>
      </select>
      <button onClick={calcularResultado}>Calcular</button>
      <p>El resultado es: {resultado}</p>
    </div>
  );
}
export default OperacionMatematica;
