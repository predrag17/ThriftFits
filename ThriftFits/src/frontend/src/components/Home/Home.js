import React from "react";
import NavBar from "../Layout/NavBar/NavBar";
import '../../index.css'
import Image from "../Layout/Image/Image";
import Newest from "../Layout/Newest/Newest";

function Home() {
    return (
        <>
            <NavBar/>
            <Image/>
            <Newest/>
        </>
    )
}

export default Home;