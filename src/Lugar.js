import React from "react";

function Lugar({props}) {
  return <>
  <div className="hide">
        <h2>{props.boton2}</h2>
        {props.direccion}
  </div>
  </>
}

export default Lugar;