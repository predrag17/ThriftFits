import React, {useEffect, useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import '../../../index.css'
import './navbar.css'
import Logo from '../../../assets/Logo.png'
import {Link, useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";

function NavBar({parentComponent}) {
    const [token, setToken] = useState(null);
    const [username, setUsername] = useState(null);
    const history = useNavigate()

    useEffect(() => {
        const storedToken = localStorage.getItem("JWT");
        if (storedToken) {
            try {
                const decodedToken = jwtDecode(storedToken);
                setUsername(decodedToken.sub);
                setToken(storedToken);
            } catch (error) {
                console.error("Invalid token:", error.message);
                localStorage.removeItem("JWT");
            }
        }

    }, []);


    const handleLogout = () => {
        localStorage.removeItem("JWT");
        history("/login")
    }

    const toggleHamburger = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");

    };


    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-lg">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                <div style={{flex: "0 0 auto"}}>
                    <a className="navbar-brand" href={"/"}>
                        <img src={Logo} alt="AppLogo"/>
                    </a>

                </div>

                {parentComponent !== "Login" && parentComponent !== "Register" && (
                    <div className="d-flex">
                        <div className="input-group" style={{position: "relative", width: "100%"}}>
                            <input type="text" className="form-control" placeholder="Search" aria-label="Search"
                                   aria-describedby="button-addon2"
                                   style={{zIndex: 1, padding: "0.5rem 20rem 0.5rem 1rem"}}/>

                            <button className="btn" type="button" id="button-addon2"
                                    style={{position: "absolute", right: 0, top: 0, bottom: 0, zIndex: 2}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-search" viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                            </button>
                        </div>

                    </div>

                )}

                <div className="d-flex flex-row align-items-center justify-content-center"
                     style={{marginRight: "10px"}}>
                    <div className="navbar">
                        <ul className="navbar-nav d-flex flex-row" id="unordered">
                            <li className="nav-item">
                                <a className="nav-link" href={"/home"}>Home<span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item-1">
                                <a className="nav-link" href="/ads">Ads</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>

                    {parentComponent !== "Login" && token === null ? (
                        <div>
                            <Link to={"/login"}>
                                <button style={{
                                    border: "none",
                                    backgroundColor: "#E3E6F3",
                                    transition: "transform 0.4s"
                                }}
                                        onMouseEnter={(e) =>
                                            e.currentTarget.style.transform = "scale(1.5)"}
                                        onMouseLeave={(e) =>
                                            e.currentTarget.style.transform = "scale(1)"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                         className="bi bi-person" viewBox="0 0 16 16">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className="d-flex" style={{marginRight: "10px"}}>
                            <button
                                onClick={handleLogout}
                                style={{
                                    border: "none",
                                    backgroundColor: "#E3E6F3",
                                    transition: "transform 0.4s",
                                    textDecoration: "none",
                                    position: "relative",
                                    cursor: "pointer"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "scale(1.2)";
                                    e.currentTarget.style.transformOrigin = "top center"
                                }}

                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                }}
                            >
                                <span
                                    style={{fontSize: "18px", fontWeight: "bold"}}>{username}</span>
                            </button>
                        </div>
                    )}

                    {parentComponent !== "Login" && parentComponent !== "Register" && token !== null &&
                        (
                            <div>
                                <ul className="nav-menu">
                                    <li className="nav-items">
                                        <a className="nav-link" href={"/add"}>
                                            Add Ad
                                            <span
                                                className="sr-only"></span></a>
                                    </li>
                                    <li className="nav-items">
                                        <a className="nav-link" href={"/myAds"}>
                                            My Ads
                                            <span
                                                className="sr-only"></span></a>
                                    </li>
                                    <li className="nav-items">
                                        <a className="nav-link" href={"/myFavourites"}>
                                            Favourites
                                            <span
                                                className="sr-only"></span></a>
                                    </li>
                                </ul>

                                <div className="hamburger"
                                     onClick={toggleHamburger}
                                >
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                </div>
                            </div>

                        )
                    }
                </div>


            </div>
        </nav>
    )
}

export default NavBar;