import React, {useEffect, useState} from 'react'
import '../../../index.css'
import AdCard from "../AdCard/AdCard";
import Service from "../../../repository/Service";

function Newest() {

    const [ads, setAds] = useState([]);

    useEffect(() => {
        Service.fetchNewestAds()
            .then(response => {
                setAds(response.data)
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    return (
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center"
             style={{marginTop: "50px", marginBottom: "50px", paddingLeft: "0", paddingRight: "0"}}>
            <div style={{marginBottom: "30px"}}>
                <h1 style={{fontWeight: "bold"}}>Newest Ads that maybe you are interested in!</h1>
            </div>


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
    )
}

export default Newest;