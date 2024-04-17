import "./App.css";
// Importando una imagen
import freeCodeCampLogo from "./imgs/logo.svg";
// Importando el componente boton
import Boton from "./components/Boton";
// Agregando el contador
import Contador from "./components/Contador.jsx";
// Usando useState
import { useState } from "react";

// Renderizado de la aplicacion web
function App() {
  // HOOKS
  // useState
  const [numClics, setNumClics] = useState(0);

  // Funcion que maneja el contador
  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  // Funcion que maneja el reestablecimiento del numero
  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          // Llamando a la imagen
          src={freeCodeCampLogo}
          alt="logo freecodecamp"
        />
      </div>
      <div className="contenedor-principal">

        <Contador 
        contador={numClics} />

        <Boton 
        texto="Clic" 
        esBotonClic={true} 
        // Llamando a la funcion que aumenta los clics
        manejarClic={manejarClic} />

        <Boton
        texto="Reiniciar"
        esBotonClic={false}
        // Llamando a la funcion que reestablece los clics
        manejarClic={reiniciarContador}
        />

      </div>
    </div>
  );
}

export default App;
