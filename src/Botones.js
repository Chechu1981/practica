import React from 'react';
import {useContext} from 'react';
import {Contexto} from "./contexto/Contexto";

function Botones () {
    const{setDatos} = useContext(Contexto);
    return <div className="caja_botones">
        <div className="botones" onClick={()=>{setDatos('cajas blue')}}></div>
        <div className="botones" onClick={()=>{setDatos('cajas yellow')}}></div>
        <div className="botones" onClick={()=>{setDatos('cajas green')}}></div>
        <div className="botones" onClick={()=>{setDatos('cajas red')}}></div>
    </div>;    
}

export default Botones;