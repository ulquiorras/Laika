import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faHandHoldingUsd, faTruck, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

export const InformationComponent = () => {
    return (
        <section className="bg-primary">
            <div className="container bg-primary">
                <div className="row">
                    <div className="col text-left">
                        <span className="text-white">
                            <FontAwesomeIcon icon={faShieldAlt}/>
                            Compras seguras online
                        </span>

                        <span className="text-white">
                            <FontAwesomeIcon icon={faHandHoldingUsd}/>
                            Pago Contra Entrega
                        </span>

                        <span className="text-white">
                            <FontAwesomeIcon icon={faTruck}/>
                            Entregas el mismo dia
                        </span>
                    </div>
                    <div className="col text-right">
                        <span className="text-white">
                            Llamanos
                            <FontAwesomeIcon icon={faPhoneSquare}/>
                            | 3009108496
                        </span>

                        <span className="text-white">
                            Escribenos
                            <FontAwesomeIcon icon={faYoutube}/>
                            <FontAwesomeIcon icon={faInstagram}/>
                            <FontAwesomeIcon icon={faFacebook}/>
                        </span>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
