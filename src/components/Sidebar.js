import React from 'react';
import Base from '../assets/Base.png'
import shadow from '../assets/shadow.png'

const Sidebar = () => {
    return ( 
        <div className="col-12 col-md-4 sidebar"
            style={{ 
                backgroundImage: `url(${Base})`,
                backgroundRepeat: 'no-repeat',
            }}
            >
            <img src={shadow} alt="sombra"/>
        </div>
     );
}
 
export default Sidebar;