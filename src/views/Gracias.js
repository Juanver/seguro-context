import React from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../components/Sidebar';

const Gracias = () => {
    // state global
    // const proyectosContext = useContext(proyectoContext);
    // const { usuarioapi } = proyectosContext

    

    // useEffect(()=> {
    //     // obtenerUsuario()
    // }, [])

    // if (usuarioapi === null) return null;

    return ( 
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-12 col-md-8">
                    <div className="content-right">
                        <h2>¡Gracias por <span>confiar en nosotros!</span></h2>
                        <p>Queremos conocer mejor la salud de los asegurados. Un asesor <b>se pondrá en contacto</b> contigo en las siguientes <b>48 horas.</b></p>
                        <div className="content-right__button">
                            <Link to={'/'} className="btn btn-primary">IR A SALUD</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Gracias;