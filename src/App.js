import "./App.css";
import MiComponente from "./MiComponente";
import Botones from "./Botones";
import {Datos} from "./contexto/Contexto";

const App = () =>{
  return (
    <Datos>
      <div className="caja">
        <MiComponente />
        <MiComponente />
        <MiComponente />
      </div>
      <div><Botones /></div>
    </Datos>
  )
}

export default App;