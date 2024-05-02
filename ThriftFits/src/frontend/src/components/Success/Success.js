import React from 'react';
import {Link} from 'react-router-dom';

function SuccessMessage() {

    return (
        <div className="container mt-5">
            <div className="alert alert-success" role="alert">
                <div className="d-flex flex-column justify-content-between align-items-center">
                    <p style={{textAlign: "center", fontWeight: "bold", fontSize: "40px"}}>
                        Your Ad was successfully added, deleted or edited!
                    </p>
                    <div className="container d-flex justify-content-around">
                        <Link to={"/myAds"}>
                            <button className="btn btn-success btn-lg">
                                My Ads
                            </button>
                        </Link>

                        <Link to={"/ads"}>
                            <button className="btn btn-success btn-lg">
                                All Ads
                            </button>
                        </Link>

                        <Link to={"/home"}>
                            <button className="btn btn-success btn-lg">
                                Home
                            </button>
                        </Link>

                    </div>

                </div>


            </div>
        </div>
    );
}

export default SuccessMessage;