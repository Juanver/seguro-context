import React, {useContext} from 'react';
import proyectoContext from '../context/proyectoContext';
import FormUsuario from '../components/FormUsuario';
import Sidebar from '../components/Sidebar';
import Spinner from '../components/Spinner';

const Usuario = () => {
    const proyectosContext = useContext(proyectoContext);
    const { usuarioapi } = proyectosContext;
    if (usuarioapi === null) return <Spinner />;
    return ( 
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-12 col-md-8">
                    <div className="content-right">
                        <FormUsuario />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Usuario;