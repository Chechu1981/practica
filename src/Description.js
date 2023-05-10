import React from "react";


function Description({props}) {
  
const teacher = (e) =>{
  e.target.parentNode.nextSibling.className = "hide";
  e.target.parentNode.nextSibling.nextSibling.className = "lugar";
}

const site = (e) =>{
  e.target.parentNode.nextSibling.className = "contenedor-foto";
  e.target.parentNode.nextSibling.nextSibling.className = "hide";
}
  return <>
  <h1 className="titulo">{props.titulo}</h1>
  <h3 className="description">{props.texto}</h3>
  <div className="botones">
    <button type="button" className="button" onClick={teacher} >{props.boton1}</button>
    <button type="button" className="button" onClick={site} >{props.boton2}</button>
  </div>
  </>
}

export default Description;