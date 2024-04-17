// Llamando a React
import React from "react";
// Importando los estilos
import "../css/Boton.css";

// Componente
function Boton({ texto, esBotonClic, manejarClic }) {
  return (
    // Usando el operador ternario
    <button
      className={esBotonClic ? "boton-clic" : "boton-reiniciar"}
      onClick={manejarClic}
    >
      {texto}
    </button>
  );
}

// Exportando para poder usar
export default Boton;
