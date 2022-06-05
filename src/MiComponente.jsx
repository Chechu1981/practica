import React,{useContext} from 'react';
import { Contexto } from './contexto/Contexto';

function MiComponente () {
    const {color} =  useContext(Contexto);
    return <>
    <div className={color} ><h2>Caja 1</h2></div>
    </>;    

}

export default MiComponente;