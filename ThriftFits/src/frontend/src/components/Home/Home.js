import React from "react";
import NavBar from "../Layout/NavBar/NavBar";
import '../../index.css'
import Image from "../Layout/Image/Image";
import Newest from "../Layout/Newest/Newest";
import Information from "../Layout/Information/Information";
import Footer from "../Layout/Footer/Footer";

function Home() {
    return (
        <>
            <NavBar/>
            <Image/>
            <Newest/>
            <Information/>
            <Footer/>
        </>
    )
}

export default Home;