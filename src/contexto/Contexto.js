import React,{createContext,useState} from 'react';

export const Contexto = createContext();

export const Datos = ({children}) => {
    const [color, setDatos] = useState("cajas white");
 return (
     <Contexto.Provider value={{color,setDatos}}>{children}</Contexto.Provider>
 )
}