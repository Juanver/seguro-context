import React, { useContext, useState } from 'react';
import  {useNavigate}  from 'react-router-dom';
import proyectoContext from '../context/proyectoContext';

import MensajeError from './MensajeError';


const Formulario = () => {

    // state global
    const proyectosContext = useContext(proyectoContext);
    const { obtenerUsuario,  obtenerUsuarioApi} = proyectosContext

    const [usuario, obtenerNuevoUsuario] = useState({
        tipoDocumento: '2',
        numDocumento: '', 
        fecNacimiento: '',
        telefono: '',
        proteccion: false,
        comerciales: false   
    })

    const [errordocumento, obtenerErrorDocumento] = useState(false)
    const [error, obtenerError] = useState(false)

    const [activodoc, obtenerActivodoc] = useState(false);
    const [activofec, obtenerActivofec] = useState(false);
    const [activocel, obtenerActivocel] = useState(false);
    const [classfec, obtenerClassfec] = useState('');


    const actualizarUsuario = e => {
        
        if(e.target.name==="numDocumento"){
            if(e.target.value !== ''){
                obtenerActivodoc(true);
            } else{
                obtenerActivodoc(false);
            }
        }
        if(e.target.name==="fecNacimiento"){
            if(e.target.value !== ''){
                obtenerActivofec(false);
            } else{
                obtenerActivofec(false);
            }
        }
        if(e.target.name==="telefono"){
            if(e.target.value !== ''){
                obtenerActivocel(true);
            } else{
                obtenerActivocel(false);
            }
        }
        if(e.target.name==="proteccion"){
            obtenerNuevoUsuario({
                ...usuario,
                proteccion : !proteccion
            })
        } else if(e.target.name==="comerciales"){
            obtenerNuevoUsuario({
                ...usuario,
                comerciales : !comerciales
            })
        }
        else{
            obtenerNuevoUsuario({
                ...usuario,
                [e.target.name]: e.target.value
            })
        }
    }

    const {tipoDocumento, numDocumento, fecNacimiento, telefono, proteccion, comerciales} = usuario

    let history = useNavigate()
    const enviarUsuario = e => {
        e.preventDefault()

        let erDocumento;
        erDocumento = /(^([0-9]{8,8})|^)$/;
        if( !erDocumento.test(numDocumento)){
            obtenerErrorDocumento(true)
            return
        }
        if(tipoDocumento.trim() === '' || numDocumento.trim()==='' ||  fecNacimiento.trim()==='' || telefono.trim()===''){
            obtenerError(true)
            return
        }
        obtenerError(false)
        obtenerErrorDocumento(false)
        obtenerUsuario(usuario)
        const traerUsuario = async () => {
            const rawResponse = await fetch('https://freestyle.getsandbox.com/dummy/obtenerdatospersona', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                tipoDocumento: tipoDocumento,
                numDocumento: numDocumento,
                fecNacimiento: fecNacimiento,
                telefono: telefono
              })
            });
            const content = await rawResponse.json();
          
            obtenerUsuarioApi(content.data.tercero);
        };

        traerUsuario()
        history('/bienvenido')
    }

    return ( 
        <form
            onSubmit={enviarUsuario}
        >
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
                        className={ activodoc ? "active" : ""} 
                        htmlFor="numDocumento" 
                    >Nro. de Documento</label>    
                </div>
            </div>
            {
                errordocumento ? <MensajeError mensaje="Ingrese un DNI válido" /> : null
            }
            <div className="form-group float-label">
                <input 
                    type="text"
                    onFocus={(e) => e.target.type ='date'}
                    onBlur={ (e) => {e.target.type ='text'; if(fecNacimiento===''){obtenerClassfec('')}else obtenerClassfec('label-date')}}
                    id="fecNacimiento"
                    name="fecNacimiento"
                    className=""
                    onChange={actualizarUsuario}
                    value={fecNacimiento}
                />
                <label 
                    className={ classfec + (activofec ? "active" : '')} 
                    htmlFor="fecNacimiento" 
                >Fecha de nacimiento</label>
            </div>
            <div className="form-group float-label">
                <input 
                    id="telefono"
                    type="text"
                    name="telefono"
                    className=""
                    onChange={actualizarUsuario}
                    value={telefono}
                />
                <label 
                    className={ activocel ? "active" : ""} 
                    htmlFor="telefono" 
                >Celular</label>
            </div>
            <div className="form-check mb-5">
                <input 
                  id="proteccion" 
                  name="proteccion" 
                  type="checkbox" 
                  className="form-check-input" 
                  onChange={actualizarUsuario}
                  checked={proteccion}
                />
                <label className="form-check__label" htmlFor="proteccion">
                  Acepto la <a href="#">Política de Protección de Datos Personales y los Términos y Condiciones.</a>
                </label>
            </div>
            <div className="form-check mb-5">
                <input 
                  id="comerciales" 
                  name="comerciales" 
                  type="checkbox" 
                  className="form-check-input" 
                  onChange={actualizarUsuario}
                  checked={comerciales}
                />
                <label className="form-check__label" htmlFor="comerciales">
                  Acepto la <a href="#">Política de Envío de comunicaciones comerciales</a>
                </label>
            </div>
            { error ?<MensajeError mensaje="Todos los campos son requeridos "/> : null}
            <input 
                type="submit" 
                value="COMENCEMOS"
                className="btn btn-primary"
            />
        </form>
     );
}
 
export default Formulario;