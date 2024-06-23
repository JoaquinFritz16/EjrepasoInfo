import React from "react";
import {useState} from "react";
function DeleteListaElementos(){
    const elementosLista = ['hamburguesa','pizza','empanadas'];
    const [lista, Setlista] = useState(elementosLista);
    const handleDelete=(index)=>{
        const nuevaLista = lista.filter((item,i)=> i !== index);
        Setlista(nuevaLista);
    };
    return (
        <div>
            <h2>Lista de elementos</h2>
            <ul>
                {lista.map((item,index)=>(
                    <li key={index}>
                        {item}
                        <button onClick={()=>handleDelete(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default DeleteListaElementos;