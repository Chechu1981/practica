import React,{ useContext, useEffect, useState } from "react";
import "./App.css";
import Banderas from "./Banderas";
import Description from "./Description";
import Foto from "./Foto";
import Lugar from "./Lugar";
import {Provider,Idioma} from "./contexto/Idioma";

const App = () =>{
  const valores=[{
    titulo:"Aprenda React intensivamente con una profesora nativa",
    texto:"2 semanas. Una profesora sólo para ti (12h/día)",
    boton1:"Profesora",
    foto:"marta.PNG",
    nombre:"Marta Ríos",
    boton2:"Lugar",
    direccion:"48 St Laurent Boulevard, Montreal, Canadá"
},{
    titulo:"Learn React intensively with a native teacher",
    texto:"2 weeks. A teacher just for you (12h/day)",
    boton1:"Professor",
    nombre:"Grace Trembley",
    foto:"grace.PNG",
    boton2:"Lotacion",
    direccion:"65 Stonehaven, Ottawa, Canadá"
},{
    titulo:"Apprenez React intensément avec un professeur natif",
    texto:"2 semaines. Un professeur rien que pour vous (12h/jour)",
    boton1:"Professeur",
    nombre:"Aimée Mathieu",
    foto:"aimee.PNG",
    boton2:"Emplacement",
    direccion:"2700 Rue Jean-Perrin #190, Québec, Canadá"
},{
    idioma:0
}]

const [texto,setTexto] = useState(valores[2]);
  return (
  <Provider>
    <Banderas />
    <Description props={texto} />
    <Foto props={texto} />
    <Lugar props={texto} />
  </Provider>
  )
}

export default App;