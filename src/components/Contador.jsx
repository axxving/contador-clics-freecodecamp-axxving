// Importando React 
import React from "react";

// Importando los estilos del componente
import "../css/Contador.css"

// Componente en si
function Contador({ contador }) {
  return <div className="contador">{contador}</div>;
}

// Exportando para poder usar o llamar al componente 
export default Contador;
