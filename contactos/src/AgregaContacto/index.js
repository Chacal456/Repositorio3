import React from "react";
import './AgregaContacto.css';
import {DirectorioContext} from '../context/DirectorioProvider';
function menu(){
    document.getElementById("open").style.display= "block";
}

function AgregaContacto() {
    const {setmodal,guardarContacto}=React.useContext(DirectorioContext)
    const [contact,setContact]=React.useState({
        nombre:'',
        correo:'',
        telefono:''
    })


    function onchangeNombre(event){
        let contactosTemporal=contact;
        contactosTemporal.nombre=event.target.value;
        setContact(contactosTemporal)
    }

    function onchangeTelfono(event){
        let contactosTemporal=contact;
        contactosTemporal.telefono=event.target.value;
        setContact(contactosTemporal)

    }
    function onchangeEmail(event){
        let contactosTemporal=contact;
        contactosTemporal.email=event.target.value;
        setContact(contactosTemporal)
    }
    function onchangeTelfono(event){
        let contactosTemporal=contact;
        contactosTemporal.telefono=event.target.value;
        setContact(contactosTemporal)
    }
    function modalCanderlar(){
        setmodal(false)

    }
    function modalGuardar(event){
        event.PrevenDefault();
        console.log(contact);
        guardarContacto(contact);
        setmodal(false)
    }
    return( 
        <div>
                    <div className="fondo" >
                        <button className="contactos"onClick={menu} >{"Contacto"}</button>
                     </div>
            <div className="formulario" id="open">
              <form>
                     <label for="nombre">Nombre:
                     <input id="cajas" onChange={onchangeNombre}></input>
                    </label><br></br>
                    <label for="numero">telefono:
                     <input id="cajas" onChange={onchangeTelfono}></input>
                     </label><br></br>
                    <label for="correo">Correo
                     <input id="cajas" onChange={onchangeEmail}></input>
                    </label><br></br>
                     <button typeof="submit"  className="boton1" onClick={modalGuardar}>Guardar</button>
                    <button className="Cancelar" onClick={modalCanderlar}>Cancelar</button>
             </form>
            </div>
        </div>
    )
    
}

export default AgregaContacto;