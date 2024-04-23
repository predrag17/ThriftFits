import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import '../../../index.css'
import './navbar.css'
import Logo from '../../../assets/Logo.png'

function NavBar() {

    return (
        <nav className="navbar">
            <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center ">
                <div style={{flex: "0 0 auto"}}>
                    <a className="navbar-brand" href={"/"}>
                        <img src={Logo} alt="AppLogo"/>
                    </a>

                </div>

                <div className="flex-grow-1">
                    <ul className="navbar-nav d-flex flex-row justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" href={"/home"}>Home<span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item-1">
                            <a className="nav-link" href="#">Ads</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li>
                    </ul>


                </div>

                <div className="d-flex align-items-center justify-content-center" style={{marginRight: "20px"}}>
                    <div className="input-group mr-3" style={{position: "relative", marginRight: "25px"}}>
                        <input type="text" className="form-control" placeholder="Search" aria-label="Search"
                               aria-describedby="button-addon2" style={{zIndex: 1}}/>

                        <button className="btn" type="button" id="button-addon2"
                                style={{position: "absolute", right: 0, top: 0, bottom: 0, zIndex: 2}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </button>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                             className="bi bi-person" viewBox="0 0 16 16">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        </svg>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default NavBar;