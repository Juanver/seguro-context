import React, { Fragment, useContext, useEffect, useState } from 'react';
import proyectoContext from '../context/proyectoContext';
import  {useNavigate, Link}  from 'react-router-dom';

import MensajeError from './MensajeError';
import chevrot from '../assets/chevrot.svg'
const FormUsuario = () => {

    // state global
    const proyectosContext = useContext(proyectoContext);
    const { usuario, usuarioapi } = proyectosContext

    const [usuarioconfirmado, obtenerUsuarioConfirmado] = useState({
        tipoDocumento: '',
        numDocumento: '',
        nombres: '', 
        apellidoPaterno: '',
        apellidoMaterno: '',
        fecNacimiento: '',
        genero: '',
        asegurar: ''
    })
    const [error, obtenerError] = useState(false)

    const [activodoc, obtenerActivodoc] = useState(true);
    const [activonombres, obtenerActivonombres] = useState(true);
    const [activoapellidop, obtenerActivopellidop] = useState(true);
    const [activoapellidom, obtenerActivopellidom] = useState(true);
    const [activofec, obtenerActivofec] = useState(true);
    const [classfec, obtenerClassfec] = useState('');

    useEffect(() => {
        if(usuarioapi !== null){
            obtenerUsuarioConfirmado({
                tipoDocumento: usuario.tipoDocumento,
                numDocumento: usuario.numDocumento,
                nombres: usuarioapi.nombres, 
                apellidoPaterno: usuarioapi.apellidoPaterno,
                apellidoMaterno: usuarioapi.apellidoMaterno,
                fecNacimiento: usuarioapi.fecNacimiento,
                genero: usuarioapi.sexo,
                asegurar: ''
            })
        }

    }, [usuarioapi])

    const {tipoDocumento, numDocumento, nombres, apellidoPaterno, apellidoMaterno, fecNacimiento, genero, asegurar} = usuarioconfirmado
    

    const actualizarUsuario = e => {
        if(e.target.name==="numDocumento"){
            if(e.target.value !== ''){
                obtenerActivodoc(true);
            } else{
                obtenerActivodoc(false);
            }
        }
        if(e.target.name==="nombres"){
            if(e.target.value !== ''){
                obtenerActivonombres(true);
            } else{
                obtenerActivonombres(false);
            }
        }
        if(e.target.name==="apellidoPaterno"){
            if(e.target.value !== ''){
                obtenerActivopellidop(true);
            } else{
                obtenerActivopellidop(false);
            }
        }
        if(e.target.name==="apellidoMaterno"){
            if(e.target.value !== ''){
                obtenerActivopellidom(true);
            } else{
                obtenerActivopellidom(false);
            }
        }
        if(e.target.name==="fecNacimiento"){
            if(e.target.value !== ''){
                obtenerActivofec(false);
            } else{
                obtenerActivofec(false);
            }
        }

        obtenerUsuarioConfirmado({
            ...usuarioconfirmado,
            [e.target.name] : e.target.value
        })
        if(e.target.name === "asegurar"){
            if(e.target.value === "Mi"){
                obtenerUsuarioConfirmado({
                    ...usuarioconfirmado,
                    asegurar: e.target.value
                })
            }else {
                obtenerUsuarioConfirmado({
                    ...usuarioconfirmado,
                    asegurar: e.target.value
                })
            }
        }
    }
    let history = useNavigate()
    const enviarFormUsuario = e =>{
        e.preventDefault()
        if(tipoDocumento.trim() === '' || numDocumento.trim()==='' ||  nombres.trim()==='' ||  apellidoPaterno.trim()==='' ||  apellidoMaterno.trim()==='' ||  fecNacimiento.trim()==='' || genero.trim()==='' || asegurar.trim()===''){
            obtenerError(true)
            return
        }
        history('/planes')
    }

    if (usuarioapi === null) return null;
    return ( 
        
        <Fragment>
            <div className="pasos">
                <Link to={'/'} className="pasos__image">
                    <img src={chevrot} alt="volver"/>
                </Link>
                <p><span>PASO 2</span> DE 3</p>
            </div>
            <div className="content-right__subtitle">
                <h2>Elige <span>tu protección</span></h2>
                <p>Selecciona tu plan de salud ideal</p>
            </div>
            <div className="content-right__subtitle">
                <h2>Hola, <span>{nombres}</span></h2>
                <p>Valida que los datos sean correctos</p>
            </div>
            <form
                onSubmit={enviarFormUsuario}
            >
                <p>Datos personales del titular</p>
                <div className="form-custom">
                    <select 
                        className="form-select"
                        name="tipoDocumento" 
                        onChange={actualizarUsuario} 
                        value={tipoDocumento}
                    >
                        <option value="2">DNI</option>
                        <option value="1">Otros</option>
                    </select>
                    <div className="float-label input-label">
                        <input 
                            type="text"
                            id="numDocumento"
                            name="numDocumento"
                            placeholder=""
                            onChange={actualizarUsuario}
                            value={numDocumento}
                        />
                        <label 
                            className={ activodoc ? " active" : ""} 
                            htmlFor="numDocumento" 
                        >Nro. de Documento</label>    
                    </div>
                </div>
                <div className="form-group float-label">
                    <input 
                        id="nombres"
                        name="nombres"
                        type="text"
                        onChange={actualizarUsuario}
                        value={nombres}
                    />
                    <label 
                        className={ activonombres ? " active" : ""} 
                        htmlFor="nombres" 
                    >Nombres</label>
                </div>
                <div className="form-group float-label">
                    <input 
                        type="text"
                        id="apellidoPaterno"
                        name="apellidoPaterno"
                        onChange={actualizarUsuario}
                        value={apellidoPaterno}
                    />
                    <label 
                        className={ activoapellidop ? " active" : ""} 
                        htmlFor="apellidoPaterno" 
                    >Apellido Paterno</label>
                </div>
                <div className="form-group float-label">
                    <input 
                        type="text"
                        id="apellidoMaterno"
                        name="apellidoMaterno"
                        onChange={actualizarUsuario}
                        value={apellidoMaterno}
                    />
                    <label 
                        className={ activoapellidom ? " active" : ""} 
                        htmlFor="apellidoMaterno" 
                    >Apellido Materno</label>
                </div>
                <div className="form-group float-label">
                    <input 
                        type="text"
                        onFocus={(e) => e.target.type ='date'}
                        onBlur={ (e) => {e.target.type ='text'; if(fecNacimiento===''){obtenerClassfec('')}else obtenerClassfec('label-date')}}
                        id="fecNacimiento"
                        name="fecNacimiento"
                        onChange={actualizarUsuario}
                        value={fecNacimiento}
                    />
                    <label 
                        className={ classfec + (activofec ? " active" : '')} 
                        htmlFor="fecNacimiento" 
                    >Fecha de nacimiento</label>
                </div>
                <p>Género</p>
                <div className="form-check mb-5">
                    <input 
                      id="M" 
                      name="genero" 
                      type="radio" 
                      className="form-check-input" 
                      onChange={actualizarUsuario}
                      checked={ genero==='M' ? 'checked' : ''}
                      value="M"
                    />
                    <label className="form-check__label" htmlFor="M">
                        Masculino
                    </label>
                </div>
                <div className="form-check mb-5">
                    <input 
                      id="F" 
                      name="genero" 
                      type="radio" 
                      className="form-check-input" 
                      onChange={actualizarUsuario}
                      checked={ genero==='F' ? 'checked' : ''}
                      value="F"
                    />
                    <label className="form-check__label" htmlFor="F">
                        Femenino
                    </label>
                </div>
                <p>¿A quién vamos a asegurar?</p>
                <div className="form-check mb-5">
                    <input 
                      id="Mi" 
                      name="asegurar" 
                      type="radio" 
                      className="form-check-input" 
                      onChange={actualizarUsuario}
                      value="Mi"
                    />
                    <label className="form-check__label" htmlFor="Mi">
                        Solo a mí
                    </label>
                </div>
                <div className="form-check mb-5">
                    <input 
                      id="Familia" 
                      name="asegurar" 
                      type="radio" 
                      className="form-check-input" 
                      onChange={actualizarUsuario}
                      value="Familia"
                    />
                    <label className="form-check__label" htmlFor="Familia">
                        A mí y a mi familia
                    </label>
                </div>
                { error ? <MensajeError mensaje="Todos los campos son requeridos "/> : null}
                <input 
                    type="submit" 
                    value="COMENCEMOS"
                    className="btn btn-primary"
                />
            </form>
        </Fragment>
     );
}
 
export default FormUsuario;