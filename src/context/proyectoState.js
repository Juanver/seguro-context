import React, { useReducer } from "react";

import proyectoContext from "./proyectoContext";
import proyectoReducer from './proyectoReducer'

import { 
    OBTENER_USUARIO,
    OBTENER_USUARIO_API
} from '.././types';

const ProyectoState = props => {
    
    const initialState = {
        usuario: null,
        usuarioapi: null,
    }
    // dispatch
    const [ state, dispatch ] = useReducer(proyectoReducer, initialState)

    const obtenerUsuario = usuario =>{
        dispatch({
            type: OBTENER_USUARIO,
            payload: usuario
        })
    }
    const obtenerUsuarioApi = usuarioapi =>{
        dispatch({
            type: OBTENER_USUARIO_API,
            payload: usuarioapi
        })
    }

    return(
        <proyectoContext.Provider
            value={{
                usuario: state.usuario,
                usuarioapi: state.usuarioapi,
                obtenerUsuario,
                obtenerUsuarioApi
            }}

        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;