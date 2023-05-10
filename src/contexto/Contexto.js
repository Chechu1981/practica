import React,{createContext,useState} from 'react';

export const Contexto = createContext();

export const Datos = ({children}) => {
    const [vLugar,setVLugar] = useState("lugar")
    const [vFoto,setVFoto] = useState("contenedor-foto")
 return (
     <Contexto.Provider value={[vLugar,setVLugar,vFoto,setVFoto]}>{children}</Contexto.Provider>
 )
}