import React, {useEffect, useState} from 'react'
import {useLocation, useNavigate} from "react-router-dom";
import NavBar from "../Layout/NavBar/NavBar";
import Footer from "../Layout/Footer/Footer";
import '../../index.css'
import Service from "../../repository/Service";
import AdCard from "../Layout/AdCard/AdCard";

function Ads() {

    const location = useLocation();
    const history = useNavigate()
    const [ads, setAds] = useState([])

    useEffect(() => {
        if (location.pathname === "/ads") {
            Service.fetchAllAds()
                .then(response => {
                    setAds(response.data);
                })
                .catch(error => {
                    console.error(error);
                })
        } else if (location.pathname === "/myAds") {
            const token = localStorage.getItem("JWT");
            if (token === null) {
                history("/login")
            } else {

                Service.fetchMyAds()
                    .then(response => {
                        setAds(response.data);
                    })
                    .catch(error => {
                        console.error(error);
                    })
            }


        }
    }, [location.pathname]);

    return (
        <>
            <NavBar/>

            <div className="container-fluid" style={{marginTop: "150px"}}>
                {location.pathname === "/ads" && (
                    <h1 style={{textAlign: "center", fontWeight: "bold", marginBottom: "50px"}}>All Ads!</h1>
                )}

                {location.pathname === "/myAds" && (
                    <h1 style={{textAlign: "center", fontWeight: "bold", marginBottom: "50px"}}>Your Added Ads!</h1>
                )}

                <div className="container-fluid">
                    <div className="row d-flex justify-content-start">
                        {ads.map(ad => (
                            <div className="col-md-3 mb-4 d-flex justify-content-center" key={ad.id}>
                                <AdCard ad={ad}/>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <Footer/>
        </>
    )
}

export default Ads;