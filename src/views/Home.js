import React, { Fragment } from 'react';

import Formulario from '../components/Formulario';

import shield from '../assets/shield.png'
import mobile from '../assets/mobile.png'

const Home = () => {
    const today = new Date();
    const year = today.getFullYear();
    return ( 
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-6 custom-col">
                        <div className="content-left">
                            <div className="content-left__title">
                                <h1>Seguro de <span>Salud</span></h1>
                            </div>
                            <div className="content-left__descriptions">
                                <div className="content">
                                    <div className="content__item">
                                        <img src={shield} alt="facil y rapido"/>
                                        <p>Cómpralo de manera fácil y rápida</p>
                                    </div>
                                    <div className="content__item">
                                        <img src={mobile} alt="facil y rapido"/>
                                        <p>Cotiza y compra tu seguro 100% digital</p>
                                    </div>
                                    <div className="content__item">
                                        <img src={shield} alt="facil y rapido"/>
                                        <p>Hasta S/. 12 millones de cobertura anual</p>
                                    </div>
                                    <div className="content__item">
                                        <img src={mobile} alt="facil y rapido"/>
                                        <p>Más de 300 clínicas en todo el Perú</p>
                                    </div>
                                </div>
                                <div className="footer">
                                    <p>© {year} RIMAC Seguros y Reaseguros.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="content-right">
                            <div className="content-right__subtitle">
                                <h2>Obtén tu <span>seguro ahora</span></h2>
                                <p>Ingresa los datos para comenzar</p>
                            </div>
                            <Formulario />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Home;