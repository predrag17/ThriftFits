import React from 'react'
import HomeImage from "../../../assets/home.png";

function Image() {
    return (
        <div className="container-fluid" style={{marginTop: "106px", paddingLeft: "0", paddingRight: "0"}}>
            <div className="row">
                <div className="col">
                    <img
                        src={HomeImage} // Placeholder image
                        alt="Banner"
                        className="img-fluid"
                        style={{height: "550px", width: "100%", objectFit: "cover"}}
                    />
                </div>
            </div>
        </div>
    )
}

export default Image;