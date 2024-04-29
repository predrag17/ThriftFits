import React from 'react'
import NavBar from "../Layout/NavBar/NavBar";
import Footer from "../Layout/Footer/Footer";
import MainRegister from "../Layout/MainPart/Register/MainRegister";

function Register() {

    return (
        <>
            <NavBar parentComponent="Register"/>
            <MainRegister/>
            <Footer/>
        </>
    )
}

export default Register;