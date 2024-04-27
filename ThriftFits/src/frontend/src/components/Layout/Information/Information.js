import React from 'react'
import InformationImage from "../../../assets/glasses.png";
import '../../../index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import './information.css'
import {Link} from "react-router-dom";

function Infromation() {
    return (
        <div className="container-fluid position-relative" style={{padding: "0", height: "450px", marginBottom: "50px"}}>
            <img
                src={InformationImage} // Placeholder image
                alt="Banner"
                className="img-fluid"
                style={{height: "100%", width: "100%", objectFit: "cover"}}
            />

            <div style={{width: "", margin: "auto"}}>
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                    <p style={{fontWeight: "bold", fontSize: "50px", width: "100%", color: "black", opacity: "85%", fontFamily: "Spartan"}}>If you want to
                        know more about us click below!</p>
                    <Link to={"/about"}>
                        <button className="button">
                            About
                        </button>

                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Infromation