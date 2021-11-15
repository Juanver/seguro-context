import { 
    OBTENER_USUARIO,
    OBTENER_USUARIO_API
} from '.././types';

export default (state, action) => {
    switch(action.type){
        case OBTENER_USUARIO:
            return {
                ...state,
                usuario: action.payload
            }
        case OBTENER_USUARIO_API:
            return {
                ...state,
                usuarioapi: action.payload
            }
        default:
            return state;
    }
}