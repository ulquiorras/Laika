import React from 'react'
import "../styles/InformationBarStyle.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faHandHoldingUsd, faTruck, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

export const InformationBarComponent = () => {
    return (        
        <div className="container-fluid header_a w-100 d-none d-xl-block w-100 bg-black">
            <div className=" informationContainer mx-auto row justify-content-center ">
                <div className="col text-left">
                    <span className="text-white">
                        <span className="iconTopBar"><FontAwesomeIcon icon={faShieldAlt}/></span>
                        Compras seguras online |
                    </span>

                    <span className="text-white">
                        <span className="iconTopBar"><FontAwesomeIcon icon={faHandHoldingUsd}/></span>
                        Pago Contra Entrega |
                    </span>

                    <span className="text-white">
                        <span className="iconTopBar"><FontAwesomeIcon icon={faTruck}/></span>
                        Entregas el mismo dia |
                    </span>
                </div>
                <div className="col text-right">
                    <span className="text-white">
                        Llamanos
                        <span className="iconTopBar"><FontAwesomeIcon icon={faPhoneSquare}/></span>
                        | 3009108496
                    </span>

                    <span className="textWrite text-white">
                        Escribenos
                        <span className="iconTopBar"><FontAwesomeIcon icon={faYoutube}/></span>
                        <span className="iconTopBar"><FontAwesomeIcon icon={faInstagram}/></span>
                        <span className="iconTopBar"><FontAwesomeIcon icon={faFacebook}/></span>
                    </span>
                </div>
            </div>
        </div>
        
    )
}
