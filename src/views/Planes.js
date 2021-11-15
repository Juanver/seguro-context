import React from 'react';

import Proteccion from '../components/Proteccion';
import Sidebar from '../components/Sidebar';

const Planes = () => {
    return ( 
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-12 col-md-8">
                    <div className="content-right proteccion">
                        <Proteccion />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Planes;