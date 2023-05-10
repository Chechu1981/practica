import React from "react";
import Marta from "./images/marta.PNG";

function Foto({props}) {
    return <div className="contenedor-foto">
    <img src={Marta} alt={props.nombre} className="foto"/>
    <span className="nombre-foto">{props.nombre}</span>
    </div>
}

export default Foto;