import React from 'react'
import NavBar from "../Layout/NavBar/NavBar";
import Footer from "../Layout/Footer/Footer";
import Main from "../Layout/MainPart/Main";

function Login() {
    return (
        <>
            <NavBar parentComponent="Login"/>
            <Main/>
            <Footer/>
        </>
    )
}

export default Login