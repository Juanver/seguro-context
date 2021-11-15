import React, {Fragment, useState, useEffect} from 'react';
import  {useNavigate, Link}  from 'react-router-dom';

import chevrot from '../assets/chevrot.svg'
import Ilustration from '../assets/Illustration.png'

const Proteccion = () => {

    const [plan, seleccionarPlan] = useState({
        tipo: 'basico',
        cobertura: '1'
    })
    let {tipo, cobertura} = plan;

    useEffect( () => {
        
    },[])

    let history = useNavigate()
    

    const actualizarPlan = e => {
        if(e.target.value==='avanzado'){
            cobertura = '5'
            seleccionarPlan({
                ...plan,
                cobertura: cobertura,
                [e.target.name] : e.target.value
            })
        } else{
            cobertura='1'
            seleccionarPlan({
                ...plan,
                cobertura: cobertura,
                [e.target.name] : e.target.value
            })
        }
    }

    const mandarPlan = e => {
        e.preventDefault()
        history('/gracias')
    }


    return ( 
        <Fragment>
            <div className="pasos">
                <Link to={'/bienvenido'} className="pasos__image">
                    <img src={chevrot} alt="volver"/>
                </Link>
                <p><span>PASO 3</span> DE 3</p>
            </div>
            <div className="content-right__subtitle">
                <h2>Elige <span>tu protección</span></h2>
                <p>Selecciona tu plan de salud ideal</p>
            </div>
            <form
                onSubmit={mandarPlan}
            >
                <div className="w-100">
                    <div className="w-25">
                        <div 
                            className={ tipo === 'basico' ? "custom-check border-green" : "custom-check"}
                        >
                            <input 
                                id="basico" 
                                name="tipo" 
                                type="radio" 
                                className="form-check-input custom-check__radio"
                                value="basico"
                                onChange={actualizarPlan}
                                checked={ tipo=== 'basico' ? "checked" : "" }
                            />
                            <label className="custom-check__label" htmlFor="basico">
                                BÁSICO
                                <h5><span>s/</span> 160</h5>
                                <p>mensual</p>
                            </label>
                        </div>
                    </div>
                    <div className="w-25">
                        <div className={ tipo === 'avanzado' ? "custom-check border-green" : "custom-check"}>
                            <input 
                                id="avanzado" 
                                name="tipo" 
                                type="radio" 
                                className="form-check-input custom-check__radio" 
                                value="avanzado"
                                onChange={actualizarPlan}
                                checked={ tipo=== 'avanzado' ? "checked" : "" }
                            />
                            <label className="custom-check__label" htmlFor="avanzado">
                                AVANZADO
                                <h5><span>s/</span> 200</h5>
                                <p>mensual</p>
                            </label>
                        </div>
                    </div>
                    <div className="w-25">
                        <div className={ tipo === 'premium' ? "custom-check border-green" : "custom-check"}>
                            <input 
                                id="premium" 
                                name="tipo" 
                                type="radio" 
                                className="form-check-input custom-check__radio" 
                                value="premium"
                                onChange={actualizarPlan}
                                checked={ tipo=== 'premium' ? "checked" : "" }
                            />
                            <label className="custom-check__label" htmlFor="premium">
                                PREMIUM
                                <h5><span>s/</span> 250</h5>
                                <p>mensual</p>
                            </label>
                            
                        </div>
                    </div>
                    <div className="w-25">
                        <div className={ tipo === 'full' ? "custom-check border-green" : "custom-check"}>
                            <input 
                                id="full" 
                                name="tipo" 
                                type="radio" 
                                className="form-check-input custom-check__radio" 
                                value="full"
                                onChange={actualizarPlan}
                                checked={ tipo=== 'full' ? "checked" : "" }
                            />
                            <label className="custom-check__label" htmlFor="full">
                                FULL
                                <h5><span>s/</span> 500</h5>
                                <p>mensual</p>
                            </label>
                            
                        </div>
                    </div>
                </div>            
                <div className="beneficios">
                    <h4>Cuentas con estos beneficios</h4>

                    <div className="beneficios__cobertura">
                        <div className="beneficios__cobertura-precio">
                            <div>
                                <h3>Cobertura máxima</h3>
                                <h2>S/ {cobertura}MM</h2>
                                <p>PLAN {tipo}</p>
                            </div>
                            <img src={Ilustration} alt="illutracion"/>
                        </div>
                        <div className="beneficios__cobertura-items">
                            <div className="item-beneficio">
                                <p>Lima <span>(zona de cobertura)</span></p>
                            </div>
                            <div className="item-beneficio">
                                <p>+30 clínicas <span>(en red afiliada)</span></p>
                            </div>
                            <div className="item-beneficio">
                                <p className={ tipo === 'basico' ? "line-through" : ""}>Médico a domicilio</p>
                            </div>
                            <div className="item-beneficio">
                                <p className={ tipo === 'basico' ? "line-through" : ""}>Chequeos preventivos</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="servicios">
                    <p>Revisa nuestros <span>servicios y exclusiones</span></p>
                    <div className="servicios__item">
                        <p>Servicio brindados</p>
                    </div>
                    <div className="servicios__item">
                        <p>Exclusiones</p>
                    </div>
                </div>
                <div className="comprar">
                    <a href="#">ENVIAR COTIZACION POR CORREO</a>
                    <input 
                        type="submit" 
                        className="btn btn-primary" 
                        value="COMPRAR PLAN"
                    />
                </div>
            </form>

        </Fragment>
    );
}
 
export default Proteccion;