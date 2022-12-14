import React from "react";
import './Busqueda.css';
import { DirectorioContext } from "../context/DirectorioProvider";

function Busqueda(props){
     
    const {textoBusqueda,setTextoBusqueda}=React.useContext(DirectorioContext);

    function onBusquedaChange(event){
        setTextoBusqueda(event.target.value);
    }
    return(
        <React.Fragment>
            <input className="motomami" onChange={onBusquedaChange} value={textoBusqueda}></input>
        </React.Fragment>
    );
}

export default Busqueda;