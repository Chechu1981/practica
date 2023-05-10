import React,{useContext} from 'react';
import spain from './images/spain.jpg';
import france from './images/francia.png';
import uk from './images/uk.png';
import {Idioma} from './contexto/Idioma';

function Banderas() {
    const [lang,setLang] = useContext(Idioma);
    return <>
        <div className="banderas">
            <img src={spain} onClick={() => setLang(0)} />
            <img src={france} onClick={() => setLang(2)} />
            <img src={uk} onClick={() => setLang(1)} />
        </div>;
    </>
}

export default Banderas;