import React from 'react'
import '../../../index.css'
import AdCard from "../AdCard/AdCard";

function Newest() {
    return (
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center" style={{marginTop: "50px", marginBottom: "50px", paddingLeft: "0", paddingRight: "0"}}>
            <div>
                <h1 style={{fontWeight: "bold"}}>Newest Ads that maybe you are interested in!</h1>
            </div>


            <div className="container-fluid">
                <div className="d-flex flex-wrap justify-content-center align-items-center gap-5"
                     style={{marginTop: "30px", paddingLeft: "100px", paddingRight: "20px"}}>
                    <div className="m-4">
                        <AdCard/>
                    </div>
                    <div className="m-4">
                        <AdCard/>
                    </div>
                    <div className="m-4">
                        <AdCard/>
                    </div>
                    <div className="m-4">
                        <AdCard/>
                    </div>
                    <div className="m-4">
                        <AdCard/>
                    </div>
                    <div className="m-4">
                        <AdCard/>
                    </div>
                    <div className="m-4">
                        <AdCard/>
                    </div>
                    <div className="m-4">
                        <AdCard/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Newest;