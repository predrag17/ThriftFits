import React, {useEffect, useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../../../index.css"
import "./adcard.css"
import {Link} from "react-router-dom";
import Service from "../../../repository/Service";
import {jwtDecode} from "jwt-decode";

function AdCard({ad, onDelete}) {

    const [imageUrl, setImageUrl] = useState(null);
    const [timeAgo, setTimeAgo] = useState(null);
    const [username, setUsername] = useState(null);

    useEffect(() => {
        const JWT = localStorage.getItem("JWT");

        if (JWT) {
            setUsername(jwtDecode(JWT).sub);
        }

        if (ad !== null) {
            Service.fetchImageById(ad.image.id)
                .then(response => {
                    const url = URL.createObjectURL(response.data);
                    setImageUrl(url);
                })
                .catch(error => {
                    console.log(error);
                })
        }

        const currentTime = new Date();
        const adTime = new Date(ad.createdAt);
        const elapsed = currentTime - adTime;

        setTimeAgo(calculateTimeAgo(elapsed));

        const intervalId = setInterval(() => {
            const currentTime = new Date();
            const elapsed = currentTime - adTime;
            setTimeAgo(calculateTimeAgo(elapsed));
        }, 60000);

        return () => clearInterval(intervalId);
    }, [ad]);

    const calculateTimeAgo = (timeElapsed) => {
        const minutes = Math.floor(timeElapsed / (1000 * 60));
        if (minutes < 60) {
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else if (minutes < 1440) {
            const hours = Math.floor(minutes / 60);
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else {
            const days = Math.floor(minutes / 1440);
            return `${days} day${days > 1 ? 's' : ''} ago`;
        }
    };


    return (
        <>
            <Link to={"/"} style={{textDecoration: "none"}} className="linkCard">
                <div className="card" id="adCard"
                     style={{width: "18rem", height: "100%", display: "flex", flexDirection: "column"}}>
                    <div>
                        {imageUrl && (
                            <img className="card-img-top"
                                 src={imageUrl}
                                 alt="Card image cap"
                                 style={{objectFit: "cover", height: "85%"}}
                            />
                        )}

                        <p style={{marginLeft: "20px", marginBottom: "0"}}>{ad.clothingBrand.toLowerCase()}</p>
                    </div>

                    <div className="card-body">
                        <h5 className="card-title text-center" style={{fontWeight: "bold"}}>{ad.clothingName}</h5>
                        <p className="text-center">{ad.user.email}</p>
                    </div>

                    <div className="card-footer">
                        <div className="d-flex align-items-center justify-content-between">
                            <p style={{fontWeight: "bold", marginBottom: "0"}}>{timeAgo}</p>

                            <div className="d-flex align-items-center justify-content-center">
                                {username && ad.user.username === username && (
                                    <>
                                        <button className="btn btn-warning">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-pencil-square"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path
                                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>
                                        </button>
                                        <button className="btn btn-danger" style={{margin: "0 5px"}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                <path
                                                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                            </svg>
                                        </button>
                                    </>
                                )}
                                {username && (
                                    <button className="btn btn-secondary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor"
                                             className="bi bi-heart" viewBox="0 0 16 16">
                                            <path
                                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                        </svg>
                                    </button>
                                )}
                            </div>

                        </div>

                    </div>
                </div>
            </Link>
        </>

    )
}

export default AdCard