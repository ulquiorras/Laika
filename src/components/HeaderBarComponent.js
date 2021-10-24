import React from 'react'
import "../styles/HeaderStyle.scss"
import flag from "../assets/flag.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const HeaderBarComponent = () => {
    return (

        <nav className="navBar">

            <div className="navigation pt-2 mr-0 p-0 navbar navbar-expand-lg justify-content-center bg-purple">
                <div className="containerSearch pb-2 mx-auto">
                    <div className="containerRight d-flex position-relative mb-1 ">
                        <div className="flags  mt-xl-0 data-toggle={dropdown} aria-haspopup={true} aria-expanded={false}">
                            <div className="groupFlag d-flex position-relative align-items-center mr-3">
                                <img className="imgFlag" src={flag} />
                                <span className="city d-flex font-15 align-text-middle text-white">
                                    BOG
                                    <div className="px-1 text-white">
                                        <span>
                                            <FontAwesomeIcon icon={faChevronDown}/>
                                        </span>
                                    </div>
                                </span>
                                <div className="dropdown-menu dropdown-menu-center mt-2 dropdown_cities_responsive show">
                                    <div className="p-1 mb-1 bg-white text-center ml-auto mr-2">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="nombre navbar navbar-expand-lg navbar-light bg-white">       
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
        


       /*  <nav classNameName="navBar">
            <div classNameName="navigation navbar navbar-expand-xl">
                <div classNameName="navContainer pb-2">
                    <div classNameName="containerRight">
                        

                        <div classNameName="btnHambur">
                            <button classNameName="navbar-toggler iconStyle"></button>
                        </div>
                    </div>
                </div>
            </div>
            
        </nav> */
    )
}
