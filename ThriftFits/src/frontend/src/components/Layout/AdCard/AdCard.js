import React, {useEffect, useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../../../index.css"
import "./adcard.css"
import CardImage from '../../../assets/clothes.jpg'
import {Link} from "react-router-dom";
import Service from "../../../repository/Service";

function AdCard({ad}) {

    const imageUrl = `http://localhost:8080/${ad.image.path}`;

    console.log(imageUrl)
    return (
        <>
            <Link to={"/"} style={{textDecoration: "none"}} className="linkCard">
                <div className="card" id="adCard" style={{width: "18rem"}}>
                    <div>
                        <img className="card-img-top" src={imageUrl} alt="Card image cap"/>
                        <p style={{marginLeft: "20px", marginBottom: "0"}}>adidas</p>
                    </div>

                    <div className="card-body">
                        <h5 className="card-title text-center" style={{fontWeight: "bold"}}>Cartoon Astrounaut
                            T-Shirt</h5>
                        <p className="text-center">sterjoskipredragit@gmail.com</p>
                    </div>

                    <div className="card-footer">
                        <div className="d-flex align-items-center">
                            <p style={{fontWeight: "bold", marginBottom: "0"}}>45 minutes ago</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>

    )
}

export default AdCard