import { render } from '@testing-library/react';
import React,{createContext,useEffect,useState} from 'react';

export const Idioma = createContext();

export const Provider = ({children}) => {
    const [lang,setLang] = useState(0)
    
 return (
     <Idioma.Provider value={[lang,setLang]} >{children}</Idioma.Provider>
 )
}