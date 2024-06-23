import React from "react";

function Item({item}){
    const{nombre, categoria, cantidad} = item;
    return(
        <div>
            <h2>{nombre}</h2>
            <p>Categoria: {categoria}</p>
            <p>Cantidad: {cantidad}</p>
        </div>
    );
}
export default Item;